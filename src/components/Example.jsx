import React from "react";
import { useSelector } from "react-redux";

function Example() {
  const value = useSelector((state) => state.counter.value);
  const array = useSelector((state) => state.counter.array);

  return (
    <div>
      <h3>example.jsx:</h3>
      <span> value: {value}</span>
      <br />
      <span> array: {array[0]}</span>
    </div>
  );
}

export default Example;
