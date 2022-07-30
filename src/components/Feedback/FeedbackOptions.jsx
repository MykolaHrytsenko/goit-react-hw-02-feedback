import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    <ul className={css.list}>
      {options.map(option => (
        <li key={option} className={css.item}>
          <button type="button" className={css.btn} onClick={onLeaveFeedback}>
            {option[0].toUpperCase() + option.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
