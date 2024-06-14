import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #333;
  color: white;
`;

const Navbar = ({ cartCount }) => (
  <NavbarContainer>
    <div>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', marginRight: '1rem' }}>Home</Link>
      <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Productos</Link>
    </div>
    <div>
      Cart ({cartCount})
    </div>
  </NavbarContainer>
);

export default Navbar;
