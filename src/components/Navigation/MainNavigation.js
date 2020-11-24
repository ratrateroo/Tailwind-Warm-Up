import React from 'react';

import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <header className="">
      <div class="">
      <nav className="">
        <NavLink to="/events" className="">
          Events
        </NavLink>
        <NavLink to="/bookings" className="">
          Bookings
        </NavLink>
        <NavLink to="/signup" className="">
          Sign Up
        </NavLink>
        <NavLink to="/login" className="">
          Log In
        </NavLink>
      </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
