import Image from "next/image";

const NoDescription = () => {
  return (
    <div className="body-l-bold flex flex-col gap-3 text-black dark:text-white">
      <Image
        src="/icons/iconography/nodescription.svg"
        alt="plus"
        width={53}
        height={53}
      />
      No description provided
    </div>
  );
};

export default NoDescription;
