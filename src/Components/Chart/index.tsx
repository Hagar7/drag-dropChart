import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "",
    },
  },
};

const labels = [
  "Diskette",
  "Memory Card",
  "HDTV Tuner",
  "Flat Panel Graphics Monitor",
  "Digital Camera",
  "Minitower Speaker",
  "Extension Cable",
  "Y Box",
];
const values = [333.08, 7.07, 10.77, 194.76, 13.18, 143.3, 20.2, 405];
export const data = {
  labels,
  datasets: [
    {
      label: "Product",
      data: [
        "Diskette",
        "Memory Card",
        "HDTV Tuner",
        "Flat Panel Graphics Monitor",
        "Digital Camera",
        "Minitower Speaker",
        "Extension Cable",
        "Y Box",
      ],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Cost",
      data: values.map((value) => value.toString()),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
const Chart = () => {
  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ delay: 2, duration: 1, type: "spring" }}
    >
      <Line options={options} data={data} />
    </motion.div>
  );
};

export default Chart;
