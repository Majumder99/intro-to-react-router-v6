import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// We can use navigate for directly redirecting another page

const NotFound = () => {
  // return <div>NotFound</div>;
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }, []);
  return (
    // <>
    //   <Navigate to="/" />
    // </>
    <>
      <h1>Not found</h1>
    </>
  );
};

export default NotFound;
