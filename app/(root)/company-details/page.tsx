"use client";

import Link from "next/link";
import Image from "next/image";

import CompanyJobCard from "@/components/companydetailspage/CompanyJobCard";
import FollowCompany from "@/components/companydetailspage/FollowCompany";

import { followCompanyData } from "@/constants";

const Page = () => {
  return (
    <>
      <div className="mx-auto md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1400px]">
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
      </div>

      <div className="mx-auto mt-9 flex flex-col md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1400px] xl:flex-row xl:gap-10">
        <div className="flex flex-col">
          <section className="relative h-[192px] w-full">
            <Image
              src="/icons/job-details-bg.jpg"
              alt="blue wave background"
              fill
              className="rounded-t-xl object-cover"
            />
          </section>

          <div className="relative bottom-[30px] mb-9 px-5">
            <Image
              src={"/icons/logo/jobit.svg"}
              alt="company logo"
              width={64}
              height={64}
              className="rounded-xl border-[3px] border-natural1 bg-natural1 dark:border-dark2 dark:bg-dark2"
            />

            <h2 className="h5-headline md:h1-headline mt-3 text-black dark:text-white md:mt-10">
              UIHUT
            </h2>

            <p className="body-14px-medium md:body-l-medium mt-2.5 text-natural8 dark:text-natural6">
              UIHUT Technologies LLC • Sylhet, BD
            </p>

            <p className="body-14px-medium md:body-m-medium mt-1 text-natural7">
              Design Resources platform
            </p>
          </div>

          <div className="flex flex-col rounded-xl bg-white px-5 pt-5 shadow dark:bg-dark2 xl:mt-0">
            <label
              htmlFor="jobtitle"
              className="flex items-center justify-between gap-5 rounded-xl bg-white px-4 py-2 shadow dark:bg-dark3 md:w-[50%]"
            >
              <div className="flex items-center gap-4">
                <Image
                  src="/icons/iconography/search.svg"
                  alt="search icon"
                  width={24}
                  height={24}
                />

                <input
                  id="jobtitle"
                  type="text"
                  placeholder="Search Job title"
                  className="w-full border-none bg-transparent text-natural6 outline-none"
                />
              </div>

              <button className="rounded-xl bg-primary px-3.5 py-1 text-white hover:bg-primary/80 md:py-2">
                Search
              </button>
            </label>

            <h4 className="body-m-bold md:body-l-bold mt-7 flex h-[34px] items-center text-black dark:text-white">
              Recently Posted Job
            </h4>

            <article className="my-5 grid grid-cols-1 gap-2 min-[600px]:grid-cols-2 md:gap-9">
              <CompanyJobCard
                title="UI/UX Designer"
                logo="/icons/logo/jobit.svg"
                description="We are looking for a UI/UX Designer to turn our software into easy-to-use products for our clients. html"
              />

              <CompanyJobCard
                title="UI/UX Designer"
                logo="/icons/logo/jobit.svg"
                description="We are looking for a UI/UX Designer to turn our software into easy-to-use products for our clients. html"
              />

              <CompanyJobCard
                title="UI/UX Designer"
                logo="/icons/logo/jobit.svg"
                description="We are looking for a UI/UX Designer to turn our software into easy-to-use products for our clients. html"
              />

              <CompanyJobCard
                title="UI/UX Designer"
                logo="/icons/logo/jobit.svg"
                description="We are looking for a UI/UX Designer to turn our software into easy-to-use products for our clients. html"
              />
            </article>
          </div>
        </div>

        <div>
          <h4 className="h4-headline mt-12 text-black dark:text-white xl:mt-0">
            Similar Companies
          </h4>

          <section className="mt-5 flex flex-col gap-5 xl:min-w-[350px]">
            {followCompanyData.map((company) => (
              <FollowCompany
                key={company.title}
                image={company.image}
                title={company.title}
                subtitle={company.subtitle}
                link={company.link}
              />
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Page;
