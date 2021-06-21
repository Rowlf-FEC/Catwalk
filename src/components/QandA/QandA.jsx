/* eslint-disable react/no-find-dom-node */
import React, { Component } from 'react';
import axios from 'axios';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import QuestionsList from './QuestionsList';
import SearchQuestionsList from './SearchQuestionsList';
import SubmitQuestionForm from './SubmitQuestionForm';
import './Question.css';
import handleAnalytics from '../RatingsReviews/ModularComponents/handleAnalytics';


class QandA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productIdNum: props.productId,
      questions: [],
      searchList: [],
      searchLength: '',
    };
    this.questionListDecider = this.questionListDecider.bind(this);
    this.setSearchLength = this.setSearchLength.bind(this);
    this.setSearchList = this.setSearchList.bind(this);
  }

  componentDidMount() {
    const { productIdNum } = this.state;
    const context = {
      params: {
        product_id: productIdNum, page: 1, count: 1000,
      },
    };

    function compare(a, b) {
      if (a.question_helpfulness > b.question_helpfulness) {
        return -1;
      }
      if (a.question_helpfulness < b.question_helpfulness) {
        return 1;
      }
      return 0;
    }

    axios.get('/qa/questions', context)
      .then((results) => {
        results.data.results.sort(compare);
        this.setState({
          questions: results.data.results,
        });
      })
      .catch((error) => {
        throw error;
      });
    ReactDOM.findDOMNode(this).addEventListener('click', (e) => handleAnalytics(e, 'Questions and Answers'));
  }

  setSearchList(array) {
    this.setState({
      searchList: array,
    });
  }

  setSearchLength(string) {
    this.setState({
      searchLength: string,
    });
  }

  questionListDecider() {
    const { searchLength, searchList, questions } = this.state;
    if (searchLength.length > 2 && searchList.length > 0) {
      return <QuestionsList questionsArray={searchList} bool />;
    }
    if (searchLength.length > 2 && searchList.length === 0) {
      return <h1 id="questions_feed">No Results Found</h1>;
    }
    return <QuestionsList questionsArray={questions} bool={false} />;
  }

  render() {
    const { questions, productIdNum } = this.state;
    return (
      <div className="QandA">
        <Grid centered className="QandA">
          <Grid.Row stretched className="question_search_bar">
            <SearchQuestionsList
              questionsArray={questions}
              setSearchList={this.setSearchList}
              setSearchLength={this.setSearchLength}
            />
            <SubmitQuestionForm productId={productIdNum} />
          </Grid.Row>
          <Grid.Row stretched className="question_feed">
            {this.questionListDecider()}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

QandA.propTypes = {
  productId: PropTypes.number,
};
QandA.defaultProps = {
  productId: 27189,
};

export default QandA;
