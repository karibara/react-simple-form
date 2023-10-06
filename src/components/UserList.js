import React, { useState } from "react";
import Card from "./UI/Card";
import NewUser from "./NewUser";
import styles from "./UserList.module.css";

const UserList = (props) => {
  let usersOnList;

  if (props.addedUsers.length > 0) {
    usersOnList = props.addedUsers.map((user) => (
      <NewUser name={user.userName} age={user.userAge} key={user.id} />
    ));
  }

  return <Card className={styles["userlist-card"]}>{usersOnList}</Card>;
};

export default UserList;
