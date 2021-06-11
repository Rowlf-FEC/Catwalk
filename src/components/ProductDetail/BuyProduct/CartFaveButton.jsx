import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Icon,
} from 'semantic-ui-react';

function CartFaveButton({
  isTrue,
}) {
  return (
    <div>
      <Button animated disabled={isTrue}>
        <Button.Content hidden>Add</Button.Content>
        <Button.Content visible>
          <Icon name="shop" />
        </Button.Content>
      </Button>
      <Button animated="fade">
        <Button.Content hidden>
          <Icon name="heart" />
          Fave
        </Button.Content>
        <Button.Content visible>
          <Icon name="heart outline" />
          Fave
        </Button.Content>
      </Button>
    </div>
  );
}

CartFaveButton.propTypes = {
  isTrue: PropTypes.bool.isRequired,
};

export default CartFaveButton;
