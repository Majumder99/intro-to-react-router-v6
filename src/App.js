import { Link, Route, Routes, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import BookRoutes from "./BookRoutes";
import Book from "./pages/Book";

function App() {
  // Routes using hooks
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/books/*",
      element: <BookRoutes />,
    },
  ]);

  return (
    <>
      {/* Multiple routes */}
      {/* <Routes>
        <Route path="/books" element={<h1>Extra content</h1>} />
      </Routes> */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      {element}
      {/* Routes using JSX */}
      {/* <Routes>
        {/* path="/" means that it is the main root */}
      {/* element means which page to generate */}
      {/* we generating all the routes here. so that we can use them in different component */}
      {/* <Route path="/" element={<Home />} /> */}
      {/* Nesting Route components */}
      {/* <Route path="/books/*" element={<BookRoutes />} /> */}
      {/* index means it will use the parent route which is /books */}
      {/* <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route> */}
      {/* These route are not nestied */}
      {/* <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} /> */}
      {/* * used for identifying any vogus params in the url  */}
      {/* <Route path="*" element={<NotFound />} /> */}
      {/* </Routes> */}
    </>
  );
}

export default App;
