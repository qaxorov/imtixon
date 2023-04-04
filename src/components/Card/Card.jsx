import { Link } from "@mui/material";
import React from "react";
import styled from "styled-components";
const Box = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid blue;
  border-radius: 20px;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;
const Img = styled.img`
  width: 280px;
`;
export default function Card({ img, t1, t2, t3, id }) {
  return (
      <Box>
        <Img src={img} alt="img" />
        <Texts>
          <h1>{t1}</h1>
          <p>{t2}</p>
          <p>{t3}</p>
        </Texts>
      </Box>
  );
}
