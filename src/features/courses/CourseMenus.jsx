import { HiEye, HiPencil, HiTrash } from "react-icons/hi";
import { useDeleteCourse } from "../courses/useDeleteCourse";
import { BarLoader } from "react-spinners";
import Modal from "../../ui/Modal";
import { useState } from "react";
import CreateCourseForm from "./CreateCourseForm";
import { useQueryClient } from "@tanstack/react-query";
import DetailsCourseForm from "./DetailsCourseForm";

function CourseMenus({ id }) {
	const { deleteCourse, isLoading } = useDeleteCourse();
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [isDetaildModelOpen, setIsDetaildModelOpen] = useState(false);
	const queryClient = useQueryClient();
	const course = queryClient
		.getQueryData(["course"])
		.data.find((course) => course.id === id);

	const initialData = {
		id: course.id,
		title: course.title,
		description: course.description,
		startDate: course.startDate,
		endDate: course.endDate,
	};
	console.log(course);

	console.log(id);

	const handleDeleteCourse = () => {
		deleteCourse(id);
	};

	return (
		<div className="absolute left-full top-0 ml-1 py-1 w-28 rounded-md shadow-lg bg-white">
			<button
				onClick={() => setIsDetaildModelOpen(true)}
				className="w-full text-left px-3 py-2 hover:bg-gray-200 flex items-center space-x-2 text-xs">
				<HiEye />
				<span>See details</span>
			</button>
			<button
				onClick={() => setIsOpenModal(true)}
				className="w-full text-left px-3 py-2 hover:bg-gray-200 flex items-center space-x-2 text-xs">
				<HiPencil />
				<span>Edit</span>
			</button>
			<button
				onClick={handleDeleteCourse}
				disabled={isLoading}
				className="w-full text-left px-3 py-2 hover:bg-gray-200 flex items-center space-x-2 text-xs">
				<HiTrash />

				{isLoading ? (
					<div className="flex items-center justify-center w-full h-full">
						<BarLoader color="#E97510" />
					</div>
				) : (
					<span>Delete</span>
				)}
			</button>
			{isOpenModal && (
				<Modal onClose={() => setIsOpenModal(false)}>
					<CreateCourseForm
						initialData={initialData}
						onCloseModal={() => setIsOpenModal(false)}
					/>
				</Modal>
			)}
			{isDetaildModelOpen && (
				<Modal onClose={() => setIsDetaildModelOpen(false)}>
					<DetailsCourseForm
						initialData={initialData}
						onCloseModal={() => setIsDetaildModelOpen(false)}
					/>
				</Modal>
			)}
		</div>
	);
}

export default CourseMenus;
