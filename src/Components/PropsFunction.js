import React from "react";

const PropsFunction = (props) => {
  return (
    <div style={{ backgroundColor: "skyblue", margin: 20 }}>
      <h1>Hello {props.name}</h1>
      <h3>Email : {props.email}</h3>
      <h4>Adreess : {props.other.address}</h4>
      <h4>Mobile: {props.other.mobile}</h4>
    </div>
  );
};

export default PropsFunction;
