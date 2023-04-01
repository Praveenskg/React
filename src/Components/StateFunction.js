import React, { useState } from "react";
const StateFunction = () => {
  const [data, setData] = useState("Praveen");
  function updateData() {
    setData("Singh");
  }
  return (
    <div>
      <h1>State In React</h1>
      <h5>{data}</h5>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
};

export default StateFunction;
