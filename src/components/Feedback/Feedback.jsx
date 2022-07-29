import React from 'react';
import css from './Feedback.module.css';

export class Feedback extends React.Component {
  render() {
    return (
      <div className={css.container}>
        <h1 className={css.title}>Please leave feedback</h1>
        <div className={css.btnWrapper}>
          <button className={css.btn}>Good</button>
          <button className={css.btn}>Neutral</button>
          <button className={css.btn}>Bad</button>
        </div>
      </div>
    );
  }
}
