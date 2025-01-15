import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import CourseMenus from "../features/courses/CourseMenus";
import { IoTimeOutline } from "react-icons/io5";

function ListCourses({ id, title, description, startDate, endDate }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenus = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="w-full bg-hoverMainColor/10 flex flex-row items-center justify-between py-4 px-12 rounded-md border-2 border-mainColor/30 relative">
			<div className="flex flex-col">
				<p className="text-secondBlack text-lg font-semibold">{title}</p>
				<p className="text-secondBlack text-sm px-4 mt-2">{description}</p>
				<div className="flex flex-row items-center px-4 space-x-2 ">
					<span className="text-secondBlack text-sm">
						<IoTimeOutline />
					</span>
					<p className=" text-secondBlack text-sm ">
						{new Date(startDate).toLocaleDateString()} -
						{new Date(endDate).toLocaleDateString()}
					</p>
				</div>
			</div>
			<button
				onClick={toggleMenus}
				className="text-secondBlack text-2xl hover:text-mainColor duration-300 transition p-2">
				<BsThreeDotsVertical />
			</button>

			{isMenuOpen && <CourseMenus id={id} />}
		</div>
	);
}

export default ListCourses;
