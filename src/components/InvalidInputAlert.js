import React, { useState } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";

import style from "./InvalidInputAlert.module.css";

// lekcja 89 i 3/4
// https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/quiz/5775802#overview

const InvalidInputAlert = (props) => {
  const [alertOff, setAlertOff] = useState(false);

  const hideAlertHandler = () => {
    setAlertOff(true);
  };


  return (
    <Card
      className={
        !alertOff ? `${style["alert-card"]}` : `${style["hide"]}`
      }
    >
      <div
        className={style["alert-title"]}
      >
        <h3>Invalid input</h3>
      </div>
      <div className={style["alert-text"]}>
        <h4>{props.message}</h4>
        <div
          className={style["alert-div__btn"]}
        >
          <Button
            onClick={hideAlertHandler}
    
          >
            Okay
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default InvalidInputAlert;


