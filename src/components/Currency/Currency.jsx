import { useState, useEffect } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import {
  TableWrapper,
  LoaderWrapper,
  Table,
  TableHead,
  TableHeadData,
  TableBodyData,
} from './Currency.styled';
import { privatbankApi } from 'services/privatbankApi';
import { theme } from 'styles/theme';

export default function Currency() {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    privatbankApi.getExchangeRate().then(res => setRates(res.data));
  }, []);

  return (
    <TableWrapper>
      {rates.length === 0 && (
        <LoaderWrapper>
          <ThreeCircles
            color={theme.colors.accentGreen}
            innerCircleColor={theme.colors.accentBlue}
            ariaLabel="three-circles-rotating"
            height="70"
            width="70"
          />
        </LoaderWrapper>
      )}
      <Table>
        <TableHead>
          <tr>
            <TableHeadData>Currency</TableHeadData>
            <TableHeadData>Purchase</TableHeadData>
            <TableHeadData>Sale</TableHeadData>
          </tr>
        </TableHead>
        <tbody>
          {rates.length > 0 &&
            rates.map(rate => (
              <tr key={rate.code}>
                <TableBodyData>{rate.code}</TableBodyData>
                <TableBodyData>{Number(rate.buy).toFixed(2)}</TableBodyData>
                <TableBodyData>{Number(rate.sell).toFixed(2)}</TableBodyData>
              </tr>
            ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
}
