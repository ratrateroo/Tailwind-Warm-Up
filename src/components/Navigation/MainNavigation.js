import React from 'react';

const MainNavigation = () => {
  return (
    <header>
      <div>
        <h1>LOGO</h1>
      </div>
      <nav class="hidden md:flex space-x-10">
        <a
          href="#"
          class="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Events
        </a>
        <a
          href="#"
          class="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Bookings
        </a>
        <a
          href="#"
          class="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Sign Up
        </a>
        <a
          href="#"
          class="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Log In
        </a>
      </nav>
    </header>
  );
};

export default MainNavigation;
