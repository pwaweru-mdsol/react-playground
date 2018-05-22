import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseItem = ({ uuid, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${uuid}`}>
      <h3>{description}</h3>
    </Link>
    <p>{numeral(amount / 100).format('$0,0.00')}</p>
    <p>{moment(createdAt).format('MMMM Do, YYYY')}</p>
  </div>
);

export default ExpenseItem;
