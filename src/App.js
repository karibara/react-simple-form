import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [newUserData, setNewUserData] = useState("");

  const userDataHandler = (enteredData) => {
    const userData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    setNewUserData(userData);
  };

  console.log(newUserData);

  return (
    <div>
      <UserForm submitUserData={userDataHandler} />
      <UserList user={newUserData} />
    </div>
  );
}

export default App;
