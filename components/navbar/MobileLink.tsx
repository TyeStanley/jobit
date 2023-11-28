import React from "react";
import Link from "next/link";

const MobileLink = ({
  text,
  path,
  pathname,
  setOpen,
}: {
  text: string;
  path: string;
  pathname: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Link
      key={text}
      href={path}
      onClick={() => setOpen(false)}
      className={`w-full rounded-md px-4 py-3 
            ${
              pathname === path
                ? "body-m-bold bg-natural1 text-primary dark:bg-dark3 dark:text-primary"
                : "body-m-regular dark:body-m-medium text-natural7 dark:text-natural6"
            }
          `}
    >
      {text}
    </Link>
  );
};

export default MobileLink;
