import { transactions } from 'data/data';

// let income = 0;
// let expence = 0;

// for (let { type, amount } of transactions) {
//   if (type === 'INCOME') {
//     income += amount;
//     console.log('income', income);
//   }
//   if (type === 'EXPENCE') {
//     expence += amount;
//     console.log('expence', expence);
//   }
// }

export default function Table({ income, expence }) {
  return (
    <>
      Table
      <ul>
        {transactions.map(({ categoryId, amount, id, type }) => (
          <li key={id}>
            Category: {categoryId}; sum: {amount}; type: {type}
          </li>
        ))}
      </ul>
      <p>income: {income}</p>
      <br />
      <p>expence: {expence}</p>
    </>
  );
}
