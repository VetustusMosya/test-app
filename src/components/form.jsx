import { useRef } from "react";
import PostItem from "./postItem";

export default function AddForm({ content, create, event }) {
  const inpact = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      text: inpact.current.value,
    };
    create(newItem);
    inpact.current.value = "";
  };

  return (
    <form>
      <input ref={inpact} type="text" placeholder="write shit" />
      <input onClick={addNewPost} type="button" value="Put it" />
      <ul>
        {content.map((post) => (
          <PostItem prop={post} key={post.id} event={event} />
        ))}
      </ul>
    </form>
  );
}
