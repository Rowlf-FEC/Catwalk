import './App.css';
import React from 'react';
import ProductDetail from './components/ProductDetail/ProductDetail';
import QandA from './components/QandA/QandA';
import RatingsReviews from './components/RatingsReviews/RatingsReviews';
import RelatedItems from './components/RelatedItems/RelatedItems';
// Config is an object that has the cohort and token as keys.
// import config from'./config.js';

function App() {
  return (
    <div className="App">
      <ProductDetail />
      <QandA />
      <RatingsReviews />
      <RelatedItems />
    </div>
  );
}

export default App;
