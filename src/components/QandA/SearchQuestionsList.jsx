import React, { useEffect, useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import PropTypes from 'prop-types';
import './Question.css';

function SearchQuestionsList({ questionsArray }) {
  const [searchQuestions, setSearchQuestions] = useState([]);

  // this useEffect is changing the property key to "name" and deleting the old key "question_body"
  // search bar requires "name" property for lookup
  useEffect(() => {
    for (let i = 0; i < questionsArray.length; i += 1) {
      const obj = questionsArray[i];
      delete Object.assign(obj, { name: obj.question_body }).question_body;
    }
    setSearchQuestions(questionsArray);
  }, [questionsArray]);

  // ============= Need to finish this logic for what happens with search bar ================

  // const [inputValue, setInputValue] = useState('');

  // const handleOnSearch = (string, results) => {
  //   // onSearch will have as the first callback parameter
  //   // the string searched and for the second the results.
  //   // console.log(string, results);
  // };

  // const handleOnHover = (result) => {
  //   // the item hovered
  //   // console.log(result);
  // };

  // const handleOnSelect = (item) => {
  //   // the item selected
  //   // console.log(item);
  // };

  // const handleOnFocus = () => {
  //   // console.log('Focused');
  // };

  return (
    <div className="searchBar">
      <header className="App-header">
        <div style={{ width: '40vw' }}>
          <ReactSearchAutocomplete
            items={searchQuestions}
            // onSearch={handleOnSearch}
            // onHover={handleOnHover}
            // onSelect={handleOnSelect}
            // onFocus={handleOnFocus}
            autoFocus
          />
        </div>
      </header>
    </div>
  );
}

SearchQuestionsList.propTypes = {
  questionsArray: PropTypes.arrayOf(PropTypes.shape()),
};
SearchQuestionsList.defaultProps = {
  questionsArray: [],
};

export default SearchQuestionsList;
