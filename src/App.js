import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Footer from "./common/Footer";
import Header from "./common/Header";
import LandingPage from "./landingpage/components/LandingPage";
import Register from "./registerpage/components/Register";
import MyProject from "./myproject/components/MyProject";
import CreateProject from "./createproject/components/CreateProject"
import Login from "./loginpage/components/Login"
import Error from './common/Error';


function App() {
  return (
    <div>
      <Header />
      <Router>
        
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/myproject' component={MyProject} />
          <Route exact path='/createproject' component={CreateProject} />
          <Route exact path="/error" component={Error} />
          <Redirect to="/error" />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
