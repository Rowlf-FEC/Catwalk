import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Container } from 'semantic-ui-react';

function ReviewBody({ summary, body }) {
  let prepended = null;
  let summaryCopy = summary.slice();

  if (summary.length > 60) {
    const shortSummary = summaryCopy.slice(0, 60);
    const endSummary = summaryCopy.slice(60);
    // let prependedBody = endSummary + body;

    summaryCopy = shortSummary.concat('...');
    prepended = '...'.concat(endSummary);
  }

  return (
    <Grid.Row className="reviewBody" textAlign="left">
      <Grid.Column floated="left">
        <Container textAlign="left">
          <p className="reviewTitle">{summaryCopy}</p>
          <p>{prepended}</p>
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
