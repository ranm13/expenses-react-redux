import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { deleteTransaction } from "./../../actions/transactionsActions";

const getIconByTransactionType = function(transactionType) {
  switch (transactionType) {
    case "withdraw":
      return <FaArrowDown style={{ color: "red" }} />;
    case "deposit":
      return <FaArrowUp style={{ color: "green" }} />;
    default:
      return null;
  }
};

const Transaction = function(props) {
  let transaction = props.transaction;
  const userId = useSelector(state => state.auth.user.id);
  const dispatch = useDispatch();
  return (
    <TableRow>
      <TableCell className="transaction-item">
        {getIconByTransactionType(transaction.type)} {transaction.amount}
      </TableCell>
      <TableCell className="transaction-item">{transaction.vendor}</TableCell>
      <TableCell className="transaction-item">
        {moment(transaction.date).format("LLL")}
      </TableCell>
      <TableCell className="transaction-item">
        <IconButton
          onClick={() => dispatch(deleteTransaction(userId, transaction._id))}
        >
          <DeleteForeverIcon style={{ color: "#E4061F" }} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default Transaction;
