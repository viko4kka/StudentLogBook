import { BsBook } from "react-icons/bs";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";

function Sidebar() {
	//useGetUser,

	return (
		<div className="bg-white shadow-xl w-[330px] flex flex-col items-center justify-between h-screen">
			<div className="h-screen flex flex-col items-center justify-between py-16 px-12 w-full">
				<div className="flex flex-col items-start gap-y-3 w-full">
					<p className="text-5xl py-2">Logo</p>

					<div className="group w-full">
						<a className="flex flex-row items-center space-x-2 py-3 px-3 group-hover:bg-hoverMainColor/20 w-full transition-all duration-300">
							<span className="text-2xl px-3 text-secondBlack group-hover:text-mainColor transition-all duration-300 ">
								<BsBook />
							</span>
							<p className="text-2xl rounded text-secondBlack group-hover:text-mainColor transition-all duration-300">
								All courses
							</p>
						</a>
					</div>
					<div className="group w-full">
						<a className="flex flex-row items-center space-x-2 py-3 px-3 group-hover:bg-hoverMainColor/20 w-full transition-all duration-300">
							<span className="text-2xl px-3 text-secondBlack group-hover:text-mainColor transition-all duration-300 ">
								<HiOutlineCalendarDays />
							</span>
							<p className="text-2xl rounded text-secondBlack group-hover:text-mainColor transition-all duration-300">
								Timetable
							</p>
						</a>
					</div>
					<div className="group w-full">
						<a className="flex flex-row items-center space-x-2 py-3 px-3 group-hover:bg-hoverMainColor/20 w-full transition-all duration-300">
							<span className="text-2xl px-3 text-secondBlack group-hover:text-mainColor transition-all duration-300 ">
								<IoSettingsOutline />
							</span>
							<p className="text-2xl rounded text-secondBlack group-hover:text-mainColor transition-all duration-300">
							Settings
							</p>
						</a>
					</div>

					{/* user.role === "student" && <div>grades</div> */}
				</div>

				<div className="group w-full">
					<div className="flex flex-row items-center space-x-2 py-3 px-3 group-hover:bg-hoverBgLogOut/70 w-full transition-all duration-300">
						<span className="text-2xl px-3 text-secondBlack group-hover:text-white transition-all duration-300">
							<IoLogOutOutline />
						</span>
						<p className="text-2xl rounded text-secondBlack group-hover:text-white transition-all duration-300">
							Log out
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;



// import { BsBook } from "react-icons/bs";
// import { HiOutlineCalendarDays } from "react-icons/hi2";
// import { IoSettingsOutline } from "react-icons/io5";
// import { IoSchoolOutline } from "react-icons/io5";

// import AllCoursesStudents from "../../pages/AllCoursesStudents";

// export const menuItemsStudent = [
// 	{
// 		icon: <BsBook />,
// 		path: "https://www.google.com/",
// 		name: "All courses",
// 		element: <AllCoursesStudents />,
// 		isMenu: true,
// 		// isPrivate: ,
// 	},
// 	{
// 		icon: <HiOutlineCalendarDays />,
// 		path: "https://www.google.com/",
// 		name: "Timetable",
// 		element: <AllCoursesStudents />,
// 		isMenu: true,
// 		// isPrivate: ,
// 	},
// 	{
// 		icon: <IoSchoolOutline />,
// 		path: "https://www.google.com/",
// 		name: "Grades",
// 		element: <AllCoursesStudents />,
// 		isMenu: true,
// 	},
// 	{
// 		icon: <IoSettingsOutline />,
// 		path: "https://www.google.com/",
// 		name: "Settings",
// 		element: <AllCoursesStudents />,
// 		isMenu: true,
// 		//
// 	},
// ];
