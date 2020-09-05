import React from 'react';
import './transactions.css';
// eslint-disable-next-line
import propTypes from 'prop-types';

function Transactions({ items }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(data => {
          const { id, type, amount, currency } = data;
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Transactions.propTypes = {
  id: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  amount: propTypes.string.isRequired,
  currency: propTypes.string.isRequired,
};

export default Transactions;
