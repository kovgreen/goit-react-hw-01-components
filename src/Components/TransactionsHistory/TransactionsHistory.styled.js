import styled from "styled-components";

export const TransactionTable = styled.table`
  width: 875px;
  margin: 0 auto;
  font-family: Lato, "sans-serif";
  font-weight: 400;
  background-color: rgb(255, 255, 255);
  border-collapse: collapse;
`;

export const TransactionTableHead = styled.thead`
  font-size: 13px;
  line-height: 2.3;
  font-weight: 700;
  letter-spacing: 1px;
  background-color: rgb(0, 188, 212);
  color: rgb(255, 255, 255);
  text-transform: uppercase;
`;

export const TransactionTableRow = styled.tr`
  :nth-child(even) {
    background-color: rgb(236, 242, 243);
  }
`;

export const TransactionTableHeader = styled.th`
  padding: 15px 0 10px;

  :not(:last-child) {
    border-right: 2px solid rgb(224, 230, 231);
  }
`;

export const TransactionTableBody = styled.tbody`
  font-size: 15px;
  line-height: 2;
  font-weight: 300;
  color: rgb(92, 105, 117);
  text-align: center;
  text-transform: capitalize;
`;

export const TransactionTableData = styled.td`
  padding: 15px 0 10px;

  :first-child {
    text-indent: 40%;
    text-align: justify;
  }

  :not(:last-child) {
    border-right: 2px solid rgb(224, 230, 231);
  }
`;
