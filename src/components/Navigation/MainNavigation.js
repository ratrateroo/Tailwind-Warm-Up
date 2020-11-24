import React from 'react';

import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <header className="">
      <div class="container mx-auto bg-gray-900 bg-opacity-100  lg:w-auto">
      <nav className="flex flex-row-reverse space-x-10 space-x-reverse items-center">
        <div>
          
        <NavLink to="/events" className="bg-black-700 text-white">
          Logo
        </NavLink>
        </div>
        <div>

        <NavLink to="/events" className="bg-black-700 text-white">
          Events
        </NavLink>
        <NavLink to="/bookings" className="bg-black-700 text-white">
          Bookings
        </NavLink>
        <div className="md:bg-black-700 text-white">
          TEXT
        </div>
        </div>
        <div>

        <NavLink to="/signup" className="bg-black-700 text-white">
          Sign Up
        </NavLink>
        <NavLink to="/login" className="bg-black-700 text-white">
          Log In
        </NavLink>
        </div>
      </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
