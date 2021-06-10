import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from 'semantic-ui-react';

function ListModifierButtons(props) {
  return (
    <Container>
      <Button basic>MORE REVIEWS</Button>
      <Button basic>ADD A REVIEW +</Button>
    </Container>
  );
}

ListModifierButtons.propTypes = {

};

export default ListModifierButtons;
