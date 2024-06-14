import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  background-color: #eee;
  text-align: center;
  padding: 2rem 0;
`;

const Banner = () => (
  <BannerContainer>
    <h1>Bienvenido</h1>
  </BannerContainer>
);

export default Banner;
