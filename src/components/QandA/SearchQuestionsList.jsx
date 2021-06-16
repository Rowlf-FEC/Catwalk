import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import config from '../../config';
import './Question.css';

function SearchQuestionsList({ productId }) {
  const [searchQuestions, setSearchQuestions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const context = {
    headers: { authorization: config.token },
    params: { product_id: productId, count: 100 },
  };

  useEffect(() => {
    axios.get(`${config.url}/qa/questions`, context)
      .then((results) => {
        for (let i = 0; i < results.data.results.length; i += 1) {
          const obj = results.data.results[i];
          delete Object.assign(obj, { name: obj.question_body }).question_body;
        }
        setSearchQuestions(results.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    //console.log('Focused');
  };

  return (
    <div className="searchBar">
      <header className="App-header">
        <div style={{ width: '40vw' }}>
          <ReactSearchAutocomplete
            items={searchQuestions}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
          />
        </div>
      </header>
    </div>
  );
}

export default SearchQuestionsList;
