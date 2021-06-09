import React, { useState } from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function App() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [hobby, setHobby] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  const handleChangeSalary = (e) => {
    setSalary(e.target.value);
  };

  const handleChangeHobby = (e) => {
    setHobby(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, age, salary, hobby });
  };

  return (
    <div className={classes.root}>
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
            label="Salary"
            type="number"
            name="salary"
            value={salary}
            onChange={handleChangeSalary}
          />
          <TextField
            id="standard-basic"
            label="Hobby"
            type="text"
            name="hobby"
            value={hobby}
            onChange={handleChangeHobby}
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
