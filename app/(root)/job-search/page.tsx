"use client";

import { useState } from "react";

import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/jobsearchpage/FilterBar";
import LargeJobCard from "@/components/jobsearchpage/LargeJobCard";
import { formatDate } from "@/lib/utils";
import { getJobList } from "@/lib/actions/job.action";

const Page = () => {
  // Search Bar State
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");

  // Filter Bar State
  const [checked, setChecked] = useState({});

  // Job List State
  const [jobList, setJobList] = useState([]);

  const handleSubmit = async () => {
    const data = await getJobList({ query, location, jobType, checked });

    setJobList(data);
  };

  const formatPostedDate = (date: string) => {
    const currentDate = new Date();
    const postedDate = new Date(date);

    const difference = Math.abs(currentDate.getTime() - postedDate.getTime());
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

    return `${days} days ago`;
  };

  return (
    <>
      <h1 className="h4-headline lg:h1-headline mx-auto max-w-[425px] text-black dark:text-white md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1400px]">
        Let&apos;s find your dream job
      </h1>
      <p className="mx-auto mt-3.5 max-w-[425px] text-[1.25rem] font-medium leading-[2rem] text-natural6 dark:text-natural6 md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1400px]">
        {formatDate(new Date())}
      </p>

      <SearchBar
        setQuery={setQuery}
        setLocation={setLocation}
        jobType={jobType}
        setJobType={setJobType}
        handleSubmit={handleSubmit}
      />

      <section className="mx-auto flex gap-20 md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1400px]">
        <FilterBar checked={checked} setChecked={setChecked} />

        <article className="mx-auto w-full">
          <div className="my-8 flex justify-between text-natural6">
            <p className="body-m-medium">
              Showing:{" "}
              <span className="font-semibold text-black dark:text-white">
                {jobList.length} Job{jobList.length === 1 ? "" : "s"}
              </span>
            </p>

            {/* TODO: Implement a sorting with this part */}
            {/* <p className="body-14px-medium flex items-center gap-2.5 text-black dark:text-natural5">
              <span className="body-14px-semibold hidden text-natural6 md:inline">
                Sort by:{" "}
              </span>
              Relevange
              <Image
                src="/icons/iconography/cheveron.svg"
                alt="arrow down"
                width={16}
                height={16}
              />
            </p> */}
          </div>

          <section className="mt-7 flex flex-col gap-[1.38rem]">
            {jobList.map((job: any) => (
              <LargeJobCard
                key={job.job_id}
                image={job.employer_logo}
                title={job.job_title}
                companyName={job.employer_name}
                description={job.job_description}
                location={`${job.job_city}, ${
                  job.job_country
                } • ${formatPostedDate(job.job_posted_at_datetime_utc)}`}
                jobPostedDate={job.job_posted_at_timestamp}
              />
            ))}
          </section>
        </article>
      </section>
    </>
  );
};

export default Page;
