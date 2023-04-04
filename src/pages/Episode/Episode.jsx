import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import styled from "styled-components";
import axios from "axios";
import { Button, OutlinedInput } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const Tittle = styled.h1``;
const Span = styled.span`
  color: blue;
`;
const Box = styled.div``;
const Content = styled.div`
  padding: 40px 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
const Text = styled.p``;
const Form = styled.form`
  width: 230px;
`;
const Select = styled.select`
  width: 100%;
  outline: none;
`;
const Option = styled.option`
  width: 100%;
`;
const Cards = styled.div`
  width: 900px;
  flex-wrap: wrap;
  gap: 20px;
  display: flex;
`;
const Bottom = styled.div`
  display: flex;
  gap: 30px;
`;
export const Episode = () => {
  const [data, setData] = useState([]);
  const [caractersid, setCharactersid] = useState(1);
  const [results, setResults] = useState();
  const [ctg, setCtg] = useState();
  const [text, setText] = useState("");
  const api = `https://rickandmortyapi.com/api/episode/${caractersid}`;
  const api2 = `https://rickandmortyapi.com/api/episode/?name=${text}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setData(data);
      let ctg = await axios.get(api2).then((res) => res);
      setCtg(ctg);
      if (text) {
        setResults(ctg);
      }

      let a = await Promise.all(
        data.characters.map((item) => {
          return fetch(item).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <>
      <Box>
        <div className="container">
          <Content>
            <Tittle>
              Episode name : <Span>{data.name}</Span>
            </Tittle>
            <Text>Air Date: {data.air_date}</Text>
            <Stack flexDirection={"row"} gap={3}>
              <OutlinedInput
                onChange={(e) => setText(e.target.value)}
                sx={{ width: "700px" }}
                placeholder="search for charectrs"
              />
            </Stack>
            <Button variant="contained">search</Button>
            <Bottom>
              <Form>
                <Select onChange={(evt) => setCharactersid(evt.target.value)}>
                  {ctg?.data.results.map((i) => (
                    <Option value={i.id}>{i.id}</Option>
                  ))}
                </Select>
              </Form>
              <Cards>
                {results?.map((el) => (
                  <Link to={`element/${el.id}`}>
                    <Card
                      id={el.id}
                      key={el.id}
                      img={el.image}
                      t1={el.name}
                      t2={el.location.name}
                      t3={el.status}
                    />
                  </Link>
                ))}
              </Cards>
            </Bottom>
          </Content>
        </div>
      </Box>
    </>
  );
};
