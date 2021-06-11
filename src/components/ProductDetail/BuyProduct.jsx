/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/forbid-prop-types */
import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Divider, Header, Breadcrumb,
} from 'semantic-ui-react';
import '../../App.css';
import PriceTag from './BuyProduct/PriceTag';
import StyleThumbnails from './BuyProduct/StyleThumbnails';
import SizeQtyDropDowns from './BuyProduct/SizeQtyDropdowns';
import CartFaveButton from './BuyProduct/CartFaveButton';
import ShareButton from './BuyProduct/ShareButtons';

function BuyProduct({
  essentials, currentStyle, styles, changeStyle, sizeOptions, qtyOptions,
}) {
  const [isTrue, setTrue] = useState(true);

  if (currentStyle.length > 0) {
    const sections = [
      { key: 'Style', content: 'Style', link: false },
      { key: 'Stylename', content: currentStyle[0].name, link: false },
    ];

    return (
      <div>
        <Header size="medium">{essentials[0]}</Header>
        <Header size="large">{essentials[2]}</Header>
        <PriceTag currentStyle={currentStyle} />
        <Divider />
        <Breadcrumb as="h2" icon="right angle" sections={sections} size="large" />
        <Divider hidden />
        <Grid.Row>
          <StyleThumbnails styles={styles} changeStyle={changeStyle} />
        </Grid.Row>
        <Divider hidden />
        <Grid.Row>
          <SizeQtyDropDowns setTrue={setTrue} sizeOptions={sizeOptions} qtyOptions={qtyOptions} />
        </Grid.Row>
        <Divider hidden />
        <Grid.Row>
          <CartFaveButton isTrue={isTrue} />
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
  qtyOptions: PropTypes.array.isRequired,
  sizeOptions: PropTypes.array.isRequired,
  styles: PropTypes.array.isRequired,
};

export default BuyProduct;
