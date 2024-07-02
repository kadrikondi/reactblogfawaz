import React from "react";
import { Link } from "react-router-dom";

export default function Fbheader() {
  return (
    <div className="py-5 text-5xl bg-black text-white mb-5 border-b-2 text-center border-b-violet-600">
      <span className="border-2 border-b-violet-600 mb-10">
        {" "}
        Facebook Blog{" "}
      </span>
      <div>
        <ul className="flex gap-4  justify-center text-white">
          <li>
            <Link to="/" className="text-white">
              {" "}
              Home{" "}
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className="text-white">
              {" "}
              About{" "}
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white">
              {" "}
              Contat
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
