import { useState } from "react";

export default function Binding() {
  const [complaint, tease] = useState("Complaint: ");

  return (
    <>
      <h2>{complaint}</h2>
      <input
        onChange={(event) => tease(event.target.value)}
        type="text"
        value={complaint}
      />
    </>
  );
}
