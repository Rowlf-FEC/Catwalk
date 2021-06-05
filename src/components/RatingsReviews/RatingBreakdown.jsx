import React from 'react';
import PropTypes from 'prop-types';
import { Placeholder } from 'semantic-ui-react';

function RatingBreakdown(props) {
  return (
    <div>
      100% of reviewers recommend this product
      <br />
      <Placeholder>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
    </div>
  )
}

RatingBreakdown.propTypes = {

}

export default RatingBreakdown

