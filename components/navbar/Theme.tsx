"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeProvider";

const ThemeToggle = ({ className }: { className?: string }) => {
  const { mode, setMode } = useTheme();

  return (
    <div className={`flex gap-[10px] ${className}`}>
      <Image
        src="/icons/iconography/sun.svg"
        width={24}
        height={24}
        alt="Sun"
      />

      <div
        onClick={() => {
          setMode(mode === "dark" ? "light" : "dark");
          localStorage.theme = mode === "dark" ? "light" : "dark";
        }}
        className="relative flex h-[24px] w-[43px] cursor-pointer items-start rounded-full bg-natural2 p-[2px] transition-colors duration-200 ease-in-out dark:bg-dark3"
      >
        <Image
          src="/icons/iconography/ellipse.svg"
          width={20}
          height={20}
          alt="Toggle Circle"
          className="shrink-0 transition duration-200 ease-in-out dark:translate-x-[18px]"
        />
      </div>

      <Image
        src="/icons/iconography/moon.svg"
        width={24}
        height={24}
        alt="Moon"
      />
    </div>
  );
};

export default ThemeToggle;
