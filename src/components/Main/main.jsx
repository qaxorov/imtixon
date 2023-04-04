import React from "react";
import styled from "styled-components";
import { Button, OutlinedInput } from "@mui/material";
import Stack from "@mui/material/Stack";
import SimpleAccordion from "../Accardion/Acarddion";
import Card from "../Card/Card";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Mainn = styled.div`
  padding: 50px 0px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;
const Tittle = styled.h1`
  font-size: 32px;
`;
const Cards = styled.div`
  display: flex;
  width: 900px;
  gap: 20px;
  flex-wrap: wrap;
`;
export default function Main() {
  const [value, setValue] = React.useState();
  const [text, setText] = React.useState("");
  const api = `https://rickandmortyapi.com/api/character/?name=${text}`;

  React.useEffect(() => {
    axios.get(api).then((res) => {
      console.log(res.data.results);
      setValue(res.data.results);
    });
  }, [api]);
  return (
    <Mainn>
      <div className="container">
        <Box>
          <Tittle>Charecters</Tittle>
          <Stack flexDirection={"row"} gap={3}>
            <OutlinedInput
              onChange={(evt) => setText(evt.target.value)}
              sx={{ width: "700px" }}
              placeholder="search for charectrs"
            />
            <Button variant="contained">search</Button>
          </Stack>
          <Stack direction={"row"} spacing={3}>
            <SimpleAccordion state={setValue} />
            <Cards>
              {value?.map((e) => (
                <Link to={`element/${e.id}`} key={e.id}>
                  <Card
                    id={e.id}
                    img={e.image}
                    t1={e.name}
                    t2={e.species}
                    t3={e.status}
                  />
                </Link>
              ))}
            </Cards>
          </Stack>
        </Box>
      </div>
    </Mainn>
  );
}
