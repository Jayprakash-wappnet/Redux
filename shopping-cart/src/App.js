import './App.css';
import Cart from './components/Cart';
import products from './data/products.json'
import Product from './components/Product';

function App() {
  return (
    <div className="App">
     <Cart/>
     <div className="products d-flex flex-wrap">
        {products.map((product) => (
          <Product {...product} />
        ))}
      </div>
    </div>
  );
}

export default App;
