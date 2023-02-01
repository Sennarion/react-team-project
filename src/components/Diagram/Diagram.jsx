import Chart from 'components/Chart/Chart';
import StaticticsTable from 'components/StaticticsTable/StaticticsTable';
import {
  ChartTable,
  DiagramWrapper,
  DropdownWrap,
  Dropdowns,
  Title,
  Wrap,
} from './Diagram.styled';
import { useEffect, useState } from 'react';
import { fetchTransactionsSummary } from '../../redux/transactions/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectSummary } from 'redux/transactions/selectors';
import FilterDropdown from 'components/FilterDropdown/FilterDropdown';
import categoryColor from 'data/data';

//======================================================разделяем транзакции по типу доход расход и считаем общую сумму в каждом из типов
// let totalIncome = 0;
// let totalExpence = 0;
// let incomeTransactions = [];
// let expenceTransactions = [];
// for (let el of transactions) {
//   if (el.type === 'INCOME') {
//     incomeTransactions.push(el);
//     totalIncome += el.amount;
//   }
//   if (el.type === 'EXPENCE') {
//     expenceTransactions.push(el);
//     totalExpence += el.amount;
//   }
// }

//======================================================создаем массив с тратами по каждой категории
// let object = expenceTransactions.reduce((acc, el) => {
//   acc[el.categoryId] = acc[el.categoryId]
//     ? el.amount + acc[el.categoryId]
//     : el.amount;
//   return acc;
// }, {});
// let categories = [];
// for (let el in object) {
//   categories.push({ category: el, total: object[el] });
// }

export default function Diagram() {
  const isSummary = useSelector(selectSummary);

  //=======================================================достаем актуальные мецяц и год
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  //======================================================записываем в массив 5 последних лет
  const years = [];
  for (let i = currentYear; i >= currentYear - 5; i -= 1) {
    years.push({ label: i, value: i });
  }

  //======================================================массив с месяцами
  const months = [
    { label: 'January', value: '1' },
    { label: 'February', value: '2' },
    { label: 'March', value: '3' },
    { label: 'April', value: '4' },
    { label: 'May', value: '5' },
    { label: 'June', value: '6' },
    { label: 'July', value: '7' },
    { label: 'August', value: '8' },
    { label: 'September', value: '9' },
    { label: 'October', value: '10' },
    { label: 'November', value: '11' },
    { label: 'December', value: '12' },
  ];

  //======================================================установка значения фильтра по дате
  const [month, setMonth] = useState(months[currentMonth].value);
  const [year, setYear] = useState(currentYear);

  const dispatch = useDispatch();
  useEffect(() => {
    const query = {
      selectedMonth: month,
      selectedYear: year,
    };
    dispatch(fetchTransactionsSummary(query));
  }, [dispatch, month, year]);

  const handleMomthChange = id => {
    setMonth(id);
  };
  const handleYearChange = id => {
    setYear(years[id - 1].value);
  };

  const expenseCategories =
    Array.isArray(isSummary.categoriesSummary) &&
    isSummary.categoriesSummary.filter(el => el.type === 'EXPENSE');

  const userData = {
    // labels:
    //   Array.isArray(expenseCategories) &&
    //   expenseCategories.map(data => data.name),
    datasets: [
      {
        label: 'total',

        /* Array.isArray(expenseCategories) */
        data:
          expenseCategories.length > 0
            ? expenseCategories.map(data => data.total * -1)
            : [0.0001],
        /* Array.isArray(expenseCategories) */
        backgroundColor:
          expenseCategories.length > 0
            ? expenseCategories.map(
                el => categoryColor.find(item => item.name === el.name).color
              )
            : 'rgba(0, 0, 0, 0.1)',

        borderWidth: 0,
        radius: '100%',
        cutout: '70%',
      },
    ],
  };

  return (
    <DiagramWrapper>
      <Title>Statistics</Title>
      <ChartTable>
        <Chart chartData={userData} />
        <Wrap>
          <Dropdowns>
            <DropdownWrap>
              <FilterDropdown
                filters={months}
                onSelectToggle={handleMomthChange}
                defValue={months[month - 1].label}
              />
            </DropdownWrap>
            <DropdownWrap>
              <FilterDropdown
                filters={years}
                onSelectToggle={handleYearChange}
                defValue={year}
              />
            </DropdownWrap>
          </Dropdowns>
          <StaticticsTable
            tableData={expenseCategories}
            income={isSummary.incomeSummary}
            expence={isSummary.expenseSummary}
          />
        </Wrap>
      </ChartTable>
    </DiagramWrapper>
  );
}
