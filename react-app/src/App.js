import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Products from './components/pages/Products';
import Login from './components/pages/Login';
import CreateIntinerary from './components/pages/CreateItinerary';
import SearchActivities from './components/pages/SearchActivities';
import ViewSavedItineraries from './components/pages/ViewSavedItinerary';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/products' component={Products} />
          <Route path='/login' component={Login} />
          <Route path='/createItinerary' component={CreateIntinerary} />
          <Route path='/searchActivities' component={SearchActivities} />
          <Route path='/viewSavedItineraries' component={ViewSavedItinerary} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
