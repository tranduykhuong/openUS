import React from 'react';
import PropTypes from 'prop-types';
import classes from './Loading.module.css';

export const Loading = () => (
  <div className={classes['load-wrapp']}>
    <div className={classes.load}>
      <div className={classes.ring} />
    </div>
  </div>
);

export const LoadingDonut = ({ small, large }) => (
  <div className={`${classes.donut}
  ${large ? classes.large : ''},
  ${small ? classes.small : ''}`}
  />
);

LoadingDonut.defaultProps = {
  small: undefined,
  large: undefined,
};

LoadingDonut.propTypes = {
  small: PropTypes.bool,
  large: PropTypes.bool,
};