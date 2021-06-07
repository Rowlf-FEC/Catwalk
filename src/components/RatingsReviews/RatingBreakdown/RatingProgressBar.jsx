import React from 'react';
import PropTypes from 'prop-types';
import { Progress, Grid } from 'semantic-ui-react';

function RatingProgressBar(props) {
  return (
    <Progress percent={props.percent} />
  );
}

RatingProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default RatingProgressBar;
