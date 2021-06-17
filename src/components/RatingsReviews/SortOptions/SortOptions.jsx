import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import './SortOptions.css';

function SortOptions({ count, sortReviews }) {
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

  const handleChange = (e, d) => {
    e.preventDefault();
    sortReviews(d.value);
  };

  return (
    <div className="sortContainer">
      {count}
      {' reviews, sorted by: '}
      <Dropdown
        defaultValue="relevance"
        inline
        options={options}
        onChange={handleChange}
      />
    </div>
  );
}

SortOptions.propTypes = {
  count: PropTypes.number.isRequired,
  sortReviews: PropTypes.func.isRequired,
};

export default SortOptions;
