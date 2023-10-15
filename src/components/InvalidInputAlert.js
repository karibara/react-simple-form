import React  from "react";
import ReactDOM from "react-dom";
import Card from "./UI/Card";
import Button from "./UI/Button";

import style from "./InvalidInputAlert.module.css";

// lekcja 89 i 3/4
// https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/quiz/5775802#overview

const PortalAlert = (props) => {
  return (
    <div className={style["alert-container"]}>
  <Card className={style["alert-card"]}>
    <div className={style["alert-title"]}>
      <h3>Invalid input</h3>
    </div>
    <div className={style["alert-text"]}>
      <h4>{props.message}</h4>
      <div className={style["alert-div__btn"]}>
        <Button onClick={props.onBtnClick}>Okay</Button>
      </div>
    </div>
  </Card>
</div>
    )
}

const InvalidInputAlert = (props) => {
  // const [alertOff, setAlertOff] = useState(false);

  console.log(props.onBtnClick);

  return (
    <>
   {ReactDOM.createPortal(<PortalAlert onBtnClick={props.onBtnClick} message={props.message}/>, document.getElementById("alert-root"))}
    </>
  );
};

export default InvalidInputAlert;
// className={!alertOff ? `${style["alert-card"]}` : `${style["hide"]}`}
