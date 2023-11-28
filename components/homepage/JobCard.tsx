import Image from "next/image";

import Tag from "../Tag";
import { Button } from "../ui/button";
import {
  findKeywords,
  formatExpirationDate,
  formatJobType,
  formatSalary,
} from "@/lib/utils";

import { keywords } from "@/constants";
import { JobCardProps } from "@/types";

const JobCard = ({
  title,
  logo,
  description,
  jobType,
  jobExpirationDate,
  minSalary,
  maxSalary,
}: JobCardProps) => {
  return (
    <section className="flex max-w-[425px] flex-1 flex-col gap-7 rounded-xl bg-white p-5 shadow-shadow1 dark:bg-dark2 md:min-w-[300px] md:max-w-[500px] lg:min-w-[400px]">
      <div className="flex items-start gap-5">
        <Image
          src={logo || "/icons/logo/jobit.svg"}
          alt="Company Logo"
          width={64}
          height={64}
          className="h-[64px] w-[64px] rounded-xl border border-natural3 bg-jobcardIcon object-contain p-1.5 dark:border-[#2C2C2C] dark:bg-[#2C2C2C]"
        />

        <div className="flex flex-col gap-3">
          <h3 className="body-m-semibold lg:body-l-semibold line-clamp-1 text-black dark:text-white">
            {title}
          </h3>

          <div className="flex gap-1.5">
            {findKeywords(description, keywords).map((tag: string) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </div>
      </div>

      <p className="body-15px-regular lg:body-m-regular line-clamp-6 text-natural7 dark:text-natural6">
        {description}
      </p>

      <div className="flex gap-1.5">
        <Tag
          tag={formatJobType(jobType)}
          icon="/icons/iconography/briefcase.svg"
        />

        <Tag
          tag={formatExpirationDate(jobExpirationDate)}
          icon="/icons/iconography/clock.svg"
        />
      </div>

      <div className="flex items-center justify-between">
        <p className="body-m-semibold lg:body-l-semibold text-black dark:text-white">
          {formatSalary(minSalary, maxSalary)}
          <span className="body-m-regular lg:body-l-regular text-natural7 dark:text-natural6">
            /year
          </span>
        </p>

        <Button className="body-15px-semibold bg-primary px-3.5 py-3 text-white transition hover:bg-primary hover:opacity-80 dark:bg-primary dark:text-white dark:hover:bg-primary">
          Apply Now
        </Button>
      </div>
    </section>
  );
};

export default JobCard;
