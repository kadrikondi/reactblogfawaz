import React, { useState } from "react";

// Define the array of users
const users = [
  {
    firstname: "John",
    lastname: "Doe",
    age: 28,
  },
  {
    firstname: "Jane",
    lastname: "Smith",
    age: 34,
  },
  {
    firstname: "Emily",
    lastname: "Johnson",
    age: 22,
  },
  {
    firstname: "Michael",
    lastname: "Brown",
    age: 45,
  },
  {
    firstname: "Sarah",
    lastname: "Davis",
    age: 30,
  },
];

const UserList = () => {
  // const [users, setUsers] = useState();
  // [
  //   {
  //     firstname: "John",
  //     lastname: "Doe",
  //     age: 28,
  //   },
  //   {
  //     firstname: "Jane",
  //     lastname: "Smith",
  //     age: 34,
  //   },
  //   {
  //     firstname: "Emily",
  //     lastname: "Johnson",
  //     age: 22,
  //   },
  //   {
  //     firstname: "Michael",
  //     lastname: "Brown",
  //     age: 45,
  //   },
  //   {
  //     firstname: "Sarah",
  //     lastname: "Davis",
  //     age: 30,
  //   },
  // ];
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((data) => (
          <li key={data.age}>
            firstname: {data.firstname} lastname: {data.lastname} age:
            {data.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
