"use client";

import React, { useState } from "react";

import SearchBar from "@/components/SearchBar";
import InlineJobCard from "@/components/jobdetailspage/InlineJobCard";
import { getJobList } from "@/lib/actions/job.action";
import { formatDate, formatJobType } from "@/lib/utils";
import Image from "next/image";
import JobDetailsCard from "@/components/jobdetailspage/JobDetailsCard";
import Link from "next/link";

const Page = () => {
  // Search Bar State
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");

  // Job List State
  const [jobList, setJobList] = useState<any>();

  const handleSubmit = async () => {
    const data = await getJobList({ query, location, jobType });

    setJobList(data);
  };

  let extraData: any = [];
  let highlights: any = [];
  let inlineCardData: any = [];

  if (jobList) {
    extraData = [
      {
        title: "Experience",
        value:
          jobList[0]?.job_required_experience?.required_experience_in_months ||
          "N/A",
      },
      {
        title: "Work Level",
        value: "N/A",
      },
      {
        title: "Employment Type",
        value: formatJobType(jobList && jobList[0]?.job_employment_type),
      },
      {
        title: "Offer Salary",
        value: "N/A",
      },
    ];

    highlights = [
      {
        title: "Responsibilities",
        list: jobList[0]?.job_highlights?.Responsibilities,
      },
      {
        title: "Qualifications and Skill Sets",
        list: jobList[0]?.job_highlights?.Qualifications,
      },
    ];

    inlineCardData = jobList.slice(1);
  }

  if (!jobList)
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
      </>
    );

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

      <section className="mx-auto mt-7 flex flex-col md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1400px] xl:flex-row xl:gap-10">
        <article className="flex flex-col">
          <Link
            href="/job-search"
            className="body-13px-medium flex w-[74px] items-center justify-center gap-1.5 rounded-xl bg-natural2 px-2.5 py-2 text-natural7 shadow dark:bg-dark3"
          >
            <Image
              src="/icons/iconography/cheveron.svg"
              alt="arrow left"
              width={18}
              height={18}
              className="rotate-90"
            />
            Back
          </Link>

          <JobDetailsCard
            logo={jobList[0]?.employer_logo}
            jobTitle={jobList[0]?.job_title}
            employerName={jobList[0]?.employer_name}
            city={jobList[0]?.job_city}
            country={jobList[0]?.job_country}
            postedAt={jobList[0]?.job_posted_at_datetime_utc}
            extraData={extraData}
            jobApplyLink={jobList[0]?.job_apply_link}
            description={jobList[0]?.job_description}
            highlights={highlights}
            companyType={jobList[0]?.employer_company_type}
          />
        </article>

        <article className="mt-7 flex flex-col xl:mt-0">
          <h4 className="body-l-bold flex h-[34px] items-center text-black dark:text-white">
            Similar Jobs
          </h4>

          <section className="mt-6 flex flex-col gap-4">
            {inlineCardData.map((job: any) => (
              <InlineJobCard
                key={job.job_id}
                title={job.job_job_title}
                logo={job.employer_logo}
                city={job.job_city}
                country={job.job_country}
                timeLeft={job.job_offer_expiration_timestamp}
              />
            ))}
          </section>
        </article>
      </section>
    </>
  );
};

export default Page;
