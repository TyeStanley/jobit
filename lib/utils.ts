// @ts-nocheck
import { options } from "@/constants";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

export function formatJobType(jobType: string, type?: string): string {
  if (type === "recommended") {
    switch (jobType) {
      case "FULLTIME":
        return "Full-Time";
      case "CONTRACTOR":
        return "Contractor";
      case "PARTTIME":
        return "Part-Time";
      default:
        return "N/A";
    }
  }

  switch (jobType) {
    case "FULLTIME":
      return "Full Time";
    case "CONTRACTOR":
      return "Contractor";
    case "PARTTIME":
      return "Part Time";
    case "INTERN":
      return "Intern";
    default:
      return "N/A";
  }
}

export function formatExpirationDate(date: number): string {
  const expirationDate = new Date(date * 1000);
  const currentDate = new Date();

  const timeDifference = expirationDate.getTime() - currentDate.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

  if (daysDifference <= 0) {
    return "Expired";
  } else {
    return `${daysDifference} days left`;
  }
}

export const formatSalary = (min: number, max: number) => {
  if (!min || !max) return "$?";

  const minNum = Math.round(min / 1000);
  const maxNum = Math.round(max / 1000);

  return `$${minNum}k-${maxNum}k`;
};

export const findKeywords = (description: string, keywords: string[]) => {
  const foundKeywords: string[] = [];
  const lowerCaseDescription = description.toLowerCase();

  for (const keyword of keywords) {
    if (foundKeywords.length >= 3) return foundKeywords;

    if (lowerCaseDescription.includes(keyword)) foundKeywords.push(keyword);
  }

  return foundKeywords;
};

export const getUserIp = async () => {
  const res = await fetch("https://api.ipify.org?format=json");
  const data = await res.json();

  return data.ip;
};

export const getUserCity = async (ip) => {
  const geoResponse = await fetch(`http://ip-api.com/json/${ip}`);
  const geoData = await geoResponse.json();

  return geoData.city;
};

export const getRandomQuery = (queryKeywords: string[], city?: string) => {
  const randomIndex = Math.floor(Math.random() * queryKeywords.length);
  const keyword = queryKeywords[randomIndex];

  if (city) return `${keyword} in ${city}`;

  return `${keyword}`;
};

export const getLatestJobs = async (url: string, query: string) => {
  const res = await fetch(`${url}${query}`, options);
  const data = await res.json();

  return data;
};

export const getJobDetailsById = async (url: string, jobId: string) => {
  const res = await fetch(`${url}${jobId}`, options);
  const data = await res.json();

  return data;
};

export const getHourlyRate = (min: number | string, max: number | string) => {
  if (!min || !max) return "$?";

  if (typeof min === "string") min = parseInt(min);
  if (typeof max === "string") max = parseInt(max);

  const minRate = Math.round(min / 2080);
  const maxRate = Math.round(max / 2080);

  return `$${minRate}-${maxRate}`;
};

export const formatDatePostedAgo = (date: string) => {
  const currentDate = new Date();
  const postDate = new Date(date);

  const timeDifference = currentDate.getTime() - postDate.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

  if (daysDifference === 0) {
    return "Today";
  } else if (daysDifference === 1) {
    return "Yesterday";
  } else {
    return `${daysDifference} days ago`;
  }
};
