import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bluebird from 'bluebird';
import { Grid, Segment } from 'semantic-ui-react'
import dayjs from 'dayjs';
import handleTime from '../configFiles/dayjsConfig';

import RatingSummary from './RatingSummary';
import RatingBreakdown from './RatingBreakdown';
import ProductBreakdown from './ProductBreakdown';
import SortOptions from './SortOptions';
import ReviewList from './ReviewList';
import ListModifierButtons from './ListModifierButtons';

class RatingsReviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: dayjs(),
    };
  }

  render() {
    return (
      <div class="RatingsReviews">
  <Grid columns={2}>
    <Grid.Row stretched>
      <Grid.Column width={5}>
        <Segment>
          <RatingSummary />
        </Segment>
        <Segment>
          <RatingBreakdown />
        </Segment>
        <Segment>
          <ProductBreakdown />
        </Segment>
      </Grid.Column>
      <Grid.Column width={10}>
        <Segment>
          <SortOptions />
        </Segment>
        <Segment>
          <ReviewList />
        </Segment>
        <Segment>
          <ListModifierButtons />
        </Segment>

      </Grid.Column>
    </Grid.Row>
  </Grid>
      </div>
    );
  }
}

{/* <ReviewList />
<RatingBreakdown />
<ProductBreakdown />
<WriteNewReview />
<KeywordSearch /> */}

RatingsReviews.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default RatingsReviews;
