/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Container } from 'semantic-ui-react';
import handleTime from '../../configFiles/dayjsConfig';
import StarRating from '../ModularComponents/StarRating';

function ReviewHeader({ rating, reviewer_name, givenTime }) {
  return (
    <Grid.Row className="reviewHeader">
      <Grid.Column className="starColumn" floated="left" width={1}>
        <Container textAlign="left">
          <StarRating ratings={{ [rating]: 1 }} />
        </Container>
      </Grid.Column>
      <Grid.Column floated="right" width={12}>
        <Container textAlign="right">
          <p>{`${reviewer_name}, ${handleTime(givenTime)}`}</p>
        </Container>
      </Grid.Column>
    </Grid.Row>
  );
}

ReviewHeader.propTypes = {
  rating: PropTypes.number.isRequired,
  reviewer_name: PropTypes.string.isRequired,
  givenTime: PropTypes.shape().isRequired,
};

export default ReviewHeader;
