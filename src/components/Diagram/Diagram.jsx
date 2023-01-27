import Chart from 'components/Chart/Chart';
import Table from 'components/Table/Table';
import { transactions } from 'data/data';
import { useEffect } from 'react';
import { useState } from 'react';

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

let totalIncome = 0;
let totalExpence = 0;

for (let { type, amount } of transactions) {
  if (type === 'INCOME') {
    totalIncome += amount;
    console.log('income', totalIncome);
  }
  if (type === 'EXPENCE') {
    totalExpence += amount;
    console.log('expence', totalExpence);
  }
}

let object = transactions.reduce((acc, el) => {
  acc[el.categoryId] = acc[el.categoryId]
    ? el.amount + acc[el.categoryId]
    : el.amount;
  return acc;
}, {});
console.log('transactions', transactions);
console.log('object', object);

// let incomeCategories = ['stock', 'salary'];
// let expenceCategories = ['food', 'fun', 'transport'];

// let income = [];
// let expence = [];

let categories = [];
for (let el in object) {
  categories.push({ category: el, total: object[el] });
}

export default function Diagram() {
  const [userData, setUserData] = useState({
    labels: categories.map(data => data.category),
    datasets: [
      {
        label: 'total',
        data: categories.map(data => data.total),
        backgroundColor: categories.map(el => getRandomHexColor()),
      },
    ],
  });

  return (
    <div>
      <Chart chartData={userData} />
      <Table income={totalExpence} expence={totalExpence} />
    </div>
  );
}
