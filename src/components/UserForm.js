import React, { useRef } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    // object to store data from form
    const userData = {
      userName: enteredName,
      userAge: enteredAge,
    };

    //the object with stored data from form (savingsFormData) is a function parameter, so we can pass it up to the parrent component by calling onSavesavingsFormData fnc in parent component
    props.submitUserData(userData);
    // clean input with REFs (it is kind a DOM manipulation, and it is not a good practise)
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";

    // clear inputs using two-way binding by adding the value property to input and set it to empty string
    // setEnteredName("");
    // setEnteredAge("");
  };

  return (
    <Card className={styles["user-form__card"]}>
      <form className={styles["user-form"]} onSubmit={submitHandler}>
        <label>User name</label>
        <input type="text" ref={nameInputRef} />
        <label>Age (years)</label>
        <input type="number" ref={ageInputRef} />
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
