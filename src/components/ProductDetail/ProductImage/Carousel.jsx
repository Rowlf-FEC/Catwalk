import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Magnifier from 'react-magnifier';
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
      // eslint-disable-next-line react/no-array-index-key
      // <div className={selectData.imageClass} key={index}>
      //   <img alt={image.url} src={image.url} />
      // </div>
      (selectData.zoom) ? (
        <div>
          <Magnifier src={image.url} />
        </div>
      )
        : (
          // eslint-disable-next-line react/no-array-index-key
          <div className={selectData.imageClass} key={index}>
            <img alt={image.url} src={image.url} />
          </div>
        )
    ))}
  </Carousel>
);

export default withSlide;
