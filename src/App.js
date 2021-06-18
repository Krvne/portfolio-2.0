import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Mynavbar from "./components/Mynavbar";
import About from './components/pages/About'
import Contact from './components/pages/Contact'

function App() {
  return (
    <>
      <Mynavbar />
      <Router>
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
