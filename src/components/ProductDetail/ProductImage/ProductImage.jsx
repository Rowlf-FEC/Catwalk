/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
// import { Divider } from 'semantic-ui-react';
// import {
//   CarouselProvider, Image, Slide, Slider,
// } from 'pure-react-carousel';
// import CustomDotGroup from './CustomDotGroup';

function ProductImage({ images }) {
  return (
    <div>Insert photo here </div>
  );
  // return (
  //   <CarouselProvider
  //     naturalSlideWidth={1}
  //     naturalSlideHeight={1}
  //     totalSlides={3}
  //   >
  //     <Slider>
  //       <Slide tag="a" index={0}>
  //         <Image src="https://lorempixel.com/800/800/cats/0" />
  //       </Slide>
  //       <Slide tag="a" index={1}>
  //         <Image src="https://lorempixel.com/800/800/cats/1" />
  //       </Slide>
  //       <Slide tag="a" index={2}>
  //         <Image src="https://lorempixel.com/800/800/cats/2" />
  //       </Slide>
  //     </Slider>
  //     <Divider />
  //     <CustomDotGroup slides={3} />
  //   </CarouselProvider>
  // );
}

ProductImage.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ProductImage;
