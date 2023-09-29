import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [newUserData, setNewUserData] = useState("");

  const userDataHandler = (enteredData) => {
    const users = [];
    const userData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    users.push(userData);
    setNewUserData(users);
  };

  console.log(newUserData);

  return (
    <div>
      <UserForm submitUserData={userDataHandler} />
      <UserList addedUsers={newUserData} />
    </div>
  );
}

export default App;
