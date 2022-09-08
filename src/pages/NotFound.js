import React from "react";
import { Navigate } from "react-router-dom";

// We can use navigate for directly redirecting another page

const NotFound = () => {
  // return <div>NotFound</div>;
  return (
    <>
      <Navigate to="/" />
    </>
  );
};

export default NotFound;
