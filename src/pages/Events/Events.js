import React from 'react';

const EventsPage = () => {
	return (
		<div>
			<h1 className="p-5 text-2xl font-bold text-black">Events Page</h1>
			<div className="h-screen w-full flex justify-center bg-yellow-300 sm:bg-red-300 md:bg-green-300 lg:bg-blue-300 xl:bg-pink-300 2xl:bg-indigo-300">
				<div className="w-full p-10  flex flex-col justify-start bg-gray-100">
					<div className="w-3/4 mx-auto my-5 p-5 flex justify-between rounded-lg bg-yellow-100">
						<div className="">
							<div className="py-2">
								<h1 class="text-2xl font-bold text-yellow-900">
									Pyrolympics
								</h1>
							</div>
							<div className="py-2 flex justify-between">
								<div>
									<p className="text-xl font-bold text-yellow-600">
										&#8369; 1000.00
									</p>
								</div>
								<div>
									<p className="text-xl mx-5 font-bold text-yellow-600">
										-
									</p>
								</div>
								<div>
									<p className="text-xl font-bold text-yellow-600">
										January 1, 2021
									</p>
								</div>
							</div>
						</div>
						<div class="h-full flex items-center">
							<button className="p-3 rounded text-white font-bold bg-yellow-500">
								View Details
							</button>
						</div>
					</div>
					<div className="w-3/4 mx-auto my-5 p-5 flex justify-between rounded-lg bg-yellow-100">
						<div className="">
							<div className="py-2">
								<h1 class="text-2xl font-bold text-yellow-900">
									Pyrolympics
								</h1>
							</div>
							<div className="py-2 flex justify-between">
								<div>
									<p className="text-xl font-bold text-yellow-600">
										&#8369; 1000.00
									</p>
								</div>
								<div>
									<p className="text-xl mx-5 font-bold text-yellow-600">
										-
									</p>
								</div>
								<div>
									<p className="text-xl font-bold text-yellow-600">
										January 1, 2021
									</p>
								</div>
							</div>
						</div>
						<div class="h-full flex items-center">
							<button className="p-3 rounded text-white font-bold bg-yellow-500">
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
