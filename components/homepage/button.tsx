import Image from "next/image";

const Button = () => {
  return (
    <button className="body-m-medium flex items-center gap-2 rounded-xl border border-natural2 px-2.5 py-[0.44rem] text-natural7 dark:border-natural7">
      See All
      <Image
        src="/icons/iconography/cheveron.svg"
        alt="Cheveron"
        width={16}
        height={16}
      />
    </button>
  );
};

export default Button;
