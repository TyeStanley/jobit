import Link from "next/link";
import Image from "next/image";

interface FollowCompanyProps {
  image: string;
  title: string;
  subtitle: string;
  link: string;
}

const FollowCompany = ({
  image,
  title,
  subtitle,
  link,
}: FollowCompanyProps) => {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white p-5 shadow dark:bg-dark2">
      <section className="flex items-center gap-4">
        <Image src={image} alt="company logo" width={48} height={48} />

        <div>
          <p className="body-m-medium md:body-l-semibold text-black dark:text-white">
            {title}
          </p>
          <p className="body-14px-medium mt-1.5 text-natural6">{subtitle}</p>
        </div>
      </section>

      <Link
        href={link}
        target="_blank"
        className="flex items-center gap-1.5 rounded-xl border border-primary px-2.5 py-1.5 text-primary"
      >
        <Image
          src="/icons/iconography/plus.svg"
          alt="plus icon"
          width={18}
          height={18}
        />
        Follow
      </Link>
    </div>
  );
};

export default FollowCompany;
