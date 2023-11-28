import { formatExpirationDate } from "@/lib/utils";
import Image from "next/image";

interface InlineJobCardProps {
  title: string;
  logo: string;
  city: string;
  country: string;
  timeLeft: number;
}

const InlineJobCard = ({
  title,
  logo,
  city,
  country,
  timeLeft,
}: InlineJobCardProps) => {
  return (
    <div className="flex flex-col gap-5 rounded-xl bg-white p-5 shadow dark:bg-dark2 xl:min-w-[350px]">
      <section className="flex gap-4">
        <Image
          src={logo || `/icons/logo/jobit.svg`}
          alt="Company Logo"
          width={48}
          height={48}
          className="min-h-[48px] min-w-[48px] object-contain"
        />

        <article className="w-full">
          <div className="flex items-center justify-between">
            <h4 className="body-m-bold md:body-l-bold text-black dark:text-white">
              {title || "No Title Provided"}
            </h4>
            <p className="body-14px-semibold text-black dark:text-white">
              $?<span className="body-14px-regular text-natural6"> / Hr</span>
            </p>
          </div>

          <p className="body-14px-regular md:body-14px-medium text-natural6">
            {city || "N/A"}, {country}
          </p>
        </article>
      </section>

      <section className="flex items-center justify-between">
        <p className="body-14px-medium text-natural6">
          {formatExpirationDate(timeLeft)}
        </p>
        <button className="body-14px-medium rounded-lg bg-primary/10 px-3.5 py-2 text-primary hover:bg-primary/30">
          View
        </button>
      </section>
    </div>
  );
};

export default InlineJobCard;
