import Image from "next/image";

import { formatJobType, getHourlyRate } from "@/lib/utils";

import { InlineJobCardProps } from "@/types";

const InlineJobCard = ({
  icon,
  title,
  company,
  location,
  minSalary,
  maxSalary,
  type,
}: InlineJobCardProps) => {
  return (
    <section className="flex gap-2 rounded-xl bg-natural3 px-3 py-3.5 dark:bg-dark3">
      <Image
        src={icon || "/icons/logo/jobit.svg"}
        alt="company logo"
        width={36}
        height={36}
        className="object-contain"
      />

      <div className="flex w-full flex-col justify-center">
        <div className="flex items-center justify-between gap-2">
          <h4 className="body-15px-semibold md:body-m-semibold line-clamp-1 text-black dark:text-white">
            {title}
          </h4>

          <p className="body-13px-semibold md:body-14px-medium line-clamp-1 text-right text-black dark:text-white">
            {getHourlyRate(minSalary, maxSalary)}{" "}
            <span className="body-13px-regular md:body-14px-regular text-natural7 dark:text-natural6">
              / Hr
            </span>
          </p>
        </div>

        <div className="flex items-center justify-between gap-2">
          <p className="body-13px-regular md:body-14px-regular line-clamp-1 text-natural7 dark:text-natural6">
            {company} • {location}
          </p>

          <p className="body-13px-regular md:body-14px-regular line-clamp-1 text-right text-natural7 dark:text-natural6">
            {formatJobType(type, "recommended")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default InlineJobCard;
