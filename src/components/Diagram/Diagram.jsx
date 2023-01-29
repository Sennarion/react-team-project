import Chart from 'components/Chart/Chart';
import Table from 'components/Table/Table';
import { transactions } from 'data/data';
import { useState } from 'react';

//======================================================генерация случайного цвета
const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

//======================================================разделяем трансакции по типу доход расход и считаем общую сумму в каждом из типов
let totalIncome = 0;
let totalExpence = 0;
let incomeTransactions = [];
let expenceTransactions = [];
for (let el of transactions) {
  if (el.type === 'INCOME') {
    incomeTransactions.push(el);
    totalIncome += el.amount;
  }
  if (el.type === 'EXPENCE') {
    expenceTransactions.push(el);
    totalExpence += el.amount;
  }
}

//======================================================создаем массив с тратами по каждой категории
let object = expenceTransactions.reduce((acc, el) => {
  acc[el.categoryId] = acc[el.categoryId]
    ? el.amount + acc[el.categoryId]
    : el.amount;
  return acc;
}, {});
let categories = [];
for (let el in object) {
  categories.push({ category: el, total: object[el] });
}

export default function Diagram() {
  //===================================================начальное состояние для чарта бублика
  const initState = {
    labels: categories.map(data => data.category),
    datasets: [
      {
        label: 'total',
        data: categories.map(data => data.total),
        backgroundColor: categories.map(el => getRandomHexColor()),
      },
    ],
  };
  const [userData, setUserData] = useState(initState);

  return (
    <div>
      <Chart chartData={userData} />
      <Table
        tableData={categories}
        income={totalIncome}
        expence={totalExpence}
      />
    </div>
  );
}
