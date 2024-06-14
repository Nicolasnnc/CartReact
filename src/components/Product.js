import React from 'react';
import styled from 'styled-components';

const ProductContainer = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
`;

const Product = ({ product, addToCart }) => (
    <ProductContainer>
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </ProductContainer>
  );
  
  export default Product;