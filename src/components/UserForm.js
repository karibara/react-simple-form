import React from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";
import styles from "./UserForm.module.css";

const UserForm = () => {
  return (
    <Card>
      <form className={styles["user-form"]}>
        <label>User name</label>
        <input type="text" />
        <label>Age (years)</label>
        <input type="number" />
        <div className={styles["user-form__div"]}>
        <Button type="submit" className={styles["user-form__btn"]} >Add User</Button>
        </div>

      </form>
    </Card>
  );
};

export default UserForm;
