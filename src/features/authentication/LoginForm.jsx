import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import { CiLock } from "react-icons/ci";
import { GoMail } from "react-icons/go";
import { useLoginUser } from "../../hooks/useLogin";

function LoginForm() {
	const { loginUser, isLoading } = useLoginUser();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function onSubmit() {
		loginUser({ email, password });
		console.log("Email:", email);
		console.log("Password:", password);
	}

	const navigate = useNavigate();
	const handleToRegister = () => {
		navigate("/register");
	};

	return (
		<div className="bg-white shadow-xl w-full max-w-[420px] flex flex-col justify-center items-center rounded  py-8 px-12">
			<h4 className="text-secondBlack text-3xl font-semibold mb-4">Log in</h4>
			<div className=" flex flex-col items-center justify-between w-full gap-y-1">
				<div className="my-2 w-full group">
					<div className="flex items-center border-b-2 py-2 px-4 focus-within:border-mainColor transition duration-300">
						<input
							type="email"
							disabled={isLoading}
							placeholder="Enter your email address"
							className="w-full focus:outline-none"
							onChange={(e) => setEmail(e.target.value)}
							value={email} //to sie nazywa controlled input
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
							disabled={isLoading}
							placeholder="Enter yout password"
							className=" w-full focus:outline-none"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						/>

						<span className="flex-shrink-0 text-2xl transition duration-300  group-focus-within:text-mainColor">
							<CiLock />
						</span>
					</div>
				</div>
				<div className="flex flex-row justify-between items-center w-full mt-4">
					<div className="flex flex-row items-center space-x-2">
						<input type="checkbox" className="w-4 h-4 accent-mainColor  " />
						<label className="text-secondBlack text-sm">Remember me</label>
					</div>
					<Link
						to="https://www.google.com"
						className="text-secondBlack text-sm hover:underline transition duration-300 ">
						Forgot password?
					</Link>
				</div>
				<div className="flex flex-col justify-center items-center  mt-8 w-full ">
					<button
						onClick={onSubmit}
						disabled={isLoading}
						className="text-xl px-14 py-1.5 style-before relative before:ease overflow-hidden bg-gradient-to-r rounded-full font-medium  from-hoverMainColor to-firstGradientMainColor text-secondWhite shadow-2xl transition-all  ">
						Login
					</button>
				</div>
			</div>
			<div className="flex flex-row items-center justify-between gap-x-2 mt-8">
				<p className="text-secondBlack">Don&apos;t have an account?</p>
				<div>
					<button
						onClick={handleToRegister}
						className="text-secondBlack font-medium hover:text-mainColor transition duration-300">
						Register
					</button>
				</div>
			</div>
		</div>
	);
}

export default LoginForm;
