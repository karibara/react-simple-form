import React, { useState } from "react";
import Card from "./UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  console.log(props.addedUsers);

  return (
    <Card>
      <div className={styles["user-frame"]}>
        <p>{/* {props.user.userName} ({props.user.userAge} years old) */}</p>
      </div>
    </Card>
  );
};

export default UserList;
