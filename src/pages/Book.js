import React from "react";
import { useParams } from "react-router-dom";

const Book = () => {
  //useParams is a custom hooks
  //useParams provide us the extra parameter in the url
  const { id } = useParams();
  return <div>Book {id}</div>;
};

export default Book;
