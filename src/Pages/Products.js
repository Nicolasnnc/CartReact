import React from 'react';
import ProductList from '../components/ProductList';

const Products = ({ products, addToCart }) => (
  <div>
    <h2>Nuestros Productos</h2>
    <ProductList products={products} addToCart={addToCart} />
  </div>
);

export default Products;
