import React from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'semantic-ui-react';

function RatingProgressBar({ percent }) {
  return (
    <Progress percent={percent} size="tiny" />
  );
}

RatingProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default RatingProgressBar;
