export interface JobCardProps {
  title: string;
  logo: string;
  description: string;
  jobType: string;
  jobExpirationDate: number;
  minSalary: number;
  maxSalary: number;
}

export interface InlineJobCardProps {
  icon: string;
  title: string;
  company: string;
  location: string;
  minSalary: string;
  maxSalary: string;
  type: string;
}

export interface JobDetailsCardProps {
  logo: string;
  jobTitle: string;
  employerName: string;
  city: string;
  country: string;
  postedAt: string;
  extraData: { title: string; value: string }[];
  jobApplyLink: string;
  description: string;
  highlights?: { title: string; list: string[] }[];
  companyType: string;
}
