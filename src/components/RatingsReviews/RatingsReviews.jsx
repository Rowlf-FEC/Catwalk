import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import bluebird from 'bluebird';
import axios from 'axios';
import { Grid } from 'semantic-ui-react';
// import dayjs from 'dayjs';
// import handleTime from '../configFiles/dayjsConfig';
import config from '../../config';

import RatingSummary from './RatingSummary/RatingSummary';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown';
import ProductBreakdown from './ProductBreakdown/ProductBreakdown';
import SortOptions from './SortOptions/SortOptions';
import ReviewList from './ReviewList/ReviewList';
import ListModifierButtons from './ListModifierButtons/ListModifierButtons';

class RatingsReviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      // date: dayjs(),
      productId: props.productId || 27189,
      reviews: [],
      reviewsRendered: 0,
      reviewsToRender: [],
      characteristics: [],
      ratings: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      },
      recommended: {
        false: 0,
        true: 0,
      },
    };
    this.addReviews = this.addReviews.bind(this);
  }

  componentDidMount() {
    const { productId } = this.state;
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/reviews/', {
      headers: {
        Authorization: `${config.token}`,
      },
      params: {
        page: 1,
        count: 200,
        sort: 'newest',
        product_id: productId,
      },
    })
      .then((reviews) => {
        axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/reviews/meta', {
          headers: {
            Authorization: `${config.token}`,
          },
          params: {
            product_id: productId,
          },
        })
          .then((metaReviews) => {
            this.setState({
              loaded: true,
              reviews: reviews.data.results,
              ratings: metaReviews.data.ratings,
              recommended: metaReviews.data.recommended,
              characteristics: metaReviews.data.characteristics,
              reviewsRendered: 2,
              reviewsToRender: reviews.data.results.slice(0, 2),
            });
            // console.log('reviews', reviews.data)
            // console.log('meta', metaReviews.data)
          });
      });
  }

  addReviews() {
    const { reviews, reviewsRendered, reviewsToRender } = this.state;
    const renderMoreReviews = reviewsToRender.slice();
    for (let i = 0; i < 2; i += 1) {
      if (reviews[reviewsRendered + i] !== undefined) {
        renderMoreReviews.push(reviews[reviewsRendered + i]);
      }
    }
    this.setState({
      reviewsToRender: renderMoreReviews,
      reviewsRendered: renderMoreReviews.length,
    });
  }

  render() {
    const {
      loaded,
      ratings,
      recommended,
      reviews,
      reviewsToRender,
      characteristics,
    } = this.state;

    if (!loaded) {
      return <div />;
    }

    return (
      <div className="RatingsReviews">
        <Grid centered columns={2}>
          <Grid.Row stretched>
            <Grid.Column width={4}>
              <p>RATINGS & REVIEWS</p>
            </Grid.Column>
            <Grid.Column width={9} />
          </Grid.Row>
          <Grid.Row stretched>
            <Grid.Column width={4}>
              <RatingSummary ratings={ratings} />
              <RatingBreakdown
                ratings={ratings}
                recommended={recommended}
                total={reviews.length}
              />
              <ProductBreakdown characteristics={characteristics} />
            </Grid.Column>
            <Grid.Column width={9}>
              <SortOptions count={reviews.length} />
              <ReviewList
                addReviews={this.addReviews}
                count={reviews.length}
                reviews={reviewsToRender}
                ratings={ratings}
              />
              <ListModifierButtons
                addReviews={this.addReviews}
                characteristics={characteristics}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

RatingsReviews.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default RatingsReviews;
