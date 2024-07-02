import React from "react";

export default function Company({ companyName, firstname }) {
  return (
    <div>
      <h2 className="text-3xl font-bold underline">
        Welcome {companyName} | {firstname}
      </h2>
    </div>
  );
}
