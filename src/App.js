import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Cart from './Cart';


const App = () => {
  const [products] = useState([
    { id: 1, name: 'Poleron', price: 10, imageUrl: 'https://mauiandsons.cl/media/catalog/product/5/o/5o658-mi24lisogreen-2.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=576&width=432&canvas=432:576' },
    { id: 2, name: 'Polera', price: 20, imageUrl: 'https://mauiandsons.cl/media/catalog/product/5/p/5p646-wi24lisolgrey-1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=576&width=432&canvas=432:576' },
    { id: 3, name: 'Parka', price: 30, imageUrl: 'https://mauiandsons.cl/media/catalog/product/5/p/5pk957-mi24lisoblack-1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=576&width=432&canvas=432:576' },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = cart.slice();
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products products={products} addToCart={addToCart} />} />
      </Routes>
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </Router>
  );
};

export default App;
