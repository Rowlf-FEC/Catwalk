import React from 'react';
import PropTypes from 'prop-types';
import { Container, Dropdown } from 'semantic-ui-react';


function SortOptions(props) {
  const options = [
    {
      key: 'relevance',
      text: 'relevance',
      value: 'relevance',
    },
    {
      key: 'helpful',
      text: 'helpful',
      value: 'helpful',
    },
    {
      key: 'newest',
      text: 'newest',
      value: 'newest',
    },
  ];
  return (
    <div>
      <Container as="h4" textAlign="left">{props.count} reviews. Sorted by:{' '}
        <Dropdown
          text={<u>newest</u>}
          inline
          options={options}
          defaultValue="newest"
        />
      </Container>

    </div>
  );
}

SortOptions.propTypes = {
  count: PropTypes.number.isRequired,
};

export default SortOptions;
