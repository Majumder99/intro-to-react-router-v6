import React, { useState } from "react";
import { Link, NavLink, Outlet, useSearchParams } from "react-router-dom";

const BookLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
  console.log(searchParams.get("n"));
  const number = searchParams.get("n");
  // const [number, setNumber] = useState(3);
  return (
    <>
      {/* Link has three attributes
          1.Replace = it will replace the previous page(mainly used in login/logout)
          2.reloadDocument = it will reload the whole doucment
          3.state = using this we can send data to another route */}

      {/* <Link to="/books/1">Book1</Link>
      <br />
      <Link to="/books/2">Book2</Link>
      <br />
          <Link to="/books/new">Book New</Link> */}

      {/* NavLink provide us three properties
          1.style = it will style the link using isActive
          2.class = 
          3.children */}

      <NavLink
        style={({ isActive }) => {
          return isActive ? { color: "red" } : null;
        }}
        to="/books/1"
      >
        Book1
      </NavLink>
      <br />
      <NavLink to="/books/2">Book2</NavLink>
      <br />
      <NavLink to={`/books/${number}`}>Book{number}</NavLink>
      <br />
      <NavLink to="/books/new">Book New</NavLink>
      {/* Outlet will render the current route */}
      <Outlet context={{ hello: "I am sourav" }} />
      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({ n: e.target.value })}
      />
    </>
  );
};

export default BookLayout;
