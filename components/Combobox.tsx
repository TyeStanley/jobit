import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { jobType } from "@/constants";

export function Combobox({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          aria-expanded={open}
          className="flex items-center justify-between gap-3 border-b border-natural2 px-3 text-natural6 dark:border-[#44444F]/50 lg:w-[200px] lg:border-transparent lg:px-2 dark:lg:border-transparent xl:w-[300px] xl:px-3"
        >
          <div className="flex items-center gap-3">
            <Image
              src="/icons/iconography/briefcase.svg"
              alt="Briefcase Icon"
              width={28}
              height={28}
            />
            <p className="body-14px-bold w-full bg-transparent py-3 text-natural6">
              {value
                ? jobType.find((type) => type.value === value)?.label
                : "Job Type"}
            </p>
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </button>
      </PopoverTrigger>

      <PopoverContent className="border-natural4 p-0">
        <Command>
          <CommandInput placeholder="Search Job Types" />
          <CommandEmpty>No job type found.</CommandEmpty>
          <CommandGroup>
            {jobType.map((type) => (
              <CommandItem
                key={type.value}
                value={type.value}
                className=""
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === type.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {type.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
