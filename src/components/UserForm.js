import React from "react";
import Card from "./UI/Card";
import styles from "./UserForm.module.css";

const UserForm = () => {
  return (
    <Card>
      <form className={styles["user-form"]}>
        <label>User name</label>
        <input type="text" />
        <label>Age (years)</label>
        <input type="number" />
      </form>
    </Card>
  );
};

export default UserForm;
