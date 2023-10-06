import style from "./NewUser.module.css";

const NewUser = (props) => {
  return (
    <div className={style["user-frame"]}>
      <ul>
        <li>
          {props.name} ({props.age} years old)
        </li>
      </ul>
    </div>
  );
};

export default NewUser;
