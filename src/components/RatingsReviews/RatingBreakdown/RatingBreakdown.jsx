import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import RatingProgressBar from './RatingProgressBar';

function RatingBreakdown({ ratings, recommended, total }) {
  let max = 0;
  const percentages = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };

  Object.keys(ratings).forEach((index) => {
    if (max < ratings[index]) {
      max = ratings[index];
    }
    percentages[index] = ratings[index];
  });
  Object.keys(percentages).forEach((index) => {
    percentages[index] = (percentages[index] / max) * (100);
  });
  return (
    <div>
      <p>
        {(recommended.true / total) * 100}
        % of reviewers recommend this product
      </p>
      <Grid>
        {Object.keys(percentages).map((index) => (
          <Grid.Row key={`${index}StarBar`}>
            <Grid.Column width={4}>
              <p>
                <u>
                  {index}
                  {' stars'}
                </u>
              </p>
            </Grid.Column>
            <Grid.Column width={12}>
              <RatingProgressBar percent={percentages[index]} />
            </Grid.Column>
          </Grid.Row>
        ))}
      </Grid>
    </div>
  );
}

RatingBreakdown.propTypes = {
  ratings: PropTypes.shape().isRequired,
  recommended: PropTypes.shape().isRequired,
  total: PropTypes.number.isRequired,
};

export default RatingBreakdown;
