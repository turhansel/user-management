import React, { useState } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import "./AddUser.scss";

const AddUser = (props) => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredAge.trim().length === 0 || enteredUser.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }

    props.onAddUser(enteredUser, enteredAge);
    setEnteredAge("");
    setEnteredUser("");
  };
  const usernameChangeHandler = (e) => {
    setEnteredUser(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUser}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age(Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Create User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
