import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bluebird from 'bluebird';
import axios from 'axios';
import { Container, Grid, Divider } from 'semantic-ui-react'
import dayjs from 'dayjs';
import handleTime from '../configFiles/dayjsConfig';
import config from '../../config'

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
      date: dayjs(),
      productId: props.productId || 27189,
      reviews: [],
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
  }

  componentDidMount() {
    const { productId } = this.state;
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/reviews/', {
      headers: {
        Authorization: `${config.token}`,
      },
      params: {
        page: 1,
        count: 2,
        sort: 'newest',
        product_id: productId,
      },
    })
      .then((response) => {
        this.setState({ reviews: response.data.results });
        axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/reviews/meta', {
          headers: {
            Authorization: `${config.token}`,
          },
          params: {
            product_id: productId,
          },
        })
          .then((response) => {
            // characteristics
            // rating
            this.setState({
              ratings: response.data.ratings,
            });
            // reccomend
          });
      })
  }

  render() {
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
              <RatingSummary ratings={this.state.ratings} />
              <Divider hidden />
              <RatingBreakdown />
              <Divider hidden />
              <ProductBreakdown />
            </Grid.Column>
            <Grid.Column width={9}>
              <SortOptions count={this.state.reviews.length} />
              <ReviewList />
              <ListModifierButtons />
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
