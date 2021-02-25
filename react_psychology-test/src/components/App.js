import React from "react";
import {BrowserRouter as Router, Switch, Route, BrowserRouter,} from 'react-router-dom';
import Home from "./Home";
import Completed from "./Completed";
import Result from "./Result";

function App() { 
 

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/Completed"} component={Completed} />
          <Route exact path={"/Result"} component={Result} />
        </Switch> 
      </div>
    </BrowserRouter>
  );
}

export default App;
