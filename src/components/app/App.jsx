import { useState } from "react";
// import Random from "../random";
import CangerAbuse from "../button/button";
// import Binding from "../binding";
import AddForm from "../form";

import styled from "styled-components";
import "./App.module.css";

const Greetings = styled.div`
  padding: 4em 0;
  background: papayawhip;
  text-align: center;
  color: palevioletred;
`;

function App() {
  let [count, setCount] = useState(1);
  const [array, setPost] = useState([
    { id: "qw", text: "first" },
    { id: "er", text: "second" },
    { id: "ty", text: "third" },
  ]);

  const createPost = (newItem) => {
    setPost([...array, newItem]);
  };
  const removePost = (post) => {
    setPost(array.filter((elem) => elem.id !== post));
  };

  // const ChangeAbuse = () => {
  //   setCount(++count);
  // };

  return (
    <Greetings>
      <h1>🤡 {count} 🤡</h1>
      <AddForm content={array} create={createPost} event={removePost} />
      {/* <Random count={count} /> */}
      {/* <CangerAbuse event={ChangeAbuse}>Change my name</CangerAbuse> */}
      {/* <Binding /> */}
    </Greetings>
  );
}

export default App;
