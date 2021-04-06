import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
const NavDiv = styled("div")`
  display: flex;
  margin-top: 30px;
`;
const LinkDiv = styled("div")`
  padding: 10px;
  text-decoration: none;
  color: white;
`;
export const Navbar = () => {
  return (
    <NavDiv>
      <LinkDiv>
        <Link className="nav-link" to="/">
          404
        </Link>
      </LinkDiv>
      <LinkDiv>
        <Link className="nav-link" to="/profile">
          Profile
        </Link>
      </LinkDiv>
      <LinkDiv>
        <Link className="nav-link" to="/About">
          About
        </Link>
      </LinkDiv>
    </NavDiv>
  );
};
