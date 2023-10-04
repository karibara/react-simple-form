import React, { useState } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";

import style from "./InvalidInputAlert.module.css";

const InvalidInputAlert = (props) => {
  const [alertOff, setAlertOff] = useState(false);
  const hideAlertHandler = () => {
    setAlertOff(!alertOff);
  };

  console.log(alertOff);

  return (
    <Card
      className={
        !alertOff ? `${style["alert-card"]}` : `${!alertOff && style.hide}`
      }
    >
      <div
        className={
          !alertOff ? `${style["alert-title"]}` : `${!alertOff && style.hide}`
        }
      >
        <h3 className={`${alertOff && style.hide}`}>Invalid input</h3>
      </div>
      <div className={style["alert-text"]}>
        <h4 className={`${alertOff && style.hide}`}>{props.message}</h4>
        <div
          className={
            !alertOff
              ? `${style["alert-div__btn"]}`
              : `${!alertOff && style.hide}`
          }
        >
          <Button
            onClick={hideAlertHandler}
            className={`${alertOff && style.hide}`}
          >
            Okay
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default InvalidInputAlert;

//

// let alert;

// // set state - alert is on and it is visible
// const [alertOn, setAlertOn] = useState(true);

// // handler, that switch alert of by clicking "okay" button
// const hideAlertHandler = () => {
//   setAlertOn(false);
// };

// // contidional which shows alert or switch it off
// if (alertOn) {
//   alert = (
//     <Card>
//       <h3>Invalid input</h3>
//       {props.alertMessage}
//       <Button onClick={hideAlertHandler}>Okay</Button>
//     </Card>
//   );
// }

// return { alert };
