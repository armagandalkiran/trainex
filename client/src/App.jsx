import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";




function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Register" component={Register}/>
      </Switch>
    </Router>
  )
}

export default App;