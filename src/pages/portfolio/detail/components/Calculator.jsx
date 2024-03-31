import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    title: {
      display: false,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ["2025", "2026", "2027", "2028", "2029"];

export default function Calculator() {
  const [s1, setS1] = useState(50000);
  const [s2, setS2] = useState(45);
  const [s3, setS3] = useState(56);

  const data = {
    labels,
    datasets: [
      {
        label: "Investment",
        data: labels.map((e, i) => (s1 / 200000) * 100 * i + 1),
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "Total rental income",
        data: labels.map((e, i) => (s2 / 100) * 100 * i + 1),
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        label: "Value appreciation",
        data: labels.map((e, i) => (s3 / 100) * 100 * i + 1),
        backgroundColor: "rgb(53, 162, 235)",
      },
    ],
  };

  return (
    <div className="my-10 flex flex-col gap-10">
      <Bar options={options} data={data} />

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <p className="flex justify-between items-center">
            Initial Investment <span className="font-semibold">SAR {s1}</span>
          </p>
          <input
            type="range"
            className="w-full"
            min="50"
            max="200000"
            value={s1}
            onChange={(e) => setS1(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="flex justify-between">
            Expected annual rental yield{" "}
            <span className="font-semibold">{s2}%</span>
          </p>
          <input
            type="range"
            className="w-full"
            min="1"
            max="100"
            value={s2}
            onChange={(e) => setS2(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="flex justify-between">
            Property value growth (5 year){" "}
            <span className="font-semibold">{s3}%</span>
          </p>
          <input
            type="range"
            className="w-full"
            min="1"
            max="100"
            value={s3}
            onChange={(e) => setS3(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
