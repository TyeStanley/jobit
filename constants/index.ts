export const navLinks = [
  {
    text: "Overview",
    path: "/",
  },
  {
    text: "Job Search",
    path: "/job-search",
  },
  {
    text: "Estimated Salaries",
    path: "/salaries",
  },
];

export const options = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "jsearch.p.rapidapi.com",
    "x-rapidapi-key": process.env.JSEARCH_API_KEY!,
  },
};

export const keywords = [
  "react",
  "reactjs",
  "typescript",
  "javascript",
  "node",
  "nodejs",
  "express",
  "nextjs",
  "mongodb",
  "graphql",
  "html",
  "css",
  "next.js",
  "vue",
  "angular",
  "svelte",
  "tailwind",
  "bootstrap",
  "material-ui",
  "chakra-ui",
  "redux",
  "jest",
  "apollo",
];

export const queryKeywords = [
  "javascript",
  "react",
  "node",
  "developer",
  "software developer",
  "software engineer",
  "frontend developer",
  "frontend engineer",
  "fullstack",
  "web developer",
];

export const latestJobsUrl =
  "https://jsearch.p.rapidapi.com/search?page=1&num_pages=1&date_posted=month&job_type=fulltime&sort_by=date_posted&exclude_job_publishers=BeeBe,Dice,upwork&sort_order=desc&query=";

export const jobDetailsUrl =
  "https://jsearch.p.rapidapi.com/job-details?&extended_publisher_details=false&job_id=";

export const featuredData = [
  {
    image: "/icons/companylogo/apple.svg",
    title: "Apple Inc.",
    location: "New York, USA",
    text: "05 Job Vacancy",
  },
  {
    image: "/icons/companylogo/mailchimp.svg",
    title: "Mailchimp",
    location: "San Francisco, USA",
    text: "12 Job Vacancy",
  },
  {
    image: "/icons/companylogo/gitlab.svg",
    title: "Gitlab",
    location: "San Francisco, USA",
    text: "21 Job Vacancy",
  },
];

export const jobType = [
  {
    value: "fulltime",
    label: "Full Time",
  },
  {
    value: "parttime",
    label: "Part Time",
  },
  {
    value: "intern",
    label: "Intern",
  },
  {
    value: "contractor",
    label: "Contractor",
  },
];

export const filterData = [
  {
    id: "employmentType",
    title: "Type of Employment",
    list: [
      {
        id: "fulltime",
        name: "Full Time",
      },
      {
        id: "parttime",
        name: "Part Time",
      },
      {
        id: "contract",
        name: "Contract",
      },
      {
        id: "internship",
        name: "Internship",
      },
    ],
  },
  {
    id: "experienceLevel",
    title: "Experience Level",
    list: [
      {
        id: "more_than_3_years_experience",
        name: "Senior Level",
      },
      {
        id: "under_3_years_experience",
        name: "Mid Level",
      },
      {
        id: "no_experience",
        name: "Junior Level",
      },
      {
        id: "no_degree",
        name: "Internship",
      },
    ],
  },
];

export const followCompanyData = [
  {
    image: "/icons/companylogo/apple.svg",
    title: "Apple Inc.",
    subtitle: "Apple LLC",
    link: "https://www.linkedin.com/company/apple/",
  },
  {
    image: "/icons/companylogo/autodesk.svg",
    title: "Autodesk",
    subtitle: "Autodesk Inc",
    link: "https://www.linkedin.com/company/autodesk/",
  },
  {
    image: "/icons/companylogo/behance.svg",
    title: "Behance",
    subtitle: "Behance Inc",
    link: "https://www.linkedin.com/company/behance-inc-/",
  },
  {
    image: "/icons/companylogo/invision.svg",
    title: "Invision",
    subtitle: "Invision",
    link: "https://www.linkedin.com/company/invisionapp/",
  },
  {
    image: "/icons/companylogo/Spotify.svg",
    title: "Spotify",
    subtitle: "Spotify",
    link: "https://www.linkedin.com/company/spotify/",
  },
  {
    image: "/icons/companylogo/microsoft.svg",
    title: "Microsoft",
    subtitle: "Microsoft",
    link: "https://www.linkedin.com/company/microsoft/",
  },
  {
    image: "/icons/companylogo/github.svg",
    title: "Github",
    subtitle: "Github",
    link: "https://www.linkedin.com/company/github/",
  },
  {
    image: "/icons/companylogo/mailchimp.svg",
    title: "Mailchimp",
    subtitle: "Mailchimp",
    link: "https://www.linkedin.com/company/mailchimp/",
  },
];
