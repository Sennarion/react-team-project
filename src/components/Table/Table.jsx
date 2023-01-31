import { format } from 'date-fns';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from 'hooks/useMediaQuery/useMediaQuery';
import { selectGetTransactions } from 'redux/transactions/selectors.js';
import { selectCategories } from 'redux/transactions/selectors.js';
import { getTransaction } from '../../redux/transactions/operations.js';
import {
  List,
  ListItem,
  ListText,
  StyledTable,
  SumStyled,
  TableWrapper,
} from './Table.styled.js';
import { formatCurrency } from 'utils/formatCurrency.js';

export const Table = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const transactions = useSelector(selectGetTransactions);
  const reverseTransactions = [...transactions].reverse();

  const updateCategory = id => {
    return categories.find(category => category.id === id).name;
  };

  useEffect(() => {
    dispatch(getTransaction());
  }, [dispatch]);

  const isTablet = useMediaQuery('(min-width: 768px)');

  const columns = [
    {
      title: 'Date',
      dataIndex: 'transactionDate',
      key: 'transactionDate',
      render: transactionDate =>
        format(new Date(transactionDate), 'dd.MM.yyyy'),
      width: '17%',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: type => (type === 'INCOME' ? '+' : '-'),

      filters: [
        {
          text: '+',
          value: 'INCOME',
        },
        {
          text: '-',
          value: 'EXPENSE',
        },
      ],
      width: '10%',
      onFilter: (value, item) => item.type.includes(value),
    },
    {
      title: 'Category',
      dataIndex: 'categoryId',
      key: 'categoryId',
      render: categoryId => (
        <>{categories.find(category => category.id === categoryId).name}</>
      ),
      width: '18%',
    },
    {
      title: 'Comment',
      key: 'comment',
      dataIndex: 'comment',
      width: '18%',
    },
    {
      title: 'Sum',
      key: 'amount',
      dataIndex: 'amount',
      render: (sum, item) => (
        <SumStyled type={item.type}>{formatCurrency(sum)} </SumStyled>
      ),
      width: '15%',
    },
    {
      title: 'Balance',
      key: 'balanceAfter',
      dataIndex: 'balanceAfter',
      render: balanceAfter => formatCurrency(balanceAfter),
    },
  ];

  return (
    <TableWrapper>
      {isTablet && categories.length > 0 ? (
        <StyledTable
          rowClassName="rowStyled"
          columns={columns}
          dataSource={reverseTransactions?.map(item => ({
            ...item,
            key: item.id,
          }))}
          pagination={{
            defaultPageSize: '5',
            showSizeChanger: true,
            pageSizeOptions: [5, 10, 15],
            position: ['bottomCenter'],
          }}
        />
      ) : (
        <TableWrapper>
          {reverseTransactions.length > 0 &&
            categories.length > 0 &&
            reverseTransactions.map(item => (
              <List type={item.type} key={item.id}>
                <ListItem>
                  <ListText>{'Date'}</ListText>
                  {format(new Date(item.transactionDate), 'dd.MM.yyyy')}
                </ListItem>
                <ListItem>
                  <ListText>{'Type'}</ListText>
                  {item.type === 'INCOME' ? '+' : '-'}
                </ListItem>
                <ListItem>
                  <ListText>{'Category'}</ListText>
                  {updateCategory(item.categoryId)}
                </ListItem>
                <ListItem>
                  <ListText>{'Comment'}</ListText>
                  {item.comment}
                </ListItem>
                <ListItem>
                  <ListText>{'Sum'}</ListText>
                  <SumStyled type={item.type}>
                    {formatCurrency(item.amount)}
                  </SumStyled>
                </ListItem>
                <ListItem>
                  <ListText>{'Balance'}</ListText>
                  {formatCurrency(item.balanceAfter)}
                </ListItem>
              </List>
            ))}
        </TableWrapper>
      )}
    </TableWrapper>
  );
};
