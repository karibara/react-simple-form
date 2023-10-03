import React, { useState } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";

import style from "./InvalidInputAlert.module.css";

const InvalidInputAlert = (props) => {
  
  const hideAlertHandler = () => {
    
  }
// https://codesandbox.io/s/react-usestate-open-and-close-buttons-ryl84?file=/src/styles.css


  return (
    <Card className={style["alert-card"]}>
      <div className={style["alert-title"]}>
        <h3>Invalid input</h3>
      </div>
      <div className={style["alert-text"]}>
        <h4>{props.message}</h4>
      <div className={style["alert-div__btn"]}>
        <Button onClick={hideAlertHandler}>Okay</Button>
      </div>
      </div>
    </Card>
  );
};

export default InvalidInputAlert;

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
