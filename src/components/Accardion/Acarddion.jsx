import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Button, Stack } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import axios from "axios";

export default function SimpleAccordion({ state }) {
  const [expanded, setExpanded] = React.useState(false);
  const [value, setValue] = React.useState();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  React.useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((res) => {
      if (res.data.results) {
        setValue(res.data.results);
      }
    });
  }, []);
  const filterr = (name) => {
    console.log(name);
    let arr = [];
    value?.filter((e) => {
      if (e.status == name) {
        arr.push(e);
        state(arr);
      }
    });
  };
  const filter2 = (name) => {
    let arr = [];
    value?.filter((e) => {
      if (e.species == name) {
        arr.push(e);
        state(arr);
      }
    });
  };
  const filter3 = (name) => {
    let arr = [];
    value?.filter((e) => {
      if (e.gender == name) {
        arr.push(e);
        state(arr);
      }
    });
  };
  return (
    <div>
      <Accordion
        sx={{ width: "300px" }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          expandIcon={<IoIosArrowDown />}
        >
          <Typography>Status</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1} alignItems={"flex-start"} direction={"row"}>
            <Button onClick={() => filterr("Alive")} variant="outlined">
              Alive
            </Button>
            <Button onClick={() => filterr("Dead")} variant="outlined">
              Dead
            </Button>
            <Button onClick={() => filterr("unkown")} variant="outlined">
              Unkown
            </Button>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ width: "300px" }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          expandIcon={<IoIosArrowDown />}
        >
          <Typography>Special</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1} alignItems={"flex-start"} direction={"row"}>
            <Button onClick={() => filter2("Human")} variant="outlined">
              Human
            </Button>
            <Button onClick={() => filter2("Alien")} variant="outlined">
              Alien
            </Button>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ width: "300px" }}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          expandIcon={<IoIosArrowDown />}
        >
          <Typography>Gender</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack
            spacing={1}
            alignItems={"flex-start"}
            flexWrap={"wrap"}
            direction={"row"}
          >
            <Button onClick={() => filter3("Female")} variant="outlined">
              Femele
            </Button>
            <Button onClick={() => filter3("Male")} variant="outlined">
              male
            </Button>
            <Button onClick={() => filter3("male")} variant="outlined">
              genderless
            </Button>
            <Button onClick={() => filter3("unknown")} variant="outlined">
              unkown
            </Button>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
