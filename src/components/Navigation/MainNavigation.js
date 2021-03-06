import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const MainNavigation = () => {
	return (
		<header className="p-0">
			<div class="flex items-center py-2.5 w-screen bg-yellow-900 sm:bg-red-900 md:bg-green-900 lg:bg-blue-900 xl:bg-pink-900 2xl:bg-indigo-900">
				<nav className="h-10  w-full flex justify-between bg-yellow-500 sm:bg-red-500 md:bg-green-500 lg:bg-blue-500 xl:bg-pink-500 2xl:bg-indigo-500">
					<div className="flex justify-start items-center mx-1">
						<NavLink to="/events" className="h-10 w-10 mx-3">
							<img src="Logo.svg" className="" alt="Logo" />
						</NavLink>
					</div>
					<div className="w-full flex justify-start items-center mx-1">
						<NavLink
							exact
							to="/events"
							className="mx-5 text-white"
							activeClassName="border-b-2 border-white">
							Events
						</NavLink>
						<NavLink
							to="/bookings"
							className="mx-5 text-white"
							activeClassName="border-b-2 border-white"
							exact>
							Bookings
						</NavLink>
					</div>
					<div className="w-full flex justify-end items-center mx-1">
						<NavLink
							to="/signup"
							className="mx-5 text-white"
							activeClassName="border-b-2 border-white"
							exact>
							Sign Up
						</NavLink>
						<NavLink
							to="/login"
							className="mx-5 mr-10 text-white"
							activeClassName="border-b-2 border-white"
							exact>
							Log In
						</NavLink>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default MainNavigation;
