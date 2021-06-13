/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './BuyProduct.css';
import {
  Card, Image,
} from 'semantic-ui-react';

function StyleThumbnails({
  styles, changeStyle, currentStyle,
}) {
  return (
    <Card.Group itemsPerRow={4} size="large">
      {styles.map((style) => (
        <Card
          className="imgStyle"
          key={style.style_id}
          onClick={() => { changeStyle(style); }}
          raised
        >
          <Image
            label={currentStyle[0].style_id === style.style_id ? {
              color: 'red', corner: 'left', icon: 'check', size: 'mini',
            } : null}
            src={style.photos[0].thumbnail_url}
          />
        </Card>
      ))}
    </Card.Group>
  );
}

StyleThumbnails.propTypes = {
  styles: PropTypes.array.isRequired,
  changeStyle: PropTypes.func.isRequired,
  currentStyle: PropTypes.func.isRequired,
};

export default StyleThumbnails;
