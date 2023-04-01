import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [term, setTerm] = useState(false);
  function getformData(e) {
    alert(name);
    alert(interest);
    e.preventDefault();
  }
  return (
    <div>
      <h1>Handle Form In React</h1>
      <form onSubmit={getformData}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <select onChange={(e) => setInterest(e.target.value)}>
          <option>Select Options</option>
          <option>Chandigarh</option>
          <option>Mohali</option>
          <option>Zirakpur</option>
        </select>{" "}
        <br />
        <input
          type="checkbox"
          name=""
          id=""
          onChange={(e) => setTerm(e.target.checked)}
        />
        <span>Accept Term And Condition</span>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
