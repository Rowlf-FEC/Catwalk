/* eslint-disable react/no-find-dom-node */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import { getReviews, getMetaReviews, getProductName } from './requests';
import handleAnalytics from './ModularComponents/handleAnalytics';

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
      productId: props.productId || 27189,
      productName: '',
      reviews: [],
      totalReviews: 0,
      reviewsChecked: 0,
      allReviewsLoaded: false,
      reviewFilters: {
        stars: 0,
      },
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
      sortMethod: 'relevant',
    };

    this.addReviews = this.addReviews.bind(this);
    this.sortReviews = this.sortReviews.bind(this);
    this.addFilter = this.addFilter.bind(this);
  }

  componentDidMount() {
    const { productId } = this.state;
    getProductName(productId)
      .then((name) => {
        getReviews(productId)
          .then((reviews) => {
            getMetaReviews(productId)
              .then((metaReviews) => {
                // set the number of reviews rendered to a max of 2 if there
                // are more than 2 reviews to render.
                const total = reviews.data.results.length >= 2 ? 2 : reviews.data.results.length;
                this.setState({
                  loaded: true,
                  productName: name.data.name,
                  reviews: reviews.data.results,
                  totalReviews: reviews.data.results.length,
                  ratings: metaReviews.data.ratings,
                  recommended: metaReviews.data.recommended,
                  characteristics: metaReviews.data.characteristics,
                  reviewsRendered: total,
                  reviewsChecked: total,
                  reviewsToRender: reviews.data.results.slice(0, 2),
                });

                // console.log('reviews', reviews.data)
                // console.log('meta', metaReviews.data)
              });
          });
      });
    ReactDOM.findDOMNode(this).addEventListener('click', (e) => handleAnalytics(e, 'Ratings and Reviews'));
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.allReviewsLoaded !== this.props.allReviewsLoaded) {

  //   }
  // }

  addReviews() {
    const {
      reviews,
      totalReviews,
      reviewsChecked,
      reviewFilters,
      reviewsToRender,
    } = this.state;

    const renderMoreReviews = reviewsToRender.slice();
    let checked = reviewsChecked;

    for (let i = 0; i < 2; i += 1) {
      if (reviews[checked] !== undefined) {
        if (reviews[checked].rating >= reviewFilters.stars) {
          renderMoreReviews.push(reviews[checked]);
        }
        checked += 1;
      }
    }

    const loadedMaxReviews = checked >= totalReviews;

    this.setState({
      reviewsChecked: checked,
      allReviewsLoaded: loadedMaxReviews,
      reviewsRendered: renderMoreReviews.length,
      reviewsToRender: renderMoreReviews,
    });
  }

  // eslint-disable-next-line react/destructuring-assignment
  sortReviews(thisSortMethod = this.state.sortMethod) {
    const { productId, reviewFilters, reviewsRendered } = this.state;

    getReviews(productId, thisSortMethod)
      .then((reviewsList) => {
        const reviewsArray = reviewsList.data.results;
        const filteredReviews = [];

        // Only display ratings that match the star filter.
        // Star filter default is 0, so it will display
        // all of the ratings if no filter is set
        reviewsArray.forEach((review) => {
          if (review.rating >= reviewFilters.stars) {
            filteredReviews.push(review);
          }
        });

        this.setState({
          reviews: reviewsArray,
          reviewsToRender: reviewsArray.slice(0, reviewsRendered),
          sortMethod: thisSortMethod,
        });
      });
  }

  addFilter(filterType = 'stars', filterValue) {
    const {
      productId,
      reviewsRendered,
      sortMethod,
    } = this.state;
    const filteredReviews = [];

    getReviews(productId, sortMethod)
      .then((reviewsList) => {
        const reviewsArray = reviewsList.data.results;

        reviewsArray.forEach((review) => {
          if (review.rating >= filterValue) {
            filteredReviews.push(review);
          }
        });
        this.setState({
          reviews: filteredReviews,
          reviewsToRender: filteredReviews.slice(0, reviewsRendered),
          reviewFilters: { [filterType]: filterValue },
        });
      });
  }

  render() {
    const {
      productId,
      productName,
      loaded,
      ratings,
      recommended,
      totalReviews,
      allReviewsLoaded,
      reviewsToRender,
      characteristics,
    } = this.state;

    // TODO: handle loading better than this...
    // maybe take advantage of semantic's
    // placeholders and loading spinners?
    if (!loaded) {
      return <div />;
    }

    return (
      <div className="RatingsReviews">
        <Grid centered columns={2}>
          <Grid.Row stretched>
            <Grid.Column width={3}>
              <a
                id="read_reviews"
                style={{ color: 'black' }}
              >
                RATINGS & REVIEWS
              </a>
            </Grid.Column>
            <Grid.Column width={6} />
          </Grid.Row>
          <Grid.Row stretched>
            <Grid.Column width={3}>
              <RatingSummary ratings={ratings} />
              <RatingBreakdown
                ratings={ratings}
                recommended={recommended}
                total={totalReviews}
                addFilter={this.addFilter}
              />
              <ProductBreakdown characteristics={characteristics} />
            </Grid.Column>
            <Grid.Column width={6}>
              <SortOptions
                count={totalReviews}
                sortReviews={this.sortReviews}
              />
              <ReviewList
                addReviews={this.addReviews}
                count={totalReviews}
                reviews={reviewsToRender}
                ratings={ratings}
                getMetaReviews
                sortReviews={this.sortReviews}
              />
              <ListModifierButtons
                productName={productName}
                allReviewsLoaded={allReviewsLoaded}
                sortReviews={this.sortReviews}
                productId={productId}
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
