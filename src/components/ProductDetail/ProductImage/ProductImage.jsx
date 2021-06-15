/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
// import { Image } from 'semantic-ui-react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './ProductImage.css';

function ProductImage({ images }) {
  const customRenderThumb = () => {
    images.map((image) => (
      // <div>
      <img alt={image.thumbnail_url} src={image.thumbnail_url} />
      // </div>
    ));
  };

  return (
    <Carousel showArrows showIndicators={false} showStatus={false} showThumbs useKeyboardArrows width="100%">
      {images.map((image, index) => (
        <button key={index} type="button">
          <img alt={image.url} src={image.url} className="slideImg" />
        </button>
      ))}
    </Carousel>
  );
}

ProductImage.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ProductImage;
