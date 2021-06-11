/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Divider, Header, Breadcrumb, Dropdown, Icon, Button, Image, Card,
} from 'semantic-ui-react';
import '../../App.css';
import './BuyProduct.css';
import PriceTag from './BuyProduct/PriceTag';
import ShareButton from './BuyProduct/ShareButtons';

function BuyProduct({
  essentials, currentStyle, styles, changeStyle,
}) {
  const qtyOptions = {};
  const sizes = [];
  const [currentQty, setCurrentQty] = useState([]);

  if (currentStyle.length > 0) {
    const sections = [
      { key: 'Style', content: 'Style', link: false },
      { key: 'Stylename', content: currentStyle[0].name, link: false },
    ];

    const isTrue = currentQty.length === 0;

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
          qtyOptions[item.size] = item.quantity;
        }
      }
    }

    return (
      <div>
        <Header size="medium">{essentials[0]}</Header>
        <Header size="large">{essentials[2]}</Header>
        <PriceTag currentStyle={currentStyle} />
        <Divider />
        <Breadcrumb as="h2" icon="right angle" sections={sections} size="large" />
        <Divider hidden />
        <Grid.Row>
          <Card.Group itemsPerRow={4} size="large">
            {styles.map((style) => (
              <Card
                className="imgStyle"
                key={style.style_id}
                onClick={() => { changeStyle(style); }}
                raised
              >
                <Image src={style.photos[0].thumbnail_url} />
                {/* <Label corner="right" icon="check" size="mini" /> */}
              </Card>
            ))}
          </Card.Group>
        </Grid.Row>
        <Divider hidden />
        <Grid.Row>
          <Dropdown
            header="Select a size"
            selection
            onChange={(e) => {
              const quantities = [];
              let n = 1;
              while (n <= qtyOptions[e.target.textContent]) {
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
              setCurrentQty(quantities);
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
        <Divider hidden />
        <Grid.Row>
          <Button animated disabled={isTrue}>
            <Button.Content hidden>Add</Button.Content>
            <Button.Content visible>
              <Icon name="shop" />
            </Button.Content>
          </Button>
          <Button animated="fade">
            <Button.Content hidden>
              <Icon name="heart" />
              Fave
            </Button.Content>
            <Button.Content visible>
              <Icon name="heart outline" />
              Fave
            </Button.Content>
          </Button>
          <Divider hidden />
          <ShareButton />
        </Grid.Row>
      </div>
    );
  }
  return null;
}

BuyProduct.propTypes = {
  essentials: PropTypes.array.isRequired,
  changeStyle: PropTypes.func.isRequired,
  currentStyle: PropTypes.array.isRequired,
  styles: PropTypes.array.isRequired,
};

export default BuyProduct;
