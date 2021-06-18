import './App.css';
import React from 'react';
import ProductDetail from './components/ProductDetail/ProductDetail';
import QandA from './components/QandA/QandA';
import RatingsReviews from './components/RatingsReviews/RatingsReviews';
import RelatedItems from './components/RelatedItems/RelatedItems';
import headerText from './assets/text-1623903227960.png';
import logo from './assets/fleur.svg';
import outline from './assets/WigglyFrameCircle.svg';
// Config is an object that has the cohort and token as keys.
// import config from'./config.js';

function App() {
  const productId = 27201;
  return (
    <div className="App">
      <div className="topBar">
        <img className="headerOutline" alt="logo outline" src={outline} />
        <img className="headerLogo" alt="Fleur de Lis" src={logo} />
        <img className="headerText" alt="Le Catwalk de Rowlf" src={headerText} />
      </div>
      <ProductDetail productId={productId} />
      <QandA productId={productId} />
      <RatingsReviews productId={productId} />
      <RelatedItems />
    </div>
  );
}

export default App;
