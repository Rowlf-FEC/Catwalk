import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import './Slider.css';
import Slider from './Slider';

function ProductBreakdown({ characteristics }) {
  const attributes = {
    Size: ['Too small', 'Perfect', 'Too wide'],
    Width: ['Too narrow', 'Perfect', 'Too wide'],
    Comfort: ['Uncomfortable', 'Ok', 'Perfect'],
    Quality: ['Poor', 'Expected', 'Perfect'],
    Length: ['Runs short', 'Perfect', 'Runs long'],
    Fit: ['Runs tight', 'Perfect', 'Runs long'],
  };

  return (
    <Grid style={{ paddingTop: '20px' }}>
      {Object.keys(characteristics).map((attr) => (
        <Grid.Row
          key={attr}
          columns={3}
          style={{ maxHeight: '100px' }}
        >
          <p className="sliderTitle">{attr}</p>
          <Slider sliderValue={characteristics[attr].value} />
          <Grid.Column textAlign="left">
            <p>{attributes[attr][0]}</p>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <p>{attributes[attr][1]}</p>
          </Grid.Column>
          <Grid.Column textAlign="right" floated="right">
            <p>{attributes[attr][2]}</p>
          </Grid.Column>
        </Grid.Row>
      ))}
    </Grid>
  );
}

ProductBreakdown.propTypes = {
  characteristics: PropTypes.shape().isRequired,
};

export default ProductBreakdown;
