import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { getUserBalance } from 'redux/auth/selectors';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart({ chartData }) {
  const userBalance = useSelector(getUserBalance);
  return (
    <div style={{ display: 'flex', gap: '50px' }}>
      Statistics
      <div style={{ width: '40%' }}>
        <Doughnut data={chartData} redraw={true} />
      </div>
      <div> User Balance {userBalance}</div>
    </div>
  );
}
