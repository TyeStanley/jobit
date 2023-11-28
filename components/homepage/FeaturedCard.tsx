import Image from "next/image";

const FeaturedCard = ({
  image,
  title,
  location,
  text,
}: {
  image: string;
  title: string;
  location: string;
  text: string;
}) => {
  return (
    <div className="flex w-full max-w-[425px] flex-col gap-6 rounded-xl bg-white p-5 dark:bg-dark2 md:flex-1">
      <section className="flex items-center gap-2.5">
        <Image
          src={image || "/icons/logo/jobit.svg"}
          alt="company logo"
          width={48}
          height={48}
        />

        <p className="body-l-semibold text-black dark:text-white">{title}</p>
      </section>

      <section className="flex flex-col gap-2">
        <article className="flex items-center gap-2.5">
          <Image
            src="/icons/iconography/pin.svg"
            alt="pin icon"
            width={20}
            height={20}
          />

          <p className="body-14px-medium md:body-14px-semibold text-natural6">
            {location}
          </p>
        </article>

        <article className="flex items-center gap-2.5">
          <Image
            src="/icons/iconography/briefcase.svg"
            alt="briefcase icon"
            width={20}
            height={20}
          />

          <p className="body-14px-medium md:body-14px-semibold text-natural6">
            {text}
          </p>
        </article>
      </section>

      <button className="body-14px-medium md:body-14px-bold rounded-xl bg-natural4 px-3.5 py-3 text-natural6 hover:bg-natural2 dark:bg-dark3 dark:hover:bg-dark1">
        See All
      </button>
    </div>
  );
};

export default FeaturedCard;
