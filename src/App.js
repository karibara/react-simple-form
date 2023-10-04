import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import InvalidInputAlert from "./components/InvalidInputAlert";
import "./index.css";

function App() {
  // use useState to create an array of users
  const [users, setUsers] = useState([]);
  const [alert, setAlert] = useState();
  const invalidData = "Please, enter a valid name and age (non-empty values)";
  const invalidAge = "Please, enter a valid age ( > 0)";

  const userDataHandler = (newUser) => {
    // newUser is an object with entered data from form + added id
    const userData = {
      ...newUser,
      id: Math.random().toString(),
    };

    // validation for user name length and user age
    if (userData.userAge < 1 || userData.userAge > 105) {
      setAlert(<InvalidInputAlert message={invalidAge} />);
    } else if (userData.userName.trim().length < 2) {
      setAlert(<InvalidInputAlert message={invalidData} />);
    } else {
      // with useState new users are pushed to an array, and it is automaticly updated
      setUsers((prevUsers) => {
        return [newUser, ...prevUsers];
      });
    }
  };

  // just check if passing data from form works
  // console.log(newUserData);

  return (
    <div>
      <UserForm submitUserData={userDataHandler} />
      {/* array of users is passed to UserListr via props */}
      {alert}
      {/* <UserList addedUsers={users} /> */}
    </div>
  );
}

export default App;
