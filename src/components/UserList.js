import React, { useState } from "react";
import Card from "./UI/Card";
import User from "./User";

const UserList = (props) => {
  // let alertMessage = (
  //   <p>Please enter a valid name and age (non-empty values)</p>
  // );

  // const [isInvalid, setIsInvalid] = useState(false);
  const dupaUser = props.user;

  return (
    <Card>
      <User newUser={dupaUser} />
    </Card>
  );
};

export default UserList;
