import React from 'react';
import PropTypes from 'prop-types';
import './BuyProduct.css';
import {
  Button, Icon,
} from 'semantic-ui-react';
import {
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
  RedditShareButton,
  FacebookIcon,
  PinterestIcon,
  TwitterIcon,
  RedditIcon,
} from 'react-share';

function CartFaveButton({
  isTrue,
  submitItem,
}) {
  const shareUrl = 'https://github.com/Rowlf-FEC/Catwalk';
  const shareTitle = 'Team Rowlf\'s Project Catwalk is kinda cool!';
  return (
    <div className="cartShare">
      <Button
        animated
        disabled={isTrue}
        onClick={() => {
          submitItem();
        }}
      >
        <Button.Content hidden>Add</Button.Content>
        <Button.Content visible>
          <Icon name="shop" />
        </Button.Content>
      </Button>
      <FacebookShareButton
        url={shareUrl}
        quote={shareTitle}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <PinterestShareButton
        url={shareUrl}
        media="https://user-images.githubusercontent.com/62807795/121550583-7948dc80-c9d4-11eb-92ab-9c0648ec1b10.jpg"
        description={shareTitle}
      >
        <PinterestIcon size={32} round />
      </PinterestShareButton>
      <TwitterShareButton
        url={shareUrl}
        title={shareTitle}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <RedditShareButton
        url={shareUrl}
        title={shareTitle}
      >
        <RedditIcon size={32} round />
      </RedditShareButton>
    </div>
  );
}

CartFaveButton.propTypes = {
  isTrue: PropTypes.bool.isRequired,
  submitItem: PropTypes.func.isRequired,
};

export default CartFaveButton;
