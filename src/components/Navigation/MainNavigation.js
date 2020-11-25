import React from 'react';

import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <header className="p-0">
      <div class="flex items-center h-20 w-screen sm:bg-red-900 md:bg-green-900 lg:bg-blue-900 ">
      <nav className="h-10  w-full flex space-x-10 sm:bg-red-500 md:bg-green-500 lg:bg-blue-500">
        <div>
          
        <NavLink to="/events" className="bg-gray-700 text-white">
          Logo
        </NavLink>
        </div>
        <div>

        <NavLink to="/events" className="bg-gray-700 text-white">
          Events
        </NavLink>
        <NavLink to="/bookings" className="bg-gray-700 text-white">
          Bookings
        </NavLink>
        
        </div>
        <div>

        <NavLink to="/signup" className="bg-gray-700 text-white">
          Sign Up
        </NavLink>
        <NavLink to="/login" className="bg-gray-700 text-white">
          Log In
        </NavLink>
        </div>
      </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
