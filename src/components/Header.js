import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';

export const Header = () => {
  return <MainHeader>
    <NavLink to='/'>
      <img src="https://i.pinimg.com/550x/8a/14/63/8a1463997166d75f8417f311feef77a1.jpg" alt="my logo img" width='100px' height='100px' />
    </NavLink>
    <Nav />
  </MainHeader>
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 5rem;
  }
`;