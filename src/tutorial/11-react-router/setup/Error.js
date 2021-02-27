import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <h1>😮</h1>
      <h4>Error...</h4>
      <Link to="/" className="btn">
        Go back to Home
      </Link>
    </div>
  );
};

export default Error;
