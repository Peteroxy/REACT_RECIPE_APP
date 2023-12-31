import React from "react";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import { Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>Delicious</Logo>
      </Nav>

      <Search />
      <Category />
      <Pages />
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    font-size: 2rem;
  }
`;

export default App;
