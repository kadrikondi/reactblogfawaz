import React from "react";
import Fbheader from "../layout/Fbheader";
import SideList from "./sideList";
import Blogpost from "./blogpost";
export default function main() {
  return (
    <div>
      {/* <Fbheader /> */}

      <div className="grid gap-4 sm:grid-cols-12">
        <div className="sm:col-span-3   shadow ">
          {" "}
          <div className="row-auto">
            <SideList />
          </div>
        </div>

        <div className="sm:col-span-6 shadow">
          <Blogpost />
        </div>

        <div className="sm:col-span-3 p-5 shadow">3</div>
      </div>
    </div>
  );
}
