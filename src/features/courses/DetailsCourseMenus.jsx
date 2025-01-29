import { useState } from "react";

function DetailsCourseMenus({ course, allStudents }) {
	const [isModalOpen, setIsModalOpen] = useState(true);

	const studentsInCourse = course.studentsIds.map((studentId) =>
		allStudents.data.find((student) => student.id.toString() === studentId)
	);

	const closeModal = () => setIsModalOpen(false);

	if (!isModalOpen) return null;

	console.log(studentsInCourse);
	return (
		<div className="w-full bg-hoverMainColor/10 flex flex-col items-start justify-between py-4 px-12 rounded-md border-2 border-mainColor/30 relative">
			<button
				onClick={closeModal}
				className="absolute top-1 right-3 text-4xl text-mainColor hover:text-mainColor/70 transition duration-300">
				&times;
			</button>
			<p className="border-b-2 py-2 px-4 transition duration-300 text-secondBlack/80 text-lg font-medium">
				<span className="text-mainColor font-bold tracking-wide text-xl">
					Title:
				</span>{" "}
				{course.title}
			</p>
			<p className="border-b-2 py-2 px-4 transition duration-300 text-secondBlack/80 text-lg font-medium">
				<span className="text-mainColor font-bold tracking-wide text-xl">
					Description:
				</span>{" "}
				{course.description}
			</p>
			<p className="border-b-2 py-2 px-4 transition duration-300 text-secondBlack/80 text-lg font-medium">
				<span className="text-mainColor font-bold tracking-wide text-xl">
					Teacher:{" "}
				</span>
				{course.teacherId}
			</p>
			<p className="border-b-2 py-2 px-4 transition duration-300 text-secondBlack/80 text-lg font-medium">
				<span className="text-mainColor font-bold tracking-wide text-xl">
					Start:
				</span>{" "}
				{new Date(course.startDate).toLocaleDateString()}
			</p>
			<p className="border-b-2 py-2 px-4 transition duration-300 text-secondBlack/80 text-lg font-medium">
				<span className="text-mainColor font-bold tracking-wide text-xl">
					End:
				</span>{" "}
				{new Date(course.endDate).toLocaleDateString()}
			</p>
			<p className=" py-2 text-mainColor font-bold tracking-wide text-xl px-4 transition duration-300  ">
				Lista studentów:
			</p>{" "}
			{studentsInCourse.map((student) => (
				<p
					key={student.id}
					className=" py-2 px-4 transition duration-300 text-secondBlack/80 text-lg font-medium">
					<span className="ml-2">-</span> {student.userName}
				</p>
			))}
		</div>
	);
}

export default DetailsCourseMenus;

// {new Date(startDate).toLocaleDateString()} -
