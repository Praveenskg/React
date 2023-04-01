import React, { useState } from "react";

const Input = () => {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  const [status, setStatus] = useState(false);
  function getdata(e) {
    setData(e.target.value);
    setPrint(false);
  }
  return (
    <div>
      <h1>Get Input Box Value</h1>
      {print ? <h2>{data}</h2> : null}
      {status ? <h2>{data}</h2> : null}
      <input type="text" onChange={getdata} />
      {/* <button onClick={() => setPrint(true)}> Click Me</button>
      <button onClick={() => setStatus(true)}> Show</button>
      <button onClick={() => setStatus(false)}>Hide</button> */}
      <button onClick={() => setStatus(!status)}>HIde/Show </button>
    </div>
  );
};

export default Input;
