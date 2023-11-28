import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import Image from "next/image";

const options = {
  scales: {
    y: {
      beginAtZero: false,
    },
  },
  barThickness: 5,
  barPercentage: 1,
  categoryPercentage: 0.5,
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
      },
    },
  },
} as any;

const Chart = ({ data }: any) => {
  return (
    <div className="mx-auto mt-16 w-full rounded-xl bg-white p-5 shadow dark:bg-dark2 xl:mt-0 xl:max-w-[50%]">
      {data.labels.length > 0 ? (
        <>
          <h2 className="body-m-regular md:h5-headline mb-3 text-black dark:text-white">
            <span className="font-bold">Estimated Salary</span> for{" "}
            <span className="font-bold">{data.title}</span> in{" "}
            <span className="font-bold">{data.location}</span>
          </h2>
          <Bar data={data} options={options} />
        </>
      ) : (
        <h2 className="body-m-regular md:h5-headline flex h-full items-center justify-center gap-5 text-black dark:text-white">
          <Image
            src="/icons/iconography/nodescription.svg"
            alt="no description icon"
            width={50}
            height={50}
          />{" "}
          No data available!
        </h2>
      )}
    </div>
  );
};

export default Chart;
