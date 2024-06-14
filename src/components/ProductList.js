import React from 'react';
import Product from './Product';

const ProductList = ({ products, addToCart }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {products.map(product => (
      <Product key={product.id} product={product} addToCart={addToCart} />
    ))}
  </div>
);

export default ProductList;
