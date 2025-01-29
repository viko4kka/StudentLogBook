import { BsBook } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

function Sidebar({ data }) {
	const { logout } = useLogout();

	console.log(data);

	return (
		<div className="bg-white shadow-xl w-[330px] flex flex-col items-center h-screen">
			<div className="h-screen flex flex-col items-center space-y-8 py-16 px-12 w-full mt-14">
				<div className="flex flex-col items-start gap-y-3 w-full">
					<button className="group w-full">
						<NavLink
							to="/dashboard/courses"
							className="flex flex-row items-center space-x-2 py-3 px-3 group-hover:bg-hoverMainColor/20 w-full transition-all duration-300">
							<span className="text-2xl px-3 text-secondBlack group-hover:text-mainColor transition-all duration-300 ">
								<BsBook />
							</span>
							<p className="text-2xl rounded text-secondBlack group-hover:text-mainColor transition-all duration-300">
								Subject
							</p>
						</NavLink>
					</button>
				</div>

				<div className="group w-full">
					<button
						onClick={logout}
						className="flex flex-row items-center space-x-2 py-3 px-3 group-hover:bg-hoverBgLogOut/70 w-full transition-all duration-300">
						<span className="text-2xl px-3 text-secondBlack group-hover:text-white transition-all duration-300">
							<IoLogOutOutline />
						</span>
						<p className="text-2xl rounded text-secondBlack group-hover:text-white transition-all duration-300">
							Log out
						</p>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
