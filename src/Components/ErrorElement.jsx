import React from "react";
import { Link } from "react-router-dom";

const ErrorElement = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <p>Opps!</p>
      <p>Something went wrong</p>
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
};

export default ErrorElement;
