import Image from "next/image";

import { Combobox } from "./Combobox";

interface SearchBarProps {
  setQuery: (query: string) => void;
  setLocation: (location: string) => void;
  jobType: string;
  setJobType: (jobType: string) => void;
  handleSubmit: () => void;
}

const SearchBar = ({
  setQuery,
  setLocation,
  jobType,
  setJobType,
  handleSubmit,
}: SearchBarProps) => {
  return (
    <div className="mx-auto mt-10 flex max-w-[425px] flex-col gap-3 rounded-2xl bg-white px-5 pb-5 pt-0.5 shadow dark:bg-dark2 lg:max-w-[1024px] lg:flex-row lg:items-center lg:justify-center lg:px-5 lg:py-0 xl:max-w-[1400px] xl:justify-center">
      <label
        htmlFor="query"
        className="flex items-center gap-3 border-b border-natural2 px-3 dark:border-[#44444F]/50 lg:flex-1 lg:border-transparent lg:px-0 dark:lg:border-transparent"
      >
        <Image
          src="/icons/iconography/search.svg"
          alt="Search Icon"
          width={28}
          height={28}
        />
        <input
          id="query"
          type="text"
          placeholder="Job Title, Company, or Keywords"
          onChange={(e) => setQuery(e.target.value)}
          className="body-14px-bold w-full bg-transparent py-3 text-natural6 focus:outline-none"
        />
      </label>

      <div className="hidden h-[80px] w-[1px] lg:block lg:bg-natural2 dark:lg:bg-[#44444F]/50" />

      <label
        htmlFor="location"
        className="flex items-center gap-3 border-b border-natural2 px-3 dark:border-[#44444F]/50 lg:flex-1 lg:border-transparent lg:px-2 dark:lg:border-transparent"
      >
        <Image
          src="/icons/iconography/pin.svg"
          alt="Pin Icon"
          width={28}
          height={28}
          className="xl:justify-items-start"
        />
        <input
          id="location"
          type="text"
          placeholder="Job Location"
          onChange={(e) => setLocation(e.target.value)}
          className="body-14px-bold w-full bg-transparent py-3 text-natural6 focus:outline-none"
        />
      </label>

      <div className="hidden h-[80px] w-[1px] lg:block lg:bg-natural2 dark:lg:bg-[#44444F]/50" />

      <Combobox value={jobType} setValue={setJobType} />

      <button
        className="mt-3 rounded-xl bg-primary px-5 py-3 text-white hover:bg-primary/80 lg:ml-1 lg:mt-0 xl:ml-10"
        onClick={handleSubmit}
      >
        Find Jobs
      </button>
    </div>
  );
};

export default SearchBar;
