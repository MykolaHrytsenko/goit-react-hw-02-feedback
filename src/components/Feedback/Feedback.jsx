import React from 'react';
import css from './Feedback.module.css';
import { Statistics } from 'components/Statistics/Statistics';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = () => {
    this.setState({ good: 5 });
  };

  render() {
    return (
      <>
        <div className={css.container}>
          <h1 className={css.title}>Please leave feedback</h1>
          <div className={css.btnWrapper}>
            <button className={css.btn} onClick={this.handleIncrement}>
              Good
            </button>
            <button className={css.btn}>Neutral</button>
            <button className={css.btn}>Bad</button>
          </div>
        </div>
        <div className={css.container}>
          <h2 className={css.title}>Statistics</h2>
          <div className={css.wrapper}>
            <span className={css.item}>Good: {this.state.good}</span>
            <span className={css.item}>Neutral: {this.state.neutral}</span>
            <span className={css.item}>Bad:{this.state.bad}</span>
          </div>
        </div>
      </>
    );
  }
}
