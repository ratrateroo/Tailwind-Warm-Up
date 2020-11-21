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
        <main></main>
      </React.Fragment>
    </Router>
  );
};

export default App;
