// import Dropdown from 'components/Dropdown/Dropdown';
import { nanoid } from 'nanoid';
import {
  Table,
  TableBodyData,
  TableHead,
  TableHeadData,
} from './StaticticsTable.styled';
// import { useEffect, useState } from 'react';
// import {
//   fetchCategories,
//   fetchTransactionsSummary,
// } from '../../redux/transactions/operations';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectSummary } from 'redux/transactions/selectors';

export default function StaticticsTable({ income, expence, tableData }) {
  // const isSummary = useSelector(selectSummary);
  // console.log('select summary', isSummary);
  // //=======================================================достаем актуальные мецяц и год
  // const currentMonth = new Date().getMonth();
  // const currentYear = new Date().getFullYear();

  // //======================================================записываем в массив десять последних лет
  // const years = [];
  // for (let i = currentYear; i >= currentYear - 10; i -= 1) {
  //   years.push({ label: i, value: i });
  // }

  // //======================================================массив с месяцами
  // const months = [
  //   { label: 'January', value: '1' },
  //   { label: 'February', value: '2' },
  //   { label: 'March', value: '3' },
  //   { label: 'April', value: '4' },
  //   { label: 'May', value: '5' },
  //   { label: 'June', value: '6' },
  //   { label: 'July', value: '7' },
  //   { label: 'August', value: '8' },
  //   { label: 'September', value: '9' },
  //   { label: 'October', value: '10' },
  //   { label: 'November', value: '11' },
  //   { label: 'December', value: '12' },
  // ];

  // //======================================================установка значения фильтра по дате
  // const [month, setMonth] = useState(months[currentMonth].value);
  // const [year, setYear] = useState(currentYear);

  // //тут делать запрос на бек со значением value...по умолчанию там будет запрос на актуальній месяц и год months[currentMonth].label
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const query = {
  //     selectedMonth: month,
  //     selectedYear: year,
  //   };
  //   dispatch(fetchTransactionsSummary(query));
  // }, [dispatch, month, year]);

  // useEffect(() => {
  //   dispatch(fetchCategories());
  // }, [dispatch]);

  // const handleMomthChange = event => {
  //   setMonth(event.target.value);
  //   //тут должен быть запрос на бек
  // };
  // const handleYearChange = event => {
  //   setYear(event.target.value);
  //   //тут должен быть запрос на бек
  // };

  return (
    <>
      {/* <Dropdown options={months} value={month} onChange={handleMomthChange} />
      <Dropdown options={years} value={year} onChange={handleYearChange} /> */}
      <Table>
        <TableHead>
          <tr>
            <TableHeadData>Category</TableHeadData>
            <TableHeadData>Sum</TableHeadData>
          </tr>
        </TableHead>
        <tbody>
          {Array.isArray(tableData) &&
            tableData.map(({ name, total }) => (
              <tr key={nanoid()}>
                <TableBodyData>{name}</TableBodyData>
                <TableBodyData>{Math.abs(total)}</TableBodyData>
              </tr>
            ))}
        </tbody>
      </Table>
      <br />
      <p>Total income: {income}</p>
      <br />
      <p>Total expence: {Math.abs(expence)}</p>
    </>
  );
}
