import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Card from "../../components/Card/Card";
import axios from "axios";
import { Button } from "@mui/material";
const Box = styled.div``;
const Content = styled.div`
  width: 100%;
  padding: 40px 0px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 450px;
`;
export default function ELement() {
  const { id } = useParams();
  const api = `https://rickandmortyapi.com/api/character/${id}`;
  const [res, setRes] = React.useState();
  React.useEffect(() => {
    axios.get(api).then((r) => {
      let arr = [];
      arr.push(r.data);
      setRes(arr);
    });
  }, []);

  console.log(res);
  return (
    <Box>
      <div className="container">
        {res?.map((i) => (
          <>
            <Content>
              <Link to={"/"}>
                <Button variant="contained">back</Button>
              </Link>
              <Card
                key={i.id}
                img={i.image}
                t1={i.name}
                t2={i.origin.name}
                t3={i.status}
              />
            </Content>
          </>
        ))}
      </div>
    </Box>
  );
}
