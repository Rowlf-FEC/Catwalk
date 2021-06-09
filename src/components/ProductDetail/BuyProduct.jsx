/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Divider, Header, Breadcrumb, Dropdown, Icon, Button,
} from 'semantic-ui-react';
import '../../App.css';

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
      if (sku === 'null') {
        break;
      } else {
        const item = currentStyle[0].skus[sku];
        if (item.quantity > 0) {
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
      }
    }

    return (
      <div>
        <Header size="tiny">{essentials[0]}</Header>
        <Header size="large">{essentials[2]}</Header>
        <Header>
          <Header.Content
            className={currentStyle[0].sale_price ? 'sale' : 'original'}
            content={currentStyle[0].sale_price ? `$${currentStyle[0].sale_price}` : `$${currentStyle[0].original_price}`}
          />
          <Header.Subheader
            content={currentStyle[0].sale_price ? <span className="strikethrough">${currentStyle[0].original_price}</span> : null}
          />
        </Header>
        <Divider />
        <Breadcrumb icon="right angle" sections={sections} />
        <Grid.Row>
          <Dropdown
            header="Select a size"
            selection
            onChange={(e) => {
              const quantities = [];
              let n = 1;
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
            placeholder={sizes.length === 0 ? 'OUT OF STOCK' : 'Select Size'}
          />
          <Dropdown
            placeholder={currentQty.length === 0 ? '-' : '1'}
            compact
            defaultValue="1"
            selection
            options={currentQty}
          />
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Button animated="horizontal" disabled={currentQty.length === 0}>
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

// export default BuyProduct;
