import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { getUserBalance } from 'redux/auth/selectors';
import { Balance, DoughnutWrap } from './Chart.styled';
import { formatCurrency } from 'utils/formatCurrency';

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.overrides.doughnut.plugins = {
  ...ChartJS.overrides.doughnut.plugins,
  legend: {
    display: false,
  },
};

export default function Chart({ chartData }) {
  const userBalance = useSelector(getUserBalance);

  return (
    <DoughnutWrap>
      <Balance>₴ {formatCurrency(userBalance)}</Balance>
      <Doughnut data={chartData} />
    </DoughnutWrap>
  );
}
