/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Divider, Header, List,
} from 'semantic-ui-react';

function ProductDescription({ productDescription, essentials }) {
  if (essentials.length > 0) {
    return (
      <Grid columns={2} divided>
        <Grid.Column width={10}>
          <Header content={productDescription[1]} />
          <Header.Subheader content={productDescription[0]} />
        </Grid.Column>
        <Grid.Column width={3}>
          <List>
            {essentials[3].map((element) => (
              <List.Item>
                <List.Icon name="check" />
                <List.Content content={element.feature} />
              </List.Item>
            ))}
          </List>
        </Grid.Column>
      </Grid>
    );
  }
  return null;
}

ProductDescription.propTypes = {
  essentials: PropTypes.array.isRequired,
  productDescription: PropTypes.array.isRequired,
};

export default ProductDescription;
