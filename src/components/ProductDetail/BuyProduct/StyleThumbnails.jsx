/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './BuyProduct.css';
import {
  Card, Image,
} from 'semantic-ui-react';

function StyleThumbnails({
  styles, changeStyle,
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
          <Image src={style.photos[0].thumbnail_url} />
          {/* <Label corner="right" icon="check" size="mini" /> */}
        </Card>
      ))}
    </Card.Group>
  );
}

StyleThumbnails.propTypes = {
  styles: PropTypes.array.isRequired,
  changeStyle: PropTypes.func.isRequired,
};

export default StyleThumbnails;
