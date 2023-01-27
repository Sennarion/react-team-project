import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { transactions } from 'data/data';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart({ chartData }) {
  return (
    <>
      Statistics
      <div style={{ width: '20%' }}>
        <Doughnut data={chartData} />
      </div>
      <div style={{ width: '20%' }}>
        <Doughnut data={chartData} />
      </div>
    </>
  );
}
