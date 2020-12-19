import React from 'react';

const EventsPage = () => {
	return (
		<div>
			<h1 className="p-5 text-2xl font-bold text-black">Events</h1>
			<div className="h-screen w-full flex justify-center bg-yellow-300 sm:bg-red-300 md:bg-green-300 lg:bg-blue-300 xl:bg-pink-300 2xl:bg-indigo-300">
				<div className="w-full p-10  flex flex-col justify-start bg-gray-100">
					<div className="w-3/4 mx-auto my-5 p-5 flex justify-between rounded-lg bg-yellow-100 sm:bg-red-100 md:bg-green-100 lg:bg-blue-100 xl:bg-pink-100 2xl:bg-indigo-100">
						<div className="">
							<div className="py-2">
								<h1 class="text-2xl font-bold text-yellow-900 sm:text-red-900 md:text-green-900 lg:text-blue-900 xl:text-pink-900 2xl:text-indigo-900">
									Pyrolympics
								</h1>
							</div>
							<div className="py-2 flex justify-between">
								<div>
									<p className="text-sm md:text-lg font-bold text-yellow-600 sm:text-red-600 md:text-green-600 lg:text-blue-600 xl:text-pink-600 2xl:text-indigo-600">
										&#8369; 1000.00
									</p>
								</div>
								<div>
									<p className="text-sm md:text-lg mx-5 font-bold text-yellow-600 sm:text-red-600 md:text-green-600 lg:text-blue-600 xl:text-pink-600 2xl:text-indigo-600">
										-
									</p>
								</div>
								<div>
									<p className="text-sm md:text-lg font-bold text-yellow-600 sm:text-red-600 md:text-green-600 lg:text-blue-600 xl:text-pink-600 2xl:text-indigo-600">
										January 1, 2021
									</p>
								</div>
							</div>
						</div>
						<div class="h-full flex items-center">
							<button className="p-3 rounded text-white font-bold bg-yellow-500 sm:bg-red-500 md:bg-green-500 lg:bg-blue-500 xl:bg-pink-500 2xl:bg-indigo-500">
								View Details
							</button>
						</div>
					</div>
					<div className="w-3/4 mx-auto my-5 p-5 flex justify-between rounded-lg bg-yellow-100 sm:bg-red-100 md:bg-green-100 lg:bg-blue-100 xl:bg-pink-100 2xl:bg-indigo-100">
						<div className="">
							<div className="py-2">
								<h1 class="text-2xl font-bold text-yellow-900 sm:text-red-900 md:text-green-900 lg:text-blue-900 xl:text-pink-900 2xl:text-indigo-900">
									Pyrolympics
								</h1>
							</div>
							<div className="py-2 flex justify-between">
								<div>
									<p className="text-sm md:text-lg font-bold text-yellow-600 sm:text-red-600 md:text-green-600 lg:text-blue-600 xl:text-pink-600 2xl:text-indigo-600">
										&#8369; 1000.00
									</p>
								</div>
								<div>
									<p className="text-sm md:text-lg mx-5 font-bold text-yellow-600 sm:text-red-600 md:text-green-600 lg:text-blue-600 xl:text-pink-600 2xl:text-indigo-600">
										-
									</p>
								</div>
								<div>
									<p className="text-sm md:text-lg font-bold text-yellow-600 sm:text-red-600 md:text-green-600 lg:text-blue-600 xl:text-pink-600 2xl:text-indigo-600">
										January 1, 2021
									</p>
								</div>
							</div>
						</div>
						<div class="h-full flex items-center">
							<button className="p-3 rounded text-white font-bold bg-yellow-500 sm:bg-red-500 md:bg-green-500 lg:bg-blue-500 xl:bg-pink-500 2xl:bg-indigo-500">
								View Details
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventsPage;
