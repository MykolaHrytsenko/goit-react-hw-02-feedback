import React from 'react';
import css from './Feedback.module.css';

export const Feedback = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Please leave feedback</h1>
      <button className={css.btn}></button>
    </div>
  );
};
