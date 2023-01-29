import React from 'react';
// import './index.css'

import Media from 'react-media';
import { transactions } from './transaction.js';

import {
  List,
  ListItem,
  ListText,
  StyledTable,
  SumStyled,
  TableWrapper,
} from './Table.styled.js';

export const Table = () => {
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
      width: '10%',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      width: '15%',
    },

    {
      title: 'Comment',
      key: 'comment',
      dataIndex: 'comment',
      width: '15%',
    },

    {
      title: 'Amount',
      key: 'amount',
      dataIndex: 'amount',
      width: '15%',
    },

    {
      title: 'BalanceAfter',
      key: 'balanceAfter',
      dataIndex: 'balanceAfter',
    },
  ];

  return (
    <TableWrapper>
      <Media query="(min-width: 768px)">
        {matches =>
          matches ? (
            <StyledTable
              rowClassName="rowStyled"
              columns={columns}
              dataSource={transactions?.map(item => ({
                ...item,
                key: item.id,
              }))}
              pagination={{
                defaultPageSize: '5',
                showSizeChanger: true,
                pageSizeOptions: [5, 10, 15],
                position: ['bottomRight'],
              }}
            />
          ) : (
            <TableWrapper>
              {transactions?.map(item => (
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
                    {item.category}
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
          )
        }
      </Media>
    </TableWrapper>
  );
};
