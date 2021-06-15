/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './ProductImage.css';

function ProductImage({ images }) {
  const [open, setOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const Slide = () => (
    <Carousel
      onClickItem={(index) => { setOpen(() => true); setCurrentSlide(() => index); }}
      onChange={(index) => { setCurrentSlide(() => index); }}
      selectedItem={currentSlide}
      showIndicators={false}
      showStatus={false}
      useKeyboardArrows
      width="100%"
    >
      {images.map((image, index) => (
        <div key={index}>
          <img alt={image.url} src={image.url} />
        </div>
      ))}
    </Carousel>
  );

  return (
    <div>
      <Slide id="slideImg" />
      <Modal
        onClose={() => setOpen(false)}
        open={open}
      >
        <Modal.Content>
          <Slide />
        </Modal.Content>
      </Modal>
    </div>
  );
}

ProductImage.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ProductImage;
