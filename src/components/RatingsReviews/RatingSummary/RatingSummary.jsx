import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import StarRating from '../ModularComponents/StarRating';
import ProductRating from './ProductRating';
import findAverageRating from '../ModularComponents/findAverageRating';

function RatingSummary({ ratings }) {
  // const [stars, setStars] = useState(5);
  // const [total, setTotal] = useState(0);

  const stars = findAverageRating(ratings) || 5;
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column verticalAlign="top" width={5}>
          <ProductRating rating={stars} />
        </Grid.Column>
        <Grid.Column verticalAlign="top" width={3}>
          <StarRating ratings={ratings} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

RatingSummary.propTypes = {
  ratings: PropTypes.shape().isRequired,
};

export default RatingSummary;
