import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import InvalidInputAlert from "./components/InvalidInputAlert";
import "./index.css";

function App() {
  // use useState to create an array of users
  const [users, setUsers] = useState([]);
  const [ageAlert, setAgeAlert] = useState(false);
  const [dataAlert, setDataAlert] = useState(false);
  const invalidData = "Please, enter a valid name and age (non-empty values)";
  const invalidAge = "Please, enter a valid age ( > 0)";

  const userDataHandler = (newUser) => {
    // newUser is an object with entered data from form + added id
    const userData = {
      ...newUser,
      id: Math.random().toString(),
    };

    // validation for user name length and user age
    if (userData.userName.trim().length < 2) {
      setDataAlert(true);
    } else if (userData.userAge < 1 || userData.userAge > 105) {
      setAgeAlert(true);
    } else {
      // with useState new users are pushed to an array, and it is automaticly updated
      setUsers((prevUsers) => {
        return [newUser, ...prevUsers];
      });
    }
  };

  // just check if passing data from form works
  // console.log(newUserData);

  const hideHandler = () => {
    setAgeAlert(false);
    setDataAlert(false);
  };

  return (
    <div>
      <UserForm submitUserData={userDataHandler} />
      {ageAlert && (
        <InvalidInputAlert message={invalidAge} onBtnClick={hideHandler} />
      )}
      {dataAlert && (
        <InvalidInputAlert message={invalidData} onBtnClick={hideHandler} />
      )}

      {/* array of users is passed to UserListr via props */}
      {/* <UserList addedUsers={users} /> */}
    </div>
  );
}

export default App;
