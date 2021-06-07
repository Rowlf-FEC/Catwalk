/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Divider, Header, Breadcrumb, Dropdown, Icon, Button } from 'semantic-ui-react';

function BuyProduct({ essentials }) {
  const sections = [
    { key: 'Style', content: 'Style', link: false },
    { key: 'Stylename', content: 'White', link: false },
  ];
  const sizeOptions = [
    {
      key: 'Small',
      text: 'Small',
      value: 'Small',
    },
    {
      key: 'Medium',
      text: 'Medium',
      value: 'Medium',
    },
    {
      key: 'Large',
      text: 'Large',
      value: 'Large',
    },
  ];
  const qtyOptions = [
    {
      key: '1',
      text: '1',
      value: '1',
    },
  ];
  return (
    <div>
      <Header size="tiny">{essentials[0]}</Header>
      <Header size="large">{essentials[2]}</Header>
      <Header size="tiny">${essentials[1]}</Header>
      <Divider />
      <Breadcrumb icon="right angle" sections={sections} />
      <Grid.Row>
        <Dropdown
          placeholder="Select a size"
          block
          compact
          selection
          options={sizeOptions}
        />
      </Grid.Row>
      <Divider />
      <Grid.Row>
        <Dropdown
          placeholder="0"
          block
          compact
          selection
          options={qtyOptions}
        />
        <Button animated="horizontal">
          <Button.Content hidden>Add</Button.Content>
          <Button.Content visible>
            <Icon name="shop" />
          </Button.Content>
        </Button>
        <Button animated="fade">
          <Button.Content hidden>
            <Icon name="heart" />
          </Button.Content>
          <Button.Content visible>
            <Icon name="heart outline" />
          </Button.Content>
        </Button>
      </Grid.Row>
    </div>
  );
}

BuyProduct.propTypes = {
  essentials: PropTypes.array.isRequired,
};

export default BuyProduct;
