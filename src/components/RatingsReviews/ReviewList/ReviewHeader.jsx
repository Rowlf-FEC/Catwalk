/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import handleTime from '../../configFiles/dayjsConfig';
import StarRating from '../ModularComponents/StarRating';

function ReviewHeader({ rating, reviewer_name, givenTime }) {
  return (
    <Grid.Row
      columns={2}
      verticalAlign="top"
      className="reviewHeader"
      style={{ paddingBottom: '15px' }}
    >
      <Grid.Column
        className="starColumn"
        floated="left"
        width={16}
        style={{ position: 'relative' }}
      >
        <StarRating ratings={{ [rating]: 1 }} style={{ position: 'absolute' }} />
        <p style={{
          float: 'right',
          position: 'absolute',
          right: '0',
          top: '0',
        }}
        >
          {`${reviewer_name}, ${handleTime(givenTime)}`}
        </p>
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
