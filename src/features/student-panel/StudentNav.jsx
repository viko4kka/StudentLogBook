import { BsBook } from "react-icons/bs";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { IoSchoolOutline } from "react-icons/io5";

import AllCoursesStudents from "../../pages/AllCoursesStudents";

export const menuItemsStudent = [
	{
		icon: <BsBook />,
		path: "https://www.google.com/",
		name: "All courses",
		element: <AllCoursesStudents />,
		isMenu: true,
		// isPrivate: ,
	},
	{
		icon: <HiOutlineCalendarDays />,
		path: "https://www.google.com/",
		name: "Timetable",
		element: <AllCoursesStudents />,
		isMenu: true,
		// isPrivate: ,
	},
	{
		icon: <IoSchoolOutline />,
		path: "https://www.google.com/",
		name: "Grades",
		element: <AllCoursesStudents />,
		isMenu: true,
	},
	{
		icon: <IoSettingsOutline />,
		path: "https://www.google.com/",
		name: "Settings",
		element: <AllCoursesStudents />,
		isMenu: true,
		//
	},
];
