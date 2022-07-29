import React from 'react';
import css from './Statistics.module.css';

export class Statistics extends React.Component {
  render() {
    return (
      <div className={css.container}>
        <h2 className={css.title}>Statistics</h2>
        <div className={css.wrapper}>
          <span className={css.item}>Good:</span>
          <span className={css.item}>Neutral:</span>
          <span className={css.item}>Bad:</span>
        </div>
      </div>
    );
  }
}
