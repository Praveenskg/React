import React, { useState } from "react";

function Validation() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  function handleLogin(e) {
    if (user.length < 3 || password.length < 5) {
      alert("type Correct value");
    } else {
      alert("all good");
    }
    e.preventDefault();
  }
  function userHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(item);
  }
  function passwordHandler(e) {
    let item = e.target.value;
    if (item.length <= 5) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPassword(item);
  }
  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={userHandler}
        />
        {userErr ? <span>User Not Valid</span> : null}
        <br /> <br />
        <input
          type="password"
          placeholder="Password"
          onChange={passwordHandler}
        />
        {passErr ? <span>Password Not Valid</span> : null}
        <br />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Validation;
