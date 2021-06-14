import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Container } from 'semantic-ui-react';

function ReviewBody({ summary, body }) {
  return (
    <Grid.Row className="reviewBody" textAlign="left">
      <Grid.Column floated="left">
        <Container textAlign="left">
          <p className="reviewTitle">{summary}</p>
          <p>
            {body}
          </p>
        </Container>
      </Grid.Column>
    </Grid.Row>
  );
}

ReviewBody.propTypes = {
  summary: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default ReviewBody;
