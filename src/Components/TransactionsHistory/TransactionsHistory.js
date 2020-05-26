import React from "react";
import PropTypes from "prop-types";
import {
  TransactionTable,
  TransactionTableHead,
  TransactionTableRow,
  TransactionTableHeader,
  TransactionTableBody,
  TransactionTableData
} from "./TransactionsHistory.styled";

const TransactionsHistory = ({ items }) => (
  <TransactionTable>
    <TransactionTableHead>
      <TransactionTableRow>
        <TransactionTableHeader>Type</TransactionTableHeader>
        <TransactionTableHeader>Amount</TransactionTableHeader>
        <TransactionTableHeader>Currency</TransactionTableHeader>
      </TransactionTableRow>
    </TransactionTableHead>

    <TransactionTableBody>
      {items.map(({ id, type, amount, currency }) => (
        <TransactionTableRow key={id}>
          <TransactionTableData>{type}</TransactionTableData>
          <TransactionTableData>{amount}</TransactionTableData>
          <TransactionTableData>{currency}</TransactionTableData>
        </TransactionTableRow>
      ))}
    </TransactionTableBody>
  </TransactionTable>
);

TransactionsHistory.propsTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TransactionsHistory;
