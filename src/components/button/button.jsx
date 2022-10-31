import classes from "./button.module.css";

export default function Button(props) {
  return (
    <button onClick={() => props.event(props.id)} className={classes.myBtn}>
      {props.children}
    </button>
  );
}
