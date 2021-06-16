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
import StarRating from '../../RatingsReviews/ModularComponents/StarRating';
import PriceTag from './PriceTag';
import StyleThumbnails from './StyleThumbnails';
import SizeQtyDropDowns from './SizeQtyDropdowns';
import CartFaveButton from './CartFaveButton';

function BuyProduct({
  essentials, currentStyle, styles, changeStyle, setQuantity,
  sizeOptions, quantities, submitItem, setSizeQuantity, isTrue, ratings,
}) {
  if (currentStyle.length > 0) {
    const sections = [
      { key: 'Style', content: 'Style', link: false },
      { key: 'Stylename', content: currentStyle[0].name, link: false },
    ];
    let totalReviews = 0;
    for (const score in ratings) {
      totalReviews += Number(ratings[score]);
    }

    return (
      <div>
        <Header size="medium">{essentials[0]}</Header>
        <Header size="large">{essentials[2]}</Header>
        <div className="reviewLink">
          <StarRating ratings={ratings} />
          <a href="#read_reviews">Read all {totalReviews} reviews</a>
        </div>
        <PriceTag currentStyle={currentStyle} />
        <Divider />
        <Breadcrumb as="h2" icon="right angle" sections={sections} size="large" />
        <Divider hidden />
        <Grid.Row>
          <StyleThumbnails changeStyle={changeStyle} currentStyle={currentStyle} styles={styles} />
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
        </Grid.Row>
      </div>
    );
  }
  return null;
}

BuyProduct.propTypes = {
  changeStyle: PropTypes.func.isRequired,
  currentStyle: PropTypes.array.isRequired,
  essentials: PropTypes.array.isRequired,
  isTrue: PropTypes.bool.isRequired,
  quantities: PropTypes.array.isRequired,
  ratings: PropTypes.object.isRequired,
  setQuantity: PropTypes.func.isRequired,
  setSizeQuantity: PropTypes.func.isRequired,
  sizeOptions: PropTypes.array.isRequired,
  styles: PropTypes.array.isRequired,
  submitItem: PropTypes.func.isRequired,
};

export default BuyProduct;
