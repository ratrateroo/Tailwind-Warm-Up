import React from 'react';

const SignUpPage = () => {
	return (
		<div>
			<h1 className="p-5 text-2xl font-bold text-black">Sign Up</h1>
			<div className="h-screen w-full flex justify-center bg-yellow-300 sm:bg-red-300 md:bg-green-300 lg:bg-blue-300 xl:bg-pink-300 2xl:bg-indigo-300">
				<div className="w-full p-10 bg-gray-100">
					<div className="w-3/4 mx-auto">
						<form>
							<div className="flex flex-col">
								<label for="email">Email</label>
								<input id="email" type="email" name="email" />
							</div>
							<div className="flex flex-col">
								<label for="password">Password</label>
								<input id="password" type="password" name="password" />
							</div>
							<div>
								<button type="submit">Sign Up</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUpPage;
