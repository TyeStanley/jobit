"use client";

import Chart from "@/components/salariespage/Chart";
import { getSalary } from "@/lib/actions/job.action";
import { formatDate } from "@/lib/utils";
import { useState, KeyboardEvent } from "react";

const Page = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [radius, setRadius] = useState("");
  const [data, setData] = useState({
    labels: [],
    title: "",
    location: "",
    datasets: [],
  }) as any;

  const handleKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && jobTitle !== "" && location !== "") {
      const salary = await getSalary({ jobTitle, location, radius });

      if (salary.data.length > 0) {
        const labels = salary.data?.map((salary: any) => salary.publisher_name);
        const minSalary = salary.data?.map((salary: any) => salary.min_salary);
        const maxSalary = salary.data?.map((salary: any) => salary.max_salary);
        const medianSalary = salary.data?.map(
          (salary: any) => salary.median_salary
        );

        const currentData = {
          labels: [...labels],
          title: jobTitle,
          location,
          datasets: [
            {
              label: "Minimum Salary",
              backgroundColor: "#FDDD8C",
              data: [...minSalary],
            },
            {
              label: "Maximum Salary",
              backgroundColor: "#0BAB7CB2",
              data: [...maxSalary],
            },
            {
              label: "Median Salary",
              backgroundColor: "#FFBBD7",
              data: [...medianSalary],
            },
          ],
        };
        setData(currentData);
      } else {
        setData({
          labels: [],
          title: "",
          location: "",
          datasets: [],
        });
      }
    }
  };

  return (
    <div className="mx-auto flex max-w-[425px] flex-col md:max-w-[620px] md:justify-between lg:max-w-[1024px] xl:max-w-[1400px] xl:flex-row xl:gap-10">
      <div className="mx-auto w-full xl:max-w-[50%]">
        <h1 className="h4-headline lg:h1-headline text-black dark:text-white ">
          Estimated Salaries
        </h1>
        <p className="mx-auto mt-3.5 text-[1.25rem] font-medium leading-[2rem] text-natural6 dark:text-natural6 md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1400px]">
          {formatDate(new Date())}
        </p>

        <div className="body-14px-semibold md:body-15px-semibold mt-10 flex flex-col gap-2 text-natural6 dark:text-natural5 md:gap-3">
          <label htmlFor="title">Job Title*</label>
          <input
            id="title"
            type="text"
            onChange={(e) => setJobTitle(e.target.value)}
            className="w-full rounded-xl border border-natural5/60 bg-natural2 px-5 py-3 outline-none dark:border-natural8 dark:bg-dark2"
            onKeyDown={handleKeyDown}
          />
        </div>

        <article className="flex flex-col md:mt-7 md:flex-row md:gap-9">
          <div className="body-14px-semibold md:body-15px-semibold mt-5 flex flex-col gap-2 text-natural6 dark:text-natural5 md:w-[50%] md:gap-3">
            <label htmlFor="location">Location*</label>
            <input
              id="location"
              type="text"
              className="rounded-xl border border-natural5/60 bg-natural2 px-5 py-3 outline-none dark:border-natural8 dark:bg-dark2"
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          <div className="body-14px-semibold md:body-15px-semibold mt-5 flex flex-col gap-2 text-natural6 dark:text-natural5 md:w-[50%] md:gap-3">
            <label htmlFor="radius">Radius</label>
            <input
              id="radius"
              type="number"
              className="rounded-xl border border-natural5/60 bg-natural2 px-5 py-3 outline-none dark:border-natural8 dark:bg-dark2"
              onChange={(e) => setRadius(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </article>
      </div>

      <Chart data={data} />
    </div>
  );
};

export default Page;
