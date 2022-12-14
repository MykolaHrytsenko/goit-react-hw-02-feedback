import React from 'react';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => (
  <p className="notification">{message}</p>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
