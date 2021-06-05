import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bluebird from 'bluebird';
import dayjs from 'dayjs';
import { Button, Icon } from 'semantic-ui-react'

class RatingsReviews extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Button animated>
          <Button.Content visible>Next</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow right' />
          </Button.Content>
        </Button>
        <Button animated='vertical'>
          <Button.Content hidden>Shop</Button.Content>
          <Button.Content visible>
            <Icon name='shop' />
          </Button.Content>
        </Button>
        <Button animated='fade'>
          <Button.Content visible>Sign-up for a Pro account</Button.Content>
          <Button.Content hidden>$12.99 a month</Button.Content>
        </Button>
      </div>
    );
  }
}
// <div class="RatingsReviews">
//   <ReviewList />
//   <Review />
//   <SortOptions />
//   <RatingBreakdown />
//   <ProductBreakdown />
//   <WriteNewReview />
//   <KeywordSearch />
// </div>

RatingsReviews.propTypes = {

};

export default RatingsReviews;
