import React from 'react';
import statiscticalData from './statistical-data.json';
import './statistics.css';
// eslint-disable-next-line
import PropTypes from 'prop-types';

function Statistics() {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {statiscticalData.map(data => {
          const randomColor = Math.floor(Math.random() * 16777215).toString(16);
          const divStyle = { backgroundColor: '#' + randomColor };
          return (
            <li className="item" style={divStyle} key={data.id}>
              <span className="label">{data.label}</span>
              <span className="percentage">{data.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

// Statistics.PropTypes = {
//   data: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     percentage: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default Statistics;
