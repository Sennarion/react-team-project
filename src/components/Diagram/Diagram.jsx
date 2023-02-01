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

export default function Diagram() {
  const isSummary = useSelector(selectSummary);

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const years = [];
  for (let i = currentYear; i >= currentYear - 5; i -= 1) {
    years.push({ label: i, value: i });
  }

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

  const [month, setMonth] = useState(months[currentMonth].value);
  const [year, setYear] = useState(currentYear);
  const [selectMonthShown, setSelectMonthShown] = useState(false);
  const [selectYearsShown, setSelectYearsShown] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    const query = {
      selectedMonth: month,
      selectedYear: year,
    };
    dispatch(fetchTransactionsSummary(query));
  }, [dispatch, month, year]);

  function handleMonthDown() {
    setSelectMonthShown(prev => !prev);
    if (selectYearsShown === true) {
      setSelectYearsShown(false);
    }
  }

  function handleYearDown() {
    setSelectYearsShown(prev => !prev);
    if (selectMonthShown === true) {
      setSelectMonthShown(false);
    }
  }

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
    labels:
      Array.isArray(expenseCategories) &&
      expenseCategories.map(data => data.name),
    datasets: [
      {
        label: 'total',
        data:
          expenseCategories.length > 0
            ? expenseCategories.map(data => data.total * -1)
            : [0.0001],
        backgroundColor:
          expenseCategories.length > 0
            ? expenseCategories.map(
                el => categoryColor.find(item => item.name === el.name).color
              )
            : 'rgba(0, 0, 0, 0.1)',
        borderWidth: 0,
        radius: function (windowInnerWidth) {
          windowInnerWidth = window.innerWidth;
          if (windowInnerWidth < 768) {
            return '100%';
          }
          if (windowInnerWidth >= 768 && windowInnerWidth <= 1280) {
            return 168;
          }
          if (windowInnerWidth >= 1280) {
            return 144;
          }
        },
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
                handleDropDown={handleMonthDown}
                selectDropdownShown={selectMonthShown}
                filters={months}
                onSelectToggle={handleMomthChange}
                defValue={months[month - 1].label}
              />
            </DropdownWrap>
            <DropdownWrap>
              <FilterDropdown
                handleDropDown={handleYearDown}
                selectDropdownShown={selectYearsShown}
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
