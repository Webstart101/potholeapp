import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthProvider } from './auth/Auth'
import PrivateRoute from './PrivateRoute'

import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Landing from './components/Landing'
import Profile from './components/Profile'

function App() {
  return (
    <AuthProvider>
      <Router>
          <PrivateRoute exact path='/home' component={Home} />
          <PrivateRoute exact path='/profile' component={Profile}/>
          
          <Route exact path='/' component={Landing} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register}/>
      </Router>
    </AuthProvider>
  );
}

export default App;
