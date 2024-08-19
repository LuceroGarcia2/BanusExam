import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  text-align: center;
  padding: 0.5rem 0;
  background-color: #f5a623; /* Un tono anaranjado que combina bien con amarillo */
  color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  margin: 0;
  font-size: 0.0rem;
`;

const Header = () => (
  <TitleContainer>
    <Title>Inventario Banus Refresquería</Title>
  </TitleContainer>
);

export default Header;

