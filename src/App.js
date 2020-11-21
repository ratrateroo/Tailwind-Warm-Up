import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import './styles/main.css';

import MainNavigation from './components/MainNavigation';
import LoginPage from './pages/LogIn';
import SignUpPage from './pages/SignUp';
import EventsPage from './pages/Events';
import BookingsPage from './pages/Bookings';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/login" component={LoginPage} exact />
            <Route path="/signup" component={SignUp} exact />
            <Route path="/events" component={EventsPage} exact />
            <Route path="/bookings" component={BookingsPage} exact />
            <Redirect path="/" to="/events" exact />
          </Switch>
        </main>
      </React.Fragment>
    </Router>
  );
};

export default App;
