import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import StarRating from '../ModularComponents/StarRating';
import ProductRating from './ProductRating';

function RatingSummary(props) {
  let total = 0;
  let divisor = 0;
  Object.keys(props.ratings).forEach((rating) => {
    total += Number(rating) * Number(props.ratings[rating]);
    divisor += Number(props.ratings[rating]);
  });
  total = total / divisor

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column verticalAlign="top" width={5}>
          <ProductRating rating={total} />
        </Grid.Column>
        <Grid.Column verticalAlign="top" width={3}>
          <StarRating />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

RatingSummary.propTypes = {
  ratings: PropTypes.objectOf.isRequired,
};

export default RatingSummary;
