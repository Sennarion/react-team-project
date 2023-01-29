import Dropdown from 'components/Dropdown/Dropdown';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import {
  fetchCategories,
  fetchTransactions,
} from '../../redux/transactions/operations';
import { useDispatch } from 'react-redux';

export default function Table({ income, expence, tableData }) {
  //=======================================================достаем актуальные мецяц и год
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  // const date = new Date();

  //======================================================записываем в массив десять последних лет
  const years = [];
  for (let i = currentYear; i >= currentYear - 10; i -= 1) {
    years.push({ label: i, value: i });
  }

  //======================================================массив с месяцами
  const months = [
    { label: 'January', value: 'January' },
    { label: 'February', value: 'February' },
    { label: 'March', value: 'March' },
    { label: 'April', value: 'April' },
    { label: 'May', value: 'May' },
    { label: 'June', value: 'June' },
    { label: 'July', value: 'January' },
    { label: 'August', value: 'August' },
    { label: 'September', value: 'September' },
    { label: 'October', value: 'October' },
    { label: 'November', value: 'November' },
    { label: 'December', value: 'December' },
  ];

  //======================================================установка значения фильтра по дате
  const [month, setMonth] = useState(months[currentMonth].label);
  const [year, setYear] = useState(currentYear);

  //тут делать запрос на бек со значением value...по умолчанию там будет запрос на актуальній месяц и год months[currentMonth].label
  const dispatch = useDispatch();
  useEffect(() => {
    const query = {
      month: 1,
      year: 2023,
    };
    dispatch(fetchTransactions(query));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleMomthChange = event => {
    setMonth(event.target.value);
    //тут должен быть запрос на бек
  };
  const handleYearChange = event => {
    setYear(event.target.value);
    //тут должен быть запрос на бек
  };

  return (
    <>
      Table
      <Dropdown options={months} value={month} onChange={handleMomthChange} />
      <Dropdown options={years} value={year} onChange={handleYearChange} />
      <ul>
        {tableData.map(({ category, total }) => (
          <li key={nanoid()}>
            Category: {category}; sum: {total}
          </li>
        ))}
      </ul>
      <br />
      <p>Total income: {income}</p>
      <br />
      <p>Total expence: {expence}</p>
    </>
  );
}
