import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const MainNavigation = () => {
	return (
		<header>
			<div>
				<h1>LOGO</h1>
			</div>
			<nav class="hidden md:flex space-x-10">
				<NavLink
					to="/events"
					class="text-base font-medium text-gray-500 hover:text-gray-900">
					Events
				</NavLink>
				<NavLink
					to="/bookings"
					class="text-base font-medium text-gray-500 hover:text-gray-900">
					Bookings
				</NavLink>
				<NavLink
					to="/signup"
					class="text-base font-medium text-gray-500 hover:text-gray-900">
					Sign Up
				</NavLink>
				<NavLink
					to="/login"
					class="text-base font-medium text-gray-500 hover:text-gray-900">
					Log In
				</NavLink>
			</nav>
		</header>
	);
};

export default MainNavigation;
