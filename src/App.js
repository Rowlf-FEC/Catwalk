import './App.css';
import ProductDetails from './components/ProductDetails';
import QandA from './components/QandA';
import RatingsReviews from './components/RatingsReviews';
import RelatedItems from './components/RelatedItems';
// Config is an object that has the cohort and token as keys.
import config from'./config.js';

function App() {
  return (
    <div className="App">
        <ProductDetails />
        <QandA />
        <RatingsReviews />
        <RelatedItems />
    </div>
  );
}

export default App;
