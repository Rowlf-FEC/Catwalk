/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import './App.css';
import React from 'react';
import { Icon } from 'semantic-ui-react';
import ProductDetail from './components/ProductDetail/ProductDetail';
import QandA from './components/QandA/QandA';
import RatingsReviews from './components/RatingsReviews/RatingsReviews';
import BottomBar from './components/BottomBar/BottomBar';
import headerText from './assets/text-1623903227960.png';
import logo from './assets/fleur.svg';
import outline from './assets/WigglyFrameCircle.svg';
// Config is an object that has the cohort and token as keys.
// import config from'./config.js';

function App() {
  const productId = 27189;
  return (
    <div className="App">
      <a id="imTheTop" style={{ visibility: 'hidden' }} />
      <div className="topBar">
        <img className="headerOutline" alt="logo outline" src={outline} />
        <img className="headerLogo" alt="Fleur de Lis" src={logo} />
        <img className="headerText" alt="Le Catwalk de Rowlf" src={headerText} />
      </div>
      <ProductDetail productId={productId} />
      <QandA productId={productId} />
      <RatingsReviews productId={productId} />
      <div className="backToTop">
        <Icon name="angle up" />
        <a style={{ color: 'black' }} href="#imTheTop">Back to Top</a>
      </div>
      <div className="bottomBar">
        <img className="bottomLogo" alt="Fleur de Lis" src={logo} />
        <BottomBar />
      </div>
    </div>
  );
}

export default App;
