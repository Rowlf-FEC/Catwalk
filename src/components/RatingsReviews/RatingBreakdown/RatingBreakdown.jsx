import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import RatingProgressBar from './RatingProgressBar';

function RatingBreakdown(props) {
  return (
    <div>
      <p>100% of reviewers recommend this product</p>
      <Grid>
        <Grid.Column width={4}>
          <p>5 stars:</p>
        </Grid.Column>
        <Grid.Column width={12}>
          <RatingProgressBar percent={20} />
        </Grid.Column>
        <Grid.Column width={4}>
          <p>4 stars:</p>
        </Grid.Column>
        <Grid.Column width={12}>
          <RatingProgressBar percent={40} />
        </Grid.Column>
        <Grid.Column width={4}>
          <p>3 stars:</p>
        </Grid.Column>
        <Grid.Column width={12}>
          <RatingProgressBar percent={100} />
        </Grid.Column>
        <Grid.Column width={4}>
          <p>2 stars:</p>
        </Grid.Column>
        <Grid.Column width={12}>
          <RatingProgressBar percent={20} />
        </Grid.Column>
        <Grid.Column width={4}>
          <p>1 stars:</p>
        </Grid.Column>
        <Grid.Column width={12}>
          <RatingProgressBar percent={10} />
        </Grid.Column>
      </Grid>
    </div>
  );
}

RatingBreakdown.propTypes = {

};

export default RatingBreakdown;
