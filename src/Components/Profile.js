import React, { useState } from "react";

const Profile = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [login, setLogin] = useState(1); // 1 2 3
  return (
    <div>
      <h2>Profile Components</h2>
      {loggedIn ? <h3>Welcome User</h3> : <h3>Welcome Guest</h3>}
      {login == 1 ? (
        <h3>Welcome User 1</h3>
      ) : login == 2 ? (
        <h3>Welcome Guest</h3>
      ) : (
        <h3>Welcome User 3</h3>
      )}
    </div>
  );
};

export default Profile;
