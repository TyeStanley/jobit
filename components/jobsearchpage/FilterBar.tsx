"use client";

import React from "react";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { filterData } from "@/constants";

interface FilterBarProps {
  checked: Record<string, boolean>;
  setChecked: React.Dispatch<
    React.SetStateAction<{
      [key: string]: boolean;
    }>
  >;
}

const FilterBar = ({ checked, setChecked }: FilterBarProps) => {
  // Keeps track of the checked inputs
  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, checked } = e.target;

    setChecked((prevState) => ({ ...prevState, [id]: checked }));
  };

  return (
    <Accordion
      type="multiple"
      className="mt-8 hidden min-w-[250px] flex-col gap-7 xl:flex"
    >
      {filterData.map((item) => (
        <AccordionItem key={item.id} value={item.id} className="">
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            {item.list.map((listItem) => (
              <label
                key={listItem.id}
                htmlFor={listItem.id}
                className="relative flex cursor-pointer items-center gap-3.5"
              >
                <Image
                  src={
                    checked[listItem.id as keyof typeof checked]
                      ? "/icons/iconography/check.svg"
                      : "/icons/iconography/uncheck.svg"
                  }
                  alt="check"
                  width={18}
                  height={18}
                  className="absolute bottom-[1px] left-0"
                />
                <input
                  id={listItem.id}
                  type="checkbox"
                  onChange={onHandleChange}
                  className="invisible"
                />
                {listItem.name}
              </label>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FilterBar;
