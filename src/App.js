import React from "react"
import {BrowserRouter,Routes, Route, Link} from "react-router-dom"
import {About} from "./pages/About"
import {Home} from "./pages/Home"
import {Posts} from "./pages/Posts"

function App() {
  return (
    <BrowserRouter>
        <h1>Hello from the future</h1>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
          <Link to="/about"> About</Link>
          </li>
          <li>
          <Link to="/posts">Posts</Link>
          </li>
        </ul>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
