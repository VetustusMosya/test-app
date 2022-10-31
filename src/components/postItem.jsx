import Button from "./button/button";

export default function PostItem({ prop, event }) {
  return (
    <li style={{ listStyleType: "none" }}>
      {prop.text}
      <Button id={prop.id} event={event}>
        Delete
      </Button>
    </li>
  );
}
