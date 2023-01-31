import { nanoid } from 'nanoid';
import {
  Category,
  ExpenseSum,
  IncomeSum,
  Line,
  Row,
  Square,
  Sum,
  TableBody,
  TableHead,
  Total,
  TotalWrap,
} from './StaticticsTable.styled';

export default function StaticticsTable({ income, expence, tableData }) {
  return (
    <>
      <TableHead>
        <span>Category</span>
        <span>Sum</span>
      </TableHead>
      <TableBody>
        {Array.isArray(tableData) &&
          tableData.map(({ name, total }) => (
            <Row key={nanoid()}>
              <Square></Square>
              <Category>{name}</Category>
              <Sum>{Math.abs(total)}</Sum>
              <Line></Line>
            </Row>
          ))}
      </TableBody>
      <Total>
        <TotalWrap>
          Expense: <ExpenseSum>{Math.abs(expence)}</ExpenseSum>
        </TotalWrap>
        <TotalWrap>
          Income: <IncomeSum>{income}</IncomeSum>
        </TotalWrap>
      </Total>
    </>
  );
}
