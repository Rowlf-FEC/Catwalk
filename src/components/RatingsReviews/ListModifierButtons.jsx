import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

function ListModifierButtons(props) {
  return (
    <div>
      <Button>MORE REVIEWS</Button>
      <Button>ADD A REVIEW +</Button>
    </div>
  );
}

ListModifierButtons.propTypes = {

};

export default ListModifierButtons;
