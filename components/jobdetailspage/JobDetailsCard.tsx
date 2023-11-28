import Image from "next/image";

import BulletText from "./BulletText";
import { formatDatePostedAgo } from "@/lib/utils";
import Link from "next/link";
import NoDescription from "./NoDescription";

import { JobDetailsCardProps } from "@/types";

const JobDetailsCard = ({
  logo,
  jobTitle,
  employerName,
  city,
  country,
  postedAt,
  extraData,
  jobApplyLink,
  description,
  highlights,
  companyType,
}: JobDetailsCardProps) => {
  return (
    <div className="relative mt-6 rounded-xl bg-white px-5 pt-5 shadow dark:bg-dark2 xl:min-w-[800px]">
      <section className="relative h-[192px]">
        <Image
          src="/icons/job-details-bg.jpg"
          alt="blue wave background"
          fill
          className="rounded-t-xl object-cover"
        />
      </section>

      <section className="relative bottom-[45px] flex flex-col px-5 pt-5">
        <Image
          src={logo || "/icons/logo/jobit.svg"}
          alt="company logo"
          width={64}
          height={64}
          className="rounded-xl border-[3px] border-natural1 bg-natural1 dark:border-dark2 dark:bg-dark2"
        />

        <div className="mt-3.5 flex items-center justify-between md:mt-7">
          <section>
            <h2 className="body-m-semibold md:h2-headline text-black dark:text-white">
              {jobTitle}
            </h2>
            <p className="body-13px-medium md:body-m-semibold mt-1.5 text-natural7">
              {employerName} • {city || "N/A"}, {country} •{" "}
              {formatDatePostedAgo(postedAt)}
            </p>
          </section>

          <section className="hidden gap-4 md:flex md:items-center">
            <Link
              href={jobApplyLink}
              target="_blank"
              className="body-15px-semibold rounded-xl bg-primary px-3.5 py-2.5 text-white hover:bg-primary/80"
            >
              Apply Now
            </Link>

            <button className="body-15px-semibold rounded-xl border border-natural5 px-3.5 py-2.5 text-natural7 hover:bg-natural5 dark:border-natural8 dark:hover:bg-natural8">
              Message
            </button>
          </section>
        </div>

        <div className="mt-7 flex flex-wrap justify-between rounded-xl bg-natural3 shadow dark:bg-dark3">
          {extraData.map((obj) => (
            <section
              key={obj.title}
              className="flex flex-col gap-2 p-2.5 md:px-6 md:py-4"
            >
              <p className="body-13px-medium md:body-14px-semibold text-natural6">
                {obj.title}
              </p>
              <p className="body-14px-semibold md:body-m-semibold text-natural8 dark:text-white">
                {obj.value}
              </p>
            </section>
          ))}
        </div>

        <section className="mt-3.5 flex items-center gap-4 md:hidden">
          <Link
            href={jobApplyLink}
            target="_blank"
            className="body-15px-semibold w-full rounded-xl bg-primary px-3.5 py-2.5 text-white hover:bg-primary/80"
          >
            Apply Now
          </Link>

          <button className="body-15px-semibold w-full rounded-xl border border-natural5 px-3.5 py-2.5 text-natural7 hover:bg-natural5 dark:border-natural8 dark:hover:bg-natural8">
            Message
          </button>
        </section>

        <h3 className="body-m-bold md:body-l-bold mt-7 text-black dark:text-white">
          About The Job
        </h3>

        <p className="body-14px-regular md:body-m-regular mt-2.5 text-natural7 dark:text-natural5">
          {description}
        </p>

        {highlights ? (
          highlights?.map((obj) => (
            <>
              <h3 className="body-m-bold md:body-l-bold mt-7 text-black dark:text-white">
                {obj.title}
              </h3>

              <ul className="body-m-medium md:body-m-regular mt-3 flex flex-col gap-3 text-natural7 dark:text-natural5">
                {obj.list.map((text) => (
                  <BulletText key={text} text={text} />
                ))}
              </ul>
            </>
          ))
        ) : (
          <NoDescription />
        )}

        <div className="my-8 h-[1px] w-full bg-natural2 dark:bg-dark3" />

        <h3 className="body-m-bold md:body-l-bold text-black dark:text-white">
          About The Company
        </h3>

        <div className="mt-5 flex items-center justify-between">
          <section className="flex items-center gap-5">
            <Image
              src={logo || "/icons/logo/jobit.svg"}
              alt="company logo"
              width={50}
              height={50}
              className="h-[34px] w-[34px] rounded-xl border-[2px] border-natural1 bg-natural1 md:h-[50px] md:w-[50px]"
            />

            <div>
              <h4 className="body-m-semibold md:body-l-semibold text-black dark:text-natural2">
                {employerName}
              </h4>
              <p className="body-15px-medium md:body-m-medium text-natural7">
                {companyType}
              </p>
            </div>
          </section>

          <button className="flex items-center gap-1.5 rounded-xl border border-primary px-2.5 py-2 text-primary">
            <Image
              src="/icons/iconography/plus.svg"
              alt="plus"
              width={18}
              height={18}
            />
            Follow
          </button>
        </div>

        <p className="body-m-regular mt-7 text-natural7 dark:text-natural5">
          No Company Description
        </p>
      </section>
    </div>
  );
};

export default JobDetailsCard;
