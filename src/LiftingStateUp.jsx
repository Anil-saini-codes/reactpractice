import { useState } from "react";

function LiftingStateUp() {
  const [name, setName] = useState("");

  return (
    <>
      <ChildA setName={setName} />
      <ChildB name={name} />
    </>
  );
}

function ChildA({ setName }) {
  return (
    <input
      type="text"
      placeholder="Enter name"
      onChange={(e) => setName(e.target.value)}
    />
  );
}

function ChildB({ name }) {
  return <p>Name: {name}</p>;
}

export default LiftingStateUp;
