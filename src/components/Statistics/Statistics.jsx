import React from 'react';
import css from './Statistics.module.css';
import { Feedback } from 'components/Feedback/Feedback';

export class Statistics extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div className={css.container}>
        <h2 className={css.title}>Statistics</h2>
        <div className={css.wrapper}>
          <span className={css.item}>Good: {this.state.good}</span>
          <span className={css.item}>Neutral: {this.state.neutral}</span>
          <span className={css.item}>Bad:{this.state.bad}</span>
        </div>
      </div>
    );
  }
}
