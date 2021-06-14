import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import './Slider.css';

function Slider({ sliderValue }) {
  const sliderLocation = (sliderValue / 5) * 95;
  return (
    <div className="sliderBar">
      <Icon
        name="triangle down"
        size="big"
        style={{ left: `${sliderLocation}%` }}
      />
      <div className="gapLeft" />
      <div className="gapRight" />
    </div>
  );
}

Slider.propTypes = {
  sliderValue: PropTypes.string.isRequired,
};

export default Slider;
