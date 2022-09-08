import { Link, Route, Routes } from "react-router-dom";
import BookList from "./pages/BookList";
import Home from "./pages/Home";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import BookLayout from "./BookLayout";

function App() {
  return (
    <>
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
      <Routes>
        {/* path="/" means that it is the main root */}
        {/* element means which page to generate */}
        {/* we generating all the routes here. so that we can use them in different component */}
        <Route path="/" element={<Home />} />
        {/* Nesting Route components */}
        <Route path="/books" element={<BookLayout />}>
          {/* index means it will use the parent route which is /books */}
          <Route index element={<BookList />} />
          <Route path="/books/:id" element={<Book />} />
          <Route path="/books/new" element={<NewBook />} />
        </Route>
        {/* <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} /> */}
        {/* * used for identifying any vogus params in the url  */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
