import React from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const userDataHandler = (enteredData) => {
    const userData = {
      ...enteredData,
    };
    console.log(userData);
  };

  return (
    <div>
      <UserForm onSubmitUserData={userDataHandler} />
      <UserList />
    </div>
  );
}

export default App;
