import React from "react";
import Map from "./components/Map";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Error from "./components/Error";
import PrivateRoute from "./components/PrivateRoute";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {AuthProvider} from './context/Auth';

function App() {
  return (
    
 <Router>
   <AuthProvider>
            <Switch>
              <PrivateRoute path="/" exact component={Map} />
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/about" exact component={About} />
              <Route path="/error" exact component={Error} />
              <Redirect path="*" to='/error' />
            </Switch>
            </AuthProvider>
          </Router>
  
  );
}

export default App;
