import './App.css';
import React from 'react';
import ProductDetail from './components/ProductDetail/ProductDetail';
import QandA from './components/QandA/1QandA';
import RatingsReviews from './components/RatingsReviews/RatingsReviews';
import RelatedItems from './components/RelatedItems/RelatedItems';
//Config is an object that has the cohort and token as keys.
import config from'./config';

function App() {
  return (
    <div className="App">
      <QandA />
    </div>
  );
}

export default App;
