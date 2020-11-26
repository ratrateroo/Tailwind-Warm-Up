import React from 'react';

import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <header className="p-0">
      <div class="flex items-center h-20 w-screen bg-yellow-900 sm:bg-red-900 md:bg-green-900 lg:bg-blue-900 xl:bg-pink-900 2xl:bg-indigo-900">
      <nav className="h-10  w-full flex justify-between bg-yellow-500 sm:bg-red-500 md:bg-green-500 lg:bg-blue-500 xl:bg-pink-500 2xl:bg-indigo-500">
        <div className="w-max  flex justify-center items-center mx-1 bg-gray-500">
          
        <NavLink to="/events" className="mx-5 bg-gray-700">
         LOGO
        </NavLink>
        </div>
        <div className="w-full flex justify-start items-center mx-1 bg-gray-500">

        <NavLink to="/events" className="mx-5 bg-gray-700 text-white">
          Events
        </NavLink>
        <NavLink to="/bookings" className="mx-5 bg-gray-700 text-white">
          Bookings
        </NavLink>
        </div>
        <div className="w-full flex justify-end items-center mx-1 bg-gray-500">

        <NavLink to="/signup" className="mx-5 bg-gray-700 text-white">
          Sign Up
        </NavLink>
        <NavLink to="/login" className="mx-5 bg-gray-700 text-white">
          Log In
        </NavLink>
        </div>
      </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
