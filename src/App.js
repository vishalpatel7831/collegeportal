import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import './App.css';
import Navbar from "../src/component/Navbar";
import Context from "./global/Context";
import Model from "../src/component/Modle";
import Create from "../src/component/Create";
import Posts from "../src/component/Posts";
import Profile from "../src/component/Profile";
import Job from "../src/component/Job";
function App() {
  return (
    // routes is here
    <Router>
      <Switch>
      <Route path="/job" component={Job} />  
      <Route path="/profile" component={Profile} />  
       
    <Context>
          
      <Navbar/>
      <div className="container">
        <Create/>
        <Posts/>
      </div>
     
    </Context>
    </Switch>
    </Router>
  );
}

export default App;


// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/8.1.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/8.1.1/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>