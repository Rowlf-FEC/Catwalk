import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Container, Divider } from 'semantic-ui-react';

function ReviewFooter({ helpfulness }) {
  return (
    <Grid.Row className="removeSpace">
      <Grid.Column className="removeSpace" floated="left">
        <Container textAlign="left">
          <p>{`Helpful? Yes (${helpfulness}) | Report`}</p>
        </Container>
        <Divider />
      </Grid.Column>
    </Grid.Row>
  );
}

ReviewFooter.propTypes = {
  helpfulness: PropTypes.number.isRequired,
};

export default ReviewFooter;
