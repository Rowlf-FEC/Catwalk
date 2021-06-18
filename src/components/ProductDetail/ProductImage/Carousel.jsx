/* eslint-disable react/no-array-index-key */
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Magnifier } from 'react-image-magnifiers';
import { Carousel } from 'react-responsive-carousel';

const withSlide = (WrappedComponent, selectData) => (
  <Carousel
    className={selectData.className}
    dynamicHeight
    onClickItem={selectData.onClickItem}
    onChange={selectData.onChange}
    selectedItem={selectData.selectedItem}
    showIndicators={selectData.showIndicators}
    showStatus={false}
    showThumbs={selectData.showThumbs}
    useKeyboardArrows
    width="100%"
  >
    {selectData.images.map((image, index) => (
      (selectData.open) ? (
        <div className={selectData.imageClass} key={index}>
          <Magnifier
            imageSrc={image.url}
            imageAlt={image.url}
            largeImageSrc={image.url}
          />
        </div>
      )
        : (
          <div className={selectData.imageClass} key={index}>
            <img alt={image.url} src={image.url} />
          </div>
        )
    ))}
  </Carousel>
);

export default withSlide;
