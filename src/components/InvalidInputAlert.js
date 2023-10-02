import React, { useState } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";

const InvalidInputAlert = (props) => {
  let alert;

  // set state - alert is on and it is visible
  const [alertOn, setAlertOn] = useState(true);

  // handler, that switch alert of by clicking "okay" button
  const hideAlertHandler = () => {
    setAlertOn(false);
  };

  // contidional which shows alert or switch it off
  if (alertOn) {
    alert = (
      <Card>
        <h3>Invalid input</h3>
        {props.alertMessage}
        <Button onClick={hideAlertHandler}>Okay</Button>
      </Card>
    );
  }

  return { alert };
};

export default InvalidInputAlert;
