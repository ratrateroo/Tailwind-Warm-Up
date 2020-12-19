import React from 'react';

const SignUpPage = () => {
	return (
		<div>
			{/* <h1 className="p-5 text-2xl font-bold text-black">Sign Up</h1> */}
			<div className="h-screen w-full flex justify-center bg-yellow-300 sm:bg-red-300 md:bg-green-300 lg:bg-blue-300 xl:bg-pink-300 2xl:bg-indigo-300">
				<div className="w-full h-full flex items-center p-10 bg-gray-100">
					<div className=" w-full md:w-4/6 xl:w-1/3 h-1/2 mx-auto flex justify-center items-center">
						<div className="w-full p-8 flex flex-col justify-center items-center rounded-lg border-2 border-yellow-900 sm:border-red-900 md:border-green-900 lg:border-blue-900 xl:border-pink-900 2xl:border-indigo-900 bg-yellow-100 sm:bg-red-100 md:bg-green-100 lg:bg-blue-100 xl:bg-pink-100 2xl:bg-indigo-100">
							<h2 class="text-2xl font-bold text-yellow-900 sm:text-red-900 md:text-green-900 lg:text-blue-900 xl:text-pink-900 2xl:text-indigo-900">
								Sign Up
							</h2>
							<form className="w-full">
								<div className="w-full my-3 flex flex-col">
									<label
										for="email"
										className="text-sm md:text-lg font-bold text-yellow-500 sm:text-red-500 md:text-green-500 lg:text-blue-500 xl:text-pink-500 2xl:text-indigo-500">
										Email
									</label>
									<input
										id="email"
										type="email"
										name="email"
										className="px-2 border-2 border-gray-100 rounded "
									/>
								</div>
								<div className="my-3 flex flex-col">
									<label
										for="password"
										className="text-sm md:text-lg font-bold text-yellow-500 sm:text-red-500 md:text-green-500 lg:text-blue-500 xl:text-pink-500 2xl:text-indigo-500">
										Password
									</label>
									<input
										id="password"
										type="password"
										name="password"
										className="px-2 border-2 border-gray-100 rounded "
									/>
								</div>
								<div className="w-full flex justify-end">
									<button
										type="submit"
										className="w-full p-1 rounded text-white font-bold bg-yellow-500 sm:bg-red-500 md:bg-green-500 lg:bg-blue-500 xl:bg-pink-500 2xl:bg-indigo-500">
										Sign Up
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUpPage;
