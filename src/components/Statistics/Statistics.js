import React from 'react';
import PropTypes from 'prop-types';

import s from './statistics.module.css';

const randomBGColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

function Statistics({ statiscticalData }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>
      <ul className={s.statList}>
        {statiscticalData.map(({ id, label, percentage }) => {
          return (
            <li className={s.item} style={{ backgroundColor: randomBGColor() }} key={id}>
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
