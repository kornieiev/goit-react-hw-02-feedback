import React from 'react';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <>
      <div>
        <ul className="feedbackList">
          {options.map(key => (
            <li key={key}>
              <button value={key} onClick={onLeaveFeedback}>
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
