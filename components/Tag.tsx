"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const Tag = ({ tag, icon }: { tag: string; icon?: string }) => {
  const pathname = usePathname();

  return (
    <div
      className={`body-13px-regular lg:body-14px-regular flex gap-2 rounded bg-natural4 px-2 py-1 text-natural6 ${
        pathname === "/company-details" ? "dark:bg-dark2" : "dark:bg-dark3"
      }`}
    >
      {icon && <Image src={icon} alt="tag icon" width={18} height={18} />}
      {tag}
    </div>
  );
};

export default Tag;
