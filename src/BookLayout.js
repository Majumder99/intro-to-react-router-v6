import React from "react";
import { Link, Outlet } from "react-router-dom";

const BookLayout = () => {
  return (
    <>
      <Link to="/books/1">Book1</Link>
      <br />
      <Link to="/books/2">Book2</Link>
      <br />
      <Link to="/books/new">Book New</Link>
      {/* Outlet will render the current route */}
      <Outlet />
    </>
  );
};

export default BookLayout;
