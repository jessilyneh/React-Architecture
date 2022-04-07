import React from "react"
import styled from "styled-components"
import {Routes, Route, Link} from "react-router-dom"
import {About} from "./pages/About"
import {Home} from "./pages/Home"
import {Posts} from "./pages/Posts"

const BigGreenHeading = styled.h1`
  color: green;
  font-size: 96px;
`

function App() {
  return (
    <>
    <BigGreenHeading>Hello from the future</BigGreenHeading>
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
    </>
  );
}

export default App;
