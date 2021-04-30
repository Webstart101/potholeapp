import React from "react";
import Map from "./components/Map";
import Login from "./components/Login";
import About from "./components/About";
import Signup from "./components/Signup";
import Error from "./components/Error";
import ForgotPswd from "./components/ResetPassword"

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AuthProvider } from "./auth/Auth";
import { LandingPage } from "./components/LandingPage";


function App() { 
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Map} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/about" exact component={About} />
          <Route path="/error" exact component={Error} />
          <Route path="/landing-page" exact component={LandingPage} />
          <Route path="/forgot-password" exact component={ForgotPswd} />
          <Redirect path="*" to='/error' />
        </Switch>
      </Router>
    </AuthProvider>
  );
}
export default App;
