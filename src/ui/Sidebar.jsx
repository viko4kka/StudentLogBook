import { BsBook } from "react-icons/bs";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import {
	IoLogOutOutline,
	IoSchoolOutline,
	IoSettingsOutline,
} from "react-icons/io5";
import { useGetUser } from "../hooks/useGetUser";
import { useLogout } from "../hooks/useLogout";
import { NavLink } from "react-router-dom";

function Sidebar({ data }) {
	const { logout } = useLogout();

	console.log(data);

	return (
		<div className="bg-white shadow-xl w-[330px] flex flex-col items-center justify-between h-screen">
			<div className="h-screen flex flex-col items-center justify-between py-16 px-12 w-full">
				<div className="flex flex-col items-start gap-y-3 w-full">
					<p className="text-5xl py-2">Logo</p>

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
					<button className="group w-full">
						<NavLink
							to="/dashboard/timetable"
							className="flex flex-row items-center space-x-2 py-3 px-3 group-hover:bg-hoverMainColor/20 w-full transition-all duration-300">
							<span className="text-2xl px-3 text-secondBlack group-hover:text-mainColor transition-all duration-300 ">
								<HiOutlineCalendarDays />
							</span>
							<p className="text-2xl rounded text-secondBlack group-hover:text-mainColor transition-all duration-300">
								Timetable
							</p>
						</NavLink>
					</button>
					<button className="group w-full">
						<NavLink
							to="/dashboard/settings"
							className="flex flex-row items-center space-x-2 py-3 px-3 group-hover:bg-hoverMainColor/20 w-full transition-all duration-300">
							<span className="text-2xl px-3 text-secondBlack group-hover:text-mainColor transition-all duration-300 ">
								<IoSettingsOutline />
							</span>
							<p className="text-2xl rounded text-secondBlack group-hover:text-mainColor transition-all duration-300">
								Settings
							</p>
						</NavLink>
					</button>

					{data.data.role === "student" && (
						<button className="group w-full">
							<NavLink
								to="/dashboard/grades"
								className="flex flex-row items-center space-x-2 py-3 px-3 group-hover:bg-hoverMainColor/20 w-full transition-all duration-300">
								<span className="text-2xl px-3 text-secondBlack group-hover:text-mainColor transition-all duration-300 ">
									<IoSchoolOutline />
								</span>
								<p className="text-2xl rounded text-secondBlack group-hover:text-mainColor transition-all duration-300">
									Grades
								</p>
							</NavLink>
						</button>
					)}
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
