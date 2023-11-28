"use server";

import { options } from "@/constants";

interface getJobListParams {
  query?: string;
  location?: string;
  jobType?: string;
  checked?: {
    [key: string]: boolean;
  };
}

export async function getJobList(params: getJobListParams) {
  const { query, location, jobType } = params;

  let newQuery = "";

  if (query && location) {
    newQuery = query + " in " + location;
  } else if (query) {
    newQuery = query;
  }

  if (jobType) {
    jobType.toUpperCase();
  }

  const jsearch = await fetch(
    `https://jsearch.p.rapidapi.com/search?${
      newQuery && `query=${newQuery}`
    }&employment_type=${jobType || "FULLTIME"}`,
    options
  );

  const jobs = await jsearch.json();

  return jobs.data;
}

export async function getSalary({ jobTitle, location, radius = 200 }: any) {
  const salary = await fetch(
    `https://jsearch.p.rapidapi.com/estimated-salary?job_title=${jobTitle}&location=${location}&radius=${radius}`,
    options
  );

  const salaryData = await salary.json();

  return salaryData;
}
