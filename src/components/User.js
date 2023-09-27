import React from "react";

const User = (props) => {
  return (
    <div>
      <p>
        {props.userName}, {props.userAge}
      </p>
    </div>
  );
};

export default User;
