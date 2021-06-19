/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';
// import { Magnifier, GlassMagnifier } from 'react-image-magnifiers';
import withSlide from './Carousel';
import './ProductImage.css';

function ProductImage({ images }) {
  const [open, setOpen] = useState(false);
  // const [zoom, setZoom] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  let mainCarousel;
  const mainData = {
    className: 'mainCarousel',
    onClickItem: (index) => { setOpen(() => true); setCurrentSlide(() => index); },
    onChange: (index) => { setCurrentSlide(() => index); },
    selectedItem: currentSlide,
    showIndicators: false,
    showThumbs: true,
    images,
    imageClass: 'mainImage',
    open,
  };

  let modalCarousel;

  const modalData = {
    className: 'modalCarousel',
    // onClickItem: () => {
    //   setZoom(() => true);
    // },
    onChange: (index) => {
      setCurrentSlide(() => index);
    },
    selectedItem: currentSlide,
    showIndicators: true,
    showThumbs: false,
    images,
    imageClass: 'modalImage',
    open,
  };
  return (
    <div>
      {withSlide(mainCarousel, mainData)}
      <Modal
        id="modalCarousel"
        onClose={() => {
          setOpen(false);
          // setZoom(false);
        }}
        open={open}
      >
        <Modal.Content>
          {/* {zoom ? (
            <div>
              <Magnifier
                className="magnifierImg"
                cursorStyle="crosshair"
                imageSrc={images[currentSlide].url}
                imageAlt={images[currentSlide].url}
                largeImageSrc={images[currentSlide].url}
                onZoomEnd={() => setZoom(false)}
              />
            </div>
          ) : withSlide(modalCarousel, modalData)} */}
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
