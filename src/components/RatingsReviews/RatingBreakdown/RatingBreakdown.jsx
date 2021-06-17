import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import RatingProgressBar from './RatingProgressBar';

function RatingBreakdown({
  ratings,
  recommended,
  total,
  addFilter,

}) {
  let max = 0;
  const percentages = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };
  // Iterate over the ratings object from props, find the star rating
  // that has the most votes from reviewers
  Object.keys(ratings).forEach((index) => {
    if (max < ratings[index]) {
      max = ratings[index];
    }
    percentages[index] = ratings[index];
  });
  // Calculate the percentage of every rating compared to the rating
  // with the most votes.
  // e.g. If '5 stars' has 4 votes and '3 stars' has 2 votes,
  // '3 stars' has 50% of the votes that '5 stars' has.
  Object.keys(percentages).forEach((index) => {
    percentages[index] = (percentages[index] / 5) * (100);
  });

  const handleClick = (e, ratingFilter) => {
    e.preventDefault();
    addFilter('stars', ratingFilter);
  };

  return (
    <div style={{
      maxHeight: '300px',
      paddingBottom: '50px',
      marginTop: '20px',
    }}
    >
      <Grid>
        {Object.keys(percentages).map((index) => (
          <Grid.Row columns={2} key={`${index}StarBar`}>
            <Grid.Column width={5}>
              <button
                value={index}
                onClick={(e) => handleClick(e, Number(index))}
                type="submit"
                style={{
                  padding: '0px',
                  border: 'none',
                  background: 'none',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
              >
                <u>
                  {index}
                  {' stars'}
                </u>
              </button>
            </Grid.Column>
            <Grid.Column width={11}>
              <RatingProgressBar percent={percentages[index]} />
            </Grid.Column>
          </Grid.Row>
        ))}
        <p>
          {((recommended.true / total) * 100).toFixed()}
          % of reviewers recommend this product
        </p>
      </Grid>
    </div>
  );
}

RatingBreakdown.propTypes = {
  ratings: PropTypes.shape().isRequired,
  recommended: PropTypes.shape().isRequired,
  total: PropTypes.number.isRequired,
  addFilter: PropTypes.func.isRequired,
};

export default RatingBreakdown;
