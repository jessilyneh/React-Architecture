import React from "react"
import {BrowserRouter,Switch, Route, Link} from "react-router-dom"
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
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/Posts">
            <Posts/>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
