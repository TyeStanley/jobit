"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Theme from "./Theme";
import NavLink from "./NavLink";
import MenuIcon from "../icons/MenuIcon";
import CloseIcon from "../icons/CloseIcon";
import MobileLink from "./MobileLink";
import { navLinks } from "@/constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-0 z-50 h-[75px] w-full border-b border-natural5 bg-white px-6 dark:border-dark3 dark:bg-dark1 lg:px-[5rem]">
        <div className="mx-auto flex h-full w-full items-center justify-between md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1400px]">
          <Link href="/" className="flex items-center gap-1.5">
            <Image
              src="/icons/logo/jobit.svg"
              alt="Jobit Logo"
              width={20}
              height={20}
            />
            <Image
              src="/icons/logo/jobit-text.svg"
              alt="Jobit Text"
              width={60}
              height={15}
            />
          </Link>

          <div className="body-m-medium relative top-[1px] hidden h-full gap-7 text-natural6 md:flex">
            {navLinks.map(({ text, path }: { text: string; path: string }) => (
              <NavLink
                key={text}
                text={text}
                path={path}
                pathname={pathname}
                setOpen={setOpen}
              />
            ))}
          </div>

          <Theme className="hidden md:flex" />

          <div
            className="flex h-[24px] w-[24px] cursor-pointer items-center justify-center md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
      </nav>

      {open && (
        <>
          <div
            className={`fixed inset-0 z-30 bg-black/30 transition-all dark:bg-white/10 md:hidden ${
              open ? "animate-in fade-in-0" : "animate-out fade-out-0"
            }`}
            onClick={() => setOpen(false)}
          />

          <div
            className={`fixed inset-y-0 right-0 z-40 flex h-full w-3/4 flex-col items-center justify-center border-l border-natural5 bg-white p-3 transition-all dark:border-dark3 dark:bg-dark1 sm:max-w-sm md:hidden ${
              open ? "slide-in-from-right" : "slide-out-to-right"
            }`}
          >
            {navLinks.map(({ text, path }: { text: string; path: string }) => (
              <MobileLink
                key={text}
                text={text}
                path={path}
                pathname={pathname}
                setOpen={setOpen}
              />
            ))}

            <div className="mt-9 w-full px-4">
              <Theme />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
