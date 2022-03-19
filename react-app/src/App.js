import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Login from './components/pages/Login';
import CreateIntinerary from './components/pages/CreateItinerary';
import SearchActivities from './components/pages/SearchActivities';
import ViewSavedItinerary from './components/pages/ViewSavedItinerary';
import ActivitiesNearMe from './components/pages/ActivitiesNearMe';
import FeaturedItineraries from './components/pages/FeaturedItineraries';
import PopularActivities from './components/pages/PopularActivities';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/login' component={Login} />
          <Route path='/createItinerary' component={CreateIntinerary} />
          <Route path='/searchActivities' component={SearchActivities} />
          <Route path='/viewSavedItinerary' component={ViewSavedItinerary} />
          <Route path='/activitiesNearMe' component={ActivitiesNearMe} />
          <Route path='/featuredItineraries' component={FeaturedItineraries} />
          <Route path='/popularActivities' component={PopularActivities} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
