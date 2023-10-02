import React, { useState } from "react";
import Card from "./UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  let usersNumber = props.addedUsers.length;
  // console.log(usersNumber);

  let message = "no users on the list";

  if (usersNumber > 0) {
    message = "list is working!!!!";
  }

  return (
    <Card>
      <div className={styles["user-frame"]}>
        <p>{message}</p>
      </div>
    </Card>
  );
};

export default UserList;
