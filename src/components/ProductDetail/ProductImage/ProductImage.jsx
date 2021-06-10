/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
// import { Image } from 'semantic-ui-react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './ProductImage.css';

function ProductImage({ images }) {
  return (
    <Carousel dynamicHeight showArrows showStatus={false} showThumbs useKeyboardArrows width="100%">
      {images.map((image) => (
        <div>
          <img alt={image.url} className="carouselImg" src={image.thumbnail_url} />
        </div>
      ))}
    </Carousel>
  );
}

ProductImage.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ProductImage;
