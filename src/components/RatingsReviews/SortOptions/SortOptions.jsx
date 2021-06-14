import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import './SortOptions.css';

function SortOptions({ count }) {
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
    <div className="sortContainer">
      {count}
      {' reviews, sorted by: '}
      <Dropdown
        text="relevance"
        inline
        options={options}
        defaultValue="newest"
      />
    </div>
  );
}

SortOptions.propTypes = {
  count: PropTypes.number.isRequired,
};

export default SortOptions;
