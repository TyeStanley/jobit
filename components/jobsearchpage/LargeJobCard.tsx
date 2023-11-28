import Image from "next/image";

import Tag from "@/components/Tag";
import { keywords } from "@/constants";
import { findKeywords, formatSalary } from "@/lib/utils";

interface LargeJobCardProps {
  image?: string;
  title: string;
  companyName: string;
  description: string;
  location: string;
  jobPostedDate: string;
  minSalary?: number;
  maxSalary?: number;
}

const LargeJobCard = ({
  image,
  title,
  companyName,
  description,
  location,
  minSalary,
  maxSalary,
}: LargeJobCardProps) => {
  return (
    <div className="flex max-w-[425px] flex-col gap-5 rounded-xl bg-white px-4 py-5 dark:bg-dark2 md:max-w-full md:p-5">
      <section className="flex gap-3">
        <Image
          src={image || "/icons/logo/jobit.svg"}
          alt="Company Logo"
          width={45}
          height={45}
          className="h-[45px] w-[45px] rounded-xl border border-natural3 bg-jobcardIcon object-contain p-1.5 dark:border-[#2C2C2C] dark:bg-[#2C2C2C] md:h-[64px] md:w-[64px]"
        />

        <div>
          <h4 className="body-m-semibold md:body-l-semibold line-clamp-1 text-black dark:text-white">
            {title}
          </h4>

          <section className="body-13px-medium md:body-14px-medium flex flex-col text-natural7 dark:text-natural6 md:mt-1.5 md:flex-row md:items-center">
            <p>{companyName}</p>

            <span className="hidden md:flex"> • </span>

            <p>{location}</p>
          </section>
        </div>
      </section>

      <p className="body-13px-regular md:body-14px-regular line-clamp-6 text-natural7 dark:text-natural5 md:line-clamp-2">
        {description}
      </p>

      <section className="flex gap-1.5">
        {findKeywords(description, keywords).map((tag: string) => (
          <Tag key={tag} tag={tag} />
        ))}
      </section>

      <section className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
        <p className="body-m-medium lg:body-l-medium text-black dark:text-white">
          {/* @ts-ignore */}
          {formatSalary(minSalary, maxSalary)}
          <span className="body-m-medium lg:body-l-medium text-natural7 dark:text-natural6">
            /year
          </span>
        </p>

        <div className="flex gap-5">
          <button className="body-13px-semibold md:body-15px-semibold w-full rounded-xl bg-natural4 px-3.5 py-2 text-natural7 hover:bg-natural5 dark:bg-dark3 hover:dark:bg-dark1 md:w-[125px] md:py-3">
            Message
          </button>

          <button className="body-13px-semibold md:body-15px-semibold w-full rounded-xl bg-primary px-3.5 py-2 text-white hover:bg-primary/80 md:w-[180px] md:py-3">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default LargeJobCard;
