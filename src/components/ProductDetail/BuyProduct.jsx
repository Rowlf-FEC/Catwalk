/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Divider, Header, Breadcrumb, Dropdown, Icon, Button,
} from 'semantic-ui-react';

function BuyProduct({ essentials, currentStyle }) {
  const qtyOptions = {};
  const sizes = [];
  const [currentQty, setCurrentQty] = useState([]);

  if (currentStyle.length > 0) {
    const sections = [
      { key: 'Style', content: 'Style', link: false },
      { key: 'Stylename', content: currentStyle[0].name, link: false },
    ];

    for (const sku in currentStyle[0].skus) {
      const item = currentStyle[0].skus[sku];
      const sizeOption = {
        key: item.size,
        text: item.size,
        value: item.size,
      };
      sizes.push(sizeOption);
      qtyOptions[item.size] = {
        key: item.quantity,
        text: item.quantity,
        value: item.quantity,
      };
    }

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
            onChange={(e) => {
              const quantities = [];
              let n = 0;
              while (n <= qtyOptions[e.target.textContent].key) {
                if (n > 15) {
                  break;
                }
                quantities.push({
                  key: n,
                  text: n,
                  value: n,
                });
                n += 1;
              }
              setCurrentQty([...quantities]);
            }}
            options={sizes}
          />
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Dropdown
            placeholder="0"
            block
            compact
            selection
            options={currentQty}
          />
          <Button animated="horizontal">
            <Button.Content hidden>Add</Button.Content>
            <Button.Content visible>
              <Icon name="shop" />
            </Button.Content>
          </Button>
          <Button animated="fade">
            <Button.Content hidden icon labelPosition="left">
              <Icon name="heart" />
              Fave
            </Button.Content>
            <Button.Content visible icon labelPosition="left">
              <Icon name="heart outline" />
              Fave
            </Button.Content>
          </Button>
        </Grid.Row>
      </div>
    );
  }
  return null;
}

BuyProduct.propTypes = {
  essentials: PropTypes.array.isRequired,
  currentStyle: PropTypes.array.isRequired,
};

export default BuyProduct;
