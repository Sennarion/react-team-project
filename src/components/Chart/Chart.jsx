import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart({ chartData }) {
  return (
    <div style={{ display: 'flex', gap: '50px' }}>
      Statistics
      <div style={{ width: '20%' }}>
        <Doughnut data={chartData} />
      </div>
    </div>
  );
}
