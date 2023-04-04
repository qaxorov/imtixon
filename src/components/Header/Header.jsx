import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Headerr = styled.header`
  background-color: #00000018;
`;
const Box = styled.div`
  padding: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.h1``;

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export default function Header() {
  return (
    <Headerr>
      <div className="container">
        <Box>
          <Logo>Rick&Morty</Logo>
          <List>
            <Link to={"/"}>
              <li>Characters</li>
            </Link>
            <Link to={"/episode"}>
              <li>Episode</li>
            </Link>
            <Link to={"/location"}>
              <li>Location</li>
            </Link>
          </List>
        </Box>
      </div>
    </Headerr>
  );
}
