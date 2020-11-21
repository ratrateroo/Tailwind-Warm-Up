import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import './styles/tailwind.css';

import MainNavigation from './components/Navigation/MainNavigation';
import LoginPage from './pages/LogIn/LogIn';
import SignUpPage from './pages/SignUp/SignUp';
import EventsPage from './pages/Events/Events';
import BookingsPage from './pages/Bookings/Bookings';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/login" component={LoginPage} exact />
            <Route path="/signup" component={SignUpPage} exact />
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
