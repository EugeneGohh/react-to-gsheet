import React, { useState } from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Container, Typography } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "38ch",
    },
    "@global": {
      html: {
        [theme.breakpoints.up("sm")]: {
          fontSize: 25,
        },
      },
    },
  },
}));

function App() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [interests, setInterests] = useState("");
  const [languages, setLanguages] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  const handleChangeInterests = (e) => {
    setInterests(e.target.value);
  };

  const handleChangeLanguages = (e) => {
    setLanguages(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, age, interests, languages });

    axios
      .post(
        "https://sheet.best/api/sheets/c81a4894-b81a-421a-af03-4fa03f079ba9",
        { name, age, interests, languages }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom style={{ wordWrap: "break-word" }}>
        Transfer Data <br /> From React to <br /> Google Sheets
      </Typography>

      <Container className="container">
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            id="standard-basic"
            label="Name"
            type="text"
            name="name"
            value={name}
            onChange={handleChangeName}
          />
          <TextField
            id="standard-basic"
            label="Age"
            type="number"
            name="age"
            value={age}
            onChange={handleChangeAge}
          />
          <TextField
            id="standard-basic"
            label="Interests"
            type="string"
            name="interests"
            value={interests}
            onChange={handleChangeInterests}
          />
          <TextField
            id="standard-basic"
            label="Programming Languages"
            type="text"
            name="langauges"
            value={languages}
            onChange={handleChangeLanguages}
          />

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default App;
