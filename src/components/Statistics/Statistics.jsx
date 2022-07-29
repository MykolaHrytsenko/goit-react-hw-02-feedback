import React from 'react';
import css from './Statistics.module.css';

export const Statistics = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Statistics</h2>
      <span className={css.item}>Good:</span>
      <span className={css.item}>Neutral:</span>
      <span className={css.item}>Bad:</span>
    </div>
  );
};
