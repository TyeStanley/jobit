import Image from "next/image";

import Tag from "@/components/Tag";

import { keywords } from "@/constants";
import { findKeywords } from "@/lib/utils";

interface CompanyJobCardProps {
  title: string;
  logo: string;
  description: string;
}

const CompanyJobCard = ({ title, logo, description }: CompanyJobCardProps) => {
  return (
    <section className="flex min-w-[200px] max-w-[425px] flex-1 flex-col gap-7 rounded-xl bg-white p-5 shadow-company dark:bg-dark3 dark:shadow-none md:min-w-[300px] md:max-w-[500px] lg:min-w-[400px] xl:min-w-[350px]">
      <div className="flex items-start gap-5">
        <Image
          src={logo || "/icons/logo/jobit.svg"}
          alt="Company Logo"
          width={64}
          height={64}
          className="h-[64px] w-[64px] rounded-xl border border-natural3 bg-jobcardIcon object-contain p-1.5 dark:border-dark2 dark:bg-dark2"
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

      <p className="body-15px-regular lg:body-m-regular line-clamp-5 text-natural7 dark:text-natural6">
        {description}
      </p>

      <div className="flex items-center justify-end">
        <button className="rounded-xl bg-primary/10 px-3.5 py-2 text-primary hover:bg-primary/30">
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default CompanyJobCard;
