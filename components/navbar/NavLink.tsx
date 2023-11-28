import React from "react";
import Link from "next/link";

const NavLink = ({
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
      className={`flex h-full items-center border-b
            ${
              pathname === path
                ? "body-m-bold border-primary text-primary"
                : "body-m-medium border-natural5 hover:border-primary hover:text-primary dark:border-dark3 dark:hover:border-primary"
            }
          `}
    >
      {text}
    </Link>
  );
};

export default NavLink;
