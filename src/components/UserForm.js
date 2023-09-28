import React, { useState } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // object to store data from form
    const userData = {
      userName: enteredName,
      userAge: enteredAge,
    };

    //the object with stored data from form (savingsFormData) is a function parameter, so we can pass it up to the parrent component by calling onSavesavingsFormData fnc in parent component
    props.submitUserData(userData);

    // clear inputs using two-way binding by adding the value property to input and set it to empty string
    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <Card>
      <form className={styles["user-form"]} onSubmit={submitHandler}>
        <label>User name</label>
        <input type="text" value={enteredName} onChange={nameHandler} />
        <label>Age (years)</label>
        <input type="number" value={enteredAge} onChange={ageHandler} />
        <div className={styles["user-form__div"]}>
          <Button type="submit" className={styles["user-form__btn"]}>
            Add User
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;
