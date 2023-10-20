import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <>
      <div>
        <ul className={css.btnList}>
          {options.map(key => (
            <li key={key}>
              <button className={css.btn} value={key} onClick={onLeaveFeedback}>
                {key.charAt(0).toUpperCase()}
                {key.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
