import React, {
  useEffect, useRef, useReducer, useCallback,
} from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import './Question.css';
import { Search, Grid } from 'semantic-ui-react';

function SearchQuestionsList({ questionsArray, setSearchList, setSearchLength }) {
  const source = questionsArray;
  const initialState = {
    loading: false,
    results: [],
    value: '',
  };

  function exampleReducer(state, action) {
    switch (action.type) {
      case 'CLEAN_QUERY':
        return initialState;
      case 'START_SEARCH':
        return { ...state, loading: true, value: action.query };
      case 'FINISH_SEARCH':
        return { ...state, loading: false, results: action.results };
      case 'UPDATE_SELECTION':
        return { ...state, value: action.selection };

      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(exampleReducer, initialState);
  const { loading, results, value } = state;
  const timeoutRef = useRef();

  const handleSearchChange = useCallback((e, data) => {
    clearTimeout(timeoutRef.current);
    dispatch({ type: 'START_SEARCH', query: data.value });

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' });
        return;
      }

      const re = new RegExp(_.escapeRegExp(data.value), 'i');
      const isMatch = (result) => re.test(result.question_body);

      dispatch({
        type: 'FINISH_SEARCH',
        results: _.filter(source, isMatch),
      });
    }, 300);
  }, [source]);

  React.useEffect(() => () => {
    clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    setSearchList(results);
    setSearchLength(value);
  }, [results, setSearchList, value, setSearchLength]);

  return (
    <Grid>
      <Grid.Column>
        <Search
          id="search_bar"
          placeholder="Have a Question? Search for Answers..."
          loading={loading}
          onResultSelect={(e, data) => dispatch({ type: 'UPDATE_SELECTION', selection: data.result.question_body })}
          onSearchChange={handleSearchChange}
          value={value}
          minCharacters={3}
          open={false}
        />
      </Grid.Column>
    </Grid>
  );
}

SearchQuestionsList.propTypes = {
  questionsArray: PropTypes.arrayOf(PropTypes.shape()),
  setSearchList: PropTypes.func.isRequired,
  setSearchLength: PropTypes.func.isRequired,
};
SearchQuestionsList.defaultProps = {
  questionsArray: [],
};

export default SearchQuestionsList;
