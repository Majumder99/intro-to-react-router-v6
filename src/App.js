import { Link, Route, Routes } from "react-router-dom";
import BookList from "./pages/BookList";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/booklist">BookList</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        {/* path="/" means that it is the main root */}
        <Route path="/" element={<Home />} />
        <Route path="/booklist" element={<BookList />} />
      </Routes>
    </>
  );
}

export default App;
