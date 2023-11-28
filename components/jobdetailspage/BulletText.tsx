import Image from "next/image";

const BulletText = ({ text }: { text: string }) => {
  return (
    <li className="flex items-start gap-2.5">
      <Image
        src="/icons/iconography/oval.svg"
        alt="oval"
        width={10}
        height={10}
        className="relative top-[7px]"
      />
      {text}
    </li>
  );
};

export default BulletText;
