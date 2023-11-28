import InlineJobCard from "@/components/homepage/InlineJobCard";
import Button from "@/components/homepage/button";
import JobCard from "@/components/homepage/JobCard";
import Title from "@/components/homepage/Title";
import FeaturedCard from "@/components/homepage/FeaturedCard";
import {
  featuredData,
  jobDetailsUrl,
  latestJobsUrl,
  queryKeywords,
} from "@/constants";
import {
  formatDate,
  getJobDetailsById,
  getLatestJobs,
  getRandomQuery,
  getUserCity,
  getUserIp,
} from "@/lib/utils";

export default async function Home() {
  const ip = await getUserIp();
  const city = await getUserCity(ip);
  const query = getRandomQuery(queryKeywords, city);
  const jobs = await getLatestJobs(latestJobsUrl, query);

  // retrieves the job ids and stores them into the array
  const jobIds = jobs.data?.map((job: { job_id: string }) => job.job_id);

  // retrieves the job details for each job id for the salary information
  const jobSalaryDetails = await Promise.all(
    jobIds
      .slice(0, 5)
      .map(
        async (jobId: string) => await getJobDetailsById(jobDetailsUrl, jobId)
      )
  );

  // retrieves the first 5 jobs from the array for displaying the latest jobs on the homepage
  const currentJobs = jobs.data?.slice(0, 5);

  // adds the min and max salary to each job object for displaying the salary information
  currentJobs.forEach((job: any, index: number) => {
    const estimatedSalaries =
      jobSalaryDetails[index].data[0].estimated_salaries;

    if (estimatedSalaries[0]?.min_salary && estimatedSalaries[0]?.max_salary) {
      const minSalary = estimatedSalaries[0].min_salary;
      const maxSalary = estimatedSalaries[0].max_salary;

      job.minSalary = minSalary;
      job.maxSalary = maxSalary;
    }
  });

  const latestJobs = currentJobs.slice(0, 4);
  const recommendedJobs = currentJobs;

  return (
    <>
      <h1 className="h4-headline lg:h1-headline mx-auto max-w-[425px] text-black dark:text-white md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1400px]">
        Welcome to the Job Search Platform for Developers
      </h1>
      <p className="mx-auto mt-3.5 max-w-[425px] text-[1.25rem] font-medium leading-[2rem] text-natural6 dark:text-natural6 md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1400px]">
        {formatDate(new Date())}
      </p>

      <div className="mx-auto mt-10 max-w-[425px] md:max-w-[768px] lg:max-w-[1024px] xl:flex xl:max-w-[1400px] xl:gap-10">
        <section className="flex flex-col xl:w-[64%] xl:flex-1">
          <div className="flex items-center justify-between">
            <Title text="Latest Job Posts" />

            <Button />
          </div>

          <article className="mb-10 mt-7 flex flex-wrap gap-10">
            {latestJobs?.length ? (
              latestJobs.map((job: any) => (
                <JobCard
                  key={job.job_id}
                  title={job.job_title}
                  logo={job.employer_logo}
                  description={job.job_description}
                  jobType={job.job_employment_type}
                  jobExpirationDate={job.job_offer_expiration_timestamp}
                  minSalary={job.minSalary}
                  maxSalary={job.maxSalary}
                />
              ))
            ) : (
              <div>No latest jobs!</div>
            )}
          </article>

          <Title text="Featured Companies" />

          <article className="mt-7 flex flex-wrap gap-10">
            {featuredData?.map((data) => (
              <FeaturedCard
                key={data.title}
                image={data.image}
                title={data.title}
                location={data.location}
                text={data.text}
              />
            ))}
          </article>
        </section>

        <section className="mx-auto mt-10 xl:mt-0 xl:max-w-[31%] xl:flex-1">
          <div className="flex items-center justify-between">
            <Title text="Recommended For You" />

            <Button />
          </div>

          <article className="mt-7 flex min-w-[315px] flex-col gap-3 rounded-xl bg-white p-5 shadow-shadow1 dark:bg-dark2">
            {recommendedJobs?.length ? (
              recommendedJobs?.map((job: any) => (
                <InlineJobCard
                  key={job.job_id}
                  icon={job.employer_logo}
                  title={job.job_title}
                  company={job.employer_name}
                  location={`${job.job_city}, ${job.job_country}`}
                  minSalary={job.minSalary}
                  maxSalary={job.maxSalary}
                  type={job.job_employment_type}
                />
              ))
            ) : (
              <div>No recommended jobs!</div>
            )}
          </article>
        </section>
      </div>
    </>
  );
}
