import React from "react";

const User = (props) => {
  return (
    <div>
      <p>
        {props.userName}, ({props.userAge} years old)
      </p>
    </div>
  );
};

export default User;
