import { useState } from 'react';
import { TableWrapper, Table, TableHead, TableData } from './Currency.styled';
// import { privatbankApi } from 'services/privatbankApi';

export default function Currency() {
  const [rates] = useState([
    {
      ccy: 'EUR',
      base_ccy: 'UAH',
      buy: '42.30000',
      sale: '43.30000',
    },
    {
      ccy: 'USD',
      base_ccy: 'UAH',
      buy: '39.80000',
      sale: '40.30000',
    },
  ]);

  // useEffect(() => {
  //   privatbankApi.getExchangeRate().then(res => console.log(res));
  // }, []);

  return (
    <TableWrapper>
      <Table>
        <TableHead>
          <tr>
            <TableData>Currency</TableData>
            <TableData>Purchase</TableData>
            <TableData>Sale</TableData>
          </tr>
        </TableHead>
        <tbody>
          {rates.map(rate => (
            <tr key={rate.ccy}>
              <TableData>{rate.ccy}</TableData>
              <TableData>{Number(rate.buy).toFixed(2)}</TableData>
              <TableData>{Number(rate.sale).toFixed(2)}</TableData>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
}
