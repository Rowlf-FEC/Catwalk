import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Grid } from 'semantic-ui-react';
import StarRating from './StarRating';
import ProductRating from './ProductRating';

function RatingSummary(props) {
  return (
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column width={5} >
          <ProductRating />
        </Grid.Column>
        <Grid.Column width={8} >
          <StarRating />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

RatingSummary.propTypes = {

};

export default RatingSummary;
