import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: rgba(0, 0, 0, 1);
  color: white;
  display: flex;
  justify-content: space-around;
  padding: 1rem;
`;

const Logo = styled.div`
  color: #e74c3c;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
`;

const NavItem = styled.li`
  padding: 0.5rem;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  transition: font-size 0.2s ease-in-out;

  &:hover {
    color: yellow;
    font-size: 1.1rem;
  }
`;

function Navbar() {
  const [login, setLogin] = useState(true);

  return (
    <Nav>
      <Logo>UMC Movie</Logo>
      <NavList>
        {login ? (
          <Link to={'/'} onClick={() => setLogin(() => false)}>
            <NavItem>로그인</NavItem>
          </Link>
        ) : (
          <Link to={'/'} onClick={() => setLogin(() => true)}>
            <NavItem>로그아웃</NavItem>
          </Link>
        )}

        <Link to={'/popular'}>
          <NavItem>Popular</NavItem>
        </Link>
        <Link to={'/now_playing'}>
          <NavItem>Now Playing</NavItem>
        </Link>
        <Link to={'/top_rated'}>
          <NavItem>Top Rated</NavItem>
        </Link>
        <Link to={'/upcoming'}>
          <NavItem>Upcoming</NavItem>
        </Link>
      </NavList>
    </Nav>
  );
}

export default Navbar;
