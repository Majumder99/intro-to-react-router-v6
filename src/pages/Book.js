import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

const Book = () => {
  //useParams is a custom hooks
  //useParams provide us the extra parameter in the url
  const { id } = useParams();
  const obj = useOutletContext();
  return (
    <div>
      Book {id} {obj.hello}
    </div>
  );
};

export default Book;
