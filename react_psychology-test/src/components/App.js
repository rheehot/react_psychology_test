import React, { useEffect } from "react";
import {BrowserRouter as Router, Switch, Route, BrowserRouter,} from 'react-router-dom';
import Home from "./Home";
import Completed from "./Completed";
import Result from "./Result";
import OtherTest from "./OtherTest";
import { Container } from 'reactstrap';


import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";


function App() { 
  
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/Completed"} component={Completed} />
          <Route exact path={"/Result"} component={Result} />
          <Route exact path={"/OtherTest"} component={OtherTest} />
        </Switch> 
      </Container>
        
    </BrowserRouter>
  );
}

export default App;
