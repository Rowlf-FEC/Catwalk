import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

function SortOptions(props) {
  return (
    <div>
      245 Reviews. Sort by:
      <Dropdown text=' Relevance'>
        <Dropdown.Menu>
          <Dropdown.Item text='Relevance' />
          <Dropdown.Item text='Helpful' />
          <Dropdown.Item text='Newest' />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

SortOptions.propTypes = {

}

export default SortOptions;

