import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, Container, Divider } from 'semantic-ui-react';
import StarRating from '../ModularComponents/StarRating';

const Review = (props) => {
  const [reviews, setReviews] = useState(props.reviews || []);

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column floated="left" width={1}>
          <Container textAlign="left">
            <StarRating />
          </Container>
        </Grid.Column>
        <Grid.Column floated="right" width={4}>
          <Container textAlign="right">
            <p>verified, username, date</p>
          </Container>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row textAlign="left">
        <Grid.Column floated="left">

          <Container textAlign="left">
            <b>Title</b>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
            </p>
          </Container>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column floated="left">
          <Container textAlign="left">
            <p>text</p>
          </Container>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column floated="left">
          <Container textAlign="left">
            Helpful? Yes 10 | Report
          </Container>
        </Grid.Column>
      </Grid.Row>
      <Divider />
    </Grid>
  );
};

Review.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default Review;
