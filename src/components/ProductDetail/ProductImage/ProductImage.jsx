/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';
import withSlide from './Carousel';
import './ProductImage.css';

function ProductImage({ images }) {
  const [open, setOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  let mainCarousel;
  const mainData = {
    className: 'mainCarousel',
    dynamicHeight: true,
    onClickItem: (index) => { setOpen(() => true); setCurrentSlide(() => index); },
    onChange: (index) => { setCurrentSlide(() => index); },
    selectedItem: currentSlide,
    showIndicators: false,
    showThumbs: true,
    images,
    imageClass: 'mainImage',
  };

  let modalCarousel;
  const modalData = {
    className: 'modalCarousel',
    dynamicHeight: true,
    // onClickItem:
    onChange: (index) => { setCurrentSlide(() => index); },
    selectedItem: currentSlide,
    showIndicators: true,
    showThumbs: false,
    images,
    imageClass: 'modalImage',
  };

  return (
    <div>
      {withSlide(mainCarousel, mainData)}
      <Modal
        id="modalCarousel"
        onClose={() => setOpen(false)}
        open={open}
      >
        <Modal.Content>
          {withSlide(modalCarousel, modalData)}
        </Modal.Content>
      </Modal>
    </div>
  );
}

ProductImage.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ProductImage;
