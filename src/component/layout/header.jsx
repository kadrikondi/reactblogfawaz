import React, { useState } from "react";
import Company from "./company";
const Header = () => {
  const [firstname, setFirstName] = useState("John");

  const handleUpdateName = () => {
    console.log("goood");
    setFirstName("ola");
  };

  const handleNameChange = (e) => {
    setFirstName(e.target.value);
  };
  let school = "Javaplus";
  return (
    <div>
      {/* <h1>This is header {firstname}</h1> */}
      <Company companyName={school} firstname={firstname} />

      {school}
      <input
        type="text"
        placeholder="enter your name"
        value={firstname}
        onChange={handleNameChange}
      />
      <button onClick={handleUpdateName}>update</button>
    </div>
  );
};
export default Header;
