/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
// import { Image } from 'semantic-ui-react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './ProductImage.css';

function ProductImage({ images }) {
  return (
    <Carousel showArrows showStatus={false} showThumbs useKeyboardArrows width="100%">
      {images.map((image, index) => (
        <div key={index}>
          <img alt={image.url} className="carouselImg" src={image.url} />
        </div>
      ))}
    </Carousel>
  );
}

ProductImage.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ProductImage;
