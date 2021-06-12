/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Divider, Header, Breadcrumb,
} from 'semantic-ui-react';
import '../../../App.css';
import PriceTag from './PriceTag';
import StyleThumbnails from './StyleThumbnails';
import SizeQtyDropDowns from './SizeQtyDropdowns';
import CartFaveButton from './CartFaveButton';
import ShareButton from './ShareButtons';

function BuyProduct({
  essentials, currentStyle, styles, changeStyle, setQuantity,
  sizeOptions, quantities, submitItem, setSizeQuantity, isTrue,
}) {
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
          <SizeQtyDropDowns
            setQuantity={setQuantity}
            setSizeQuantity={setSizeQuantity}
            sizeOptions={sizeOptions}
            quantities={quantities}
          />
        </Grid.Row>
        <Divider hidden />
        <Grid.Row>
          <CartFaveButton isTrue={isTrue} submitItem={submitItem} />
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
  isTrue: PropTypes.bool.isRequired,
  quantities: PropTypes.array.isRequired,
  setQuantity: PropTypes.func.isRequired,
  setSizeQuantity: PropTypes.func.isRequired,
  sizeOptions: PropTypes.array.isRequired,
  styles: PropTypes.array.isRequired,
  submitItem: PropTypes.func.isRequired,
};

export default BuyProduct;
