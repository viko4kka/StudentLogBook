import { IoPersonOutline } from "react-icons/io5";

import { CiLock } from "react-icons/ci";
import { GoMail } from "react-icons/go";

function RegisterForm() {
	return (
		<div className="bg-white shadow-xl w-full max-w-[420px] flex flex-col justify-center items-center rounded  py-8 px-12">
			<h4 className="text-secondBlack text-3xl font-semibold mb-6">
				Create an account
			</h4>
			<form className=" flex flex-col items-center justify-between w-full gap-y-2">
				<div className="my-2 w-full group">
					<div className="flex items-center border-b-2 py-2 px-4 focus-within:border-mainColor transition duration-300">
						<input
							type="text"
							placeholder="Enter your fullname"
							className="w-full focus:outline-none"
						/>
						<span className="flex-shrink-0 text-xl transition duration-300  group-focus-within:text-mainColor">
							<IoPersonOutline />
						</span>
					</div>
				</div>
				<div className="my-2 w-full group">
					<div className="flex items-center border-b-2 py-2 px-4 focus-within:border-mainColor transition duration-300">
						<input
							type="email"
							placeholder="Enter your email address"
							className="w-full focus:outline-none"
						/>
						<span className="flex-shrink-0 text-xl transition duration-300  group-focus-within:text-mainColor">
							<GoMail className="icon" />
						</span>
					</div>
				</div>
				<div className="my-2 w-full group">
					<div className="flex flex-row flex-shrink items-center border-b-2  w-full py-2 px-4 focus-within:border-mainColor transition duration-300">
						<input
							type="password"
							placeholder="Enter your password"
							className=" w-full focus:outline-none"
						/>

						<span className="flex-shrink-0 text-2xl transition duration-300  group-focus-within:text-mainColor">
							<CiLock />
						</span>
					</div>
				</div>
				<div className="my-2 w-full group">
					<div className="flex flex-row flex-shrink items-center border-b-2  w-full py-2 px-4 focus-within:border-mainColor transition duration-300">
						<input
							type="password"
							placeholder="Confirm password"
							className=" w-full focus:outline-none"
						/>

						<span className="flex-shrink-0 text-2xl transition duration-300  group-focus-within:text-mainColor">
							<CiLock />
						</span>
					</div>
				</div>
				<div className="flex flex-row justify-around items-center w-full mt-4">
					<div className="flex flex-row items-center space-x-2">
						<input type="checkbox" className="w-4 h-4 accent-mainColor  " />
						<label className="text-secondBlack text-sm">Student</label>
					</div>
					<div className="flex flex-row items-center space-x-2">
						<input type="checkbox" className="w-4 h-4 accent-mainColor  " />
						<label className="text-secondBlack text-sm">Teacher</label>
					</div>
				</div>
				<div className="flex flex-col justify-center items-center  mt-6 w-full ">
					<button className="text-xl px-14 py-1.5 before:ease relative overflow-hidden bg-gradient-to-r rounded-full font-medium  from-hoverMainColor to-firstGradientMainColor text-secondWhite shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40">
						Register
					</button>
				</div>
			</form>
			<div className="flex flex-row items-center justify-between gap-x-2 mt-8">
				<p className="text-secondBlack">Have any account? </p>
				<div>
					<button className="text-secondBlack font-medium hover:text-mainColor transition duration-300">
						Log in
					</button>
				</div>
			</div>
		</div>
	);
}

export default RegisterForm;
