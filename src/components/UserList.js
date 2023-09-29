import React, { useState } from "react";
import Card from "./UI/Card";

const UserList = (props) => {
  console.log(props.user);

  return (
    <Card>
      <p>
        {props.user.userName}
        {props.user.userAge}
      </p>
    </Card>
  );
};

export default UserList;
