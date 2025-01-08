import { BsBook } from "react-icons/bs";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import AllCoursesTeachers from "../../pages/AllCoursesTeachers";
import { IoSettingsOutline } from "react-icons/io5";

export const menuItems = [
	{
		icon: <BsBook />,
		path: "https://www.google.com/",
		name: "All courses",
		element: <AllCoursesTeachers />,
		isMenu: true,
		// isPrivate: ,
	},
	{
		icon: <HiOutlineCalendarDays />,
		path: "https://www.google.com/",
		name: "Timetable",
		element: <AllCoursesTeachers />,
		isMenu: true,
		// isPrivate: ,
	},
	{
		icon: <IoSettingsOutline />,
		path: "https://www.google.com/",
		name: "Settings",
		element: <AllCoursesTeachers />,
		isMenu: true,
		//
	},
];
