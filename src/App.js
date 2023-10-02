import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  // use useState to create an array of users
  const [users, setUsers] = useState([]);

  const userDataHandler = (newUser) => {
    // newUser is an object with entered data from form + added id
    const userData = {
      ...newUser,
      id: Math.random().toString(),
    };

    // with useState new users are pushed to an array, and it is automaticly updated
    setUsers((prevUsers) => {
      return [newUser, ...prevUsers];
    });
  };

  // just check if passing data from form works
  // console.log(newUserData);

  return (
    <div>
      <UserForm submitUserData={userDataHandler} />
      {/* array of users is passed to UserListr via props */}
      <UserList addedUsers={users} />
    </div>
  );
}

export default App;
