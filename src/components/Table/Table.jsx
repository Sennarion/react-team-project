import React from 'react';

    import { useEffect } from 'react';
    import { useDispatch, useSelector } from 'react-redux';
    import useMediaQuery from 'hooks/useMediaQuery/useMediaQuery';
    import { selectGetTransactions } from 'redux/transactions/selectors.js';
    import { selectCategories } from 'redux/transactions/selectors.js';
    import { getTransaction } from '../../redux/transactions/operations.js';
    import { fetchCategories } from '../../redux/transactions/operations.js';

import {
  List,
  ListItem,
  ListText,
  StyledTable,
  SumStyled,
  TableWrapper,
} from './Table.styled.js';

export const Table = () => {
  const dispatch = useDispatch();

  const transactions = useSelector(selectGetTransactions);
  const reverseTransactions = [...transactions].reverse();

  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(getTransaction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);


const isTablet = useMediaQuery('(min-width: 768px)');

  const columns = [
    {
      title: 'Date',
      dataIndex: 'transactionDate',
      key: 'transactionDate',
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
      dataIndex: 'category',
      key: 'category',
      render: category => (
        <>
        {categories
          .filter(elem => elem.id === category)
          .map(({ name }) => {
            return name;
          })}
      </>
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
          <SumStyled type={item.type}>{sum.toFixed(2)} </SumStyled>
        ),
        width: '15%',
      },

      {
        title: 'Balance',
        key: 'balanceAfter',
        dataIndex: 'balanceAfter',
        
      },
  ];

  return (
    <TableWrapper>
      { isTablet ? (
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
              {reverseTransactions?.map(item => (
                <List type={item.type} key={item.id}>
                  <ListItem>
                    <ListText>{'Date'}</ListText>
                    {item.transactionDate}
                  </ListItem>
                  <ListItem>
                    <ListText>{'Type'}</ListText>
                    {item.type === 'INCOME' ? '+' : '-'}
                  </ListItem>
                  <ListItem>
                    <ListText>{'Category'}</ListText>
                    {categories
                      .filter(elem => elem.id === item.category)
                      .map(el => el.name)}
                  </ListItem>
                  <ListItem>
                    <ListText>{'Comment'}</ListText>
                    {item.comment}
                  </ListItem>
                  <ListItem>
                    <ListText>{'Sum'}</ListText>
                    <SumStyled type={item.type}>{item.amount}</SumStyled>
                  </ListItem>
                  <ListItem>
                    <ListText>{'Balance'}</ListText>
                    {item.balanceAfter}
                  </ListItem>
                </List>
              ))}
            </TableWrapper>
          )}
    </TableWrapper>
  );
};
