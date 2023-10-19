import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  title,
}) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        <li className={css.red}>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>

        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </ul>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  title: PropTypes.string,
};
