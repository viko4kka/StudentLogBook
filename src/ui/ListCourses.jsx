import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import CourseMenus from "../features/courses/CourseMenus";
import { IoTimeOutline } from "react-icons/io5";
import { useQueryClient } from "@tanstack/react-query";
import DetailsCourseMenus from "../features/courses/DetailsCourseMenus";
import Modal from "./Modal";
import { useStudents } from "../hooks/useStudents";

function ListCourses({ id, title, description, startDate, endDate, course }) {
	const { data: allStudents, isLoading: isLoadingStudents } = useStudents();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isModelDetailsOpen, setIsModelDetailsOpen] = useState(false);
	const queryClient = useQueryClient();
	const user = queryClient.getQueryData({
		queryKey: ["user"],
	});

	console.log(user);

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
				onClick={() => {
					if (user.data.role !== "student") {
						setIsMenuOpen((s) => !s);
					} else {
						setIsModelDetailsOpen((s) => !s);
					}
				}}
				className="text-secondBlack text-2xl hover:text-mainColor duration-300 transition p-2">
				<BsThreeDotsVertical />
			</button>

			{isMenuOpen && <CourseMenus id={id} />}
			{isModelDetailsOpen && !isLoadingStudents && (
				<Modal onClose={() => setIsModelDetailsOpen(false)}>
					<DetailsCourseMenus
						onCloseModal={setIsModelDetailsOpen}
						course={course}
						allStudents={allStudents}
					/>
				</Modal>
			)}
		</div>
	);
}

export default ListCourses;
