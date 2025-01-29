import { useState } from "react";
import { useStudents } from "../../hooks/useStudents";
import { useAddedStudentInCourse } from "../../hooks/useAddedStudentInCourse";

function DetailsCourseForm({ course, onCloseModal }) {
	const { data, isLoading: isLoadingStudents } = useStudents();
	const [students, setStudents] = useState(course.studentsIds || []);
	const { isLoading: isLoadingAddStudent, addStudent } =
		useAddedStudentInCourse();
	const isLoading = isLoadingStudents || isLoadingAddStudent;

	console.log(students);
	console.log(course.studentsIds);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="w-full bg-hoverMainColor/10 flex flex-col items-start justify-between py-4 px-8 rounded-md border-2 border-mainColor/30 relative">
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
			<div className="flex flex-col items-start py-2 text-secondBlack/80 text-lg font-medium">
				<h3 className=" py-2 text-mainColor font-bold tracking-wide text-xl px-4">
					Assign students
				</h3>
				<div className="border-2 gap-2 bg-white flex flex-col items-start p-2 text-secondBlack/80 text-lg font-medium">
					{data.data.map((student) => (
						<label key={student.id}>
							<input
								type="checkbox"
								onChange={(e) => {
									console.log(e.target.checked);
									if (e.target.checked === true) {
										setStudents((val) => [...val, student.id.toString()]);
									} else {
										setStudents((val) =>
											val.filter((id) => id !== student.id.toString())
										);
									}
								}}
								value={student.id.toString()}
								checked={students.includes(student.id.toString())}
								className="mr-2 "
							/>
							{student.userName}
						</label>
					))}
				</div>
			</div>
			<div className="flex flex-row  justify-end space-x-2 mt-6  w-full">
				<button
					onClick={() => onCloseModal?.()}
					className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 transition font-medium duration-300 text-secondBlack tracking-wide">
					Cancel
				</button>
				<button
					onClick={() => {
						addStudent({ courseId: course.id, studentsIds: students });
						onCloseModal();
					}}
					className="px-3 py-1 rounded bg-mainColor hover:bg-hoverMainColor transition font-medium duration-300 text-white tracking-wide">
					Save
				</button>
			</div>
		</div>
	);
}

export default DetailsCourseForm;

{
	/* <div className="flex flex-row  justify-end space-x-2 mt-6  w-full">
<button
	onClick={() => onCloseModal?.()}
	className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 transition font-medium duration-300 text-secondBlack tracking-wide">
	Cancel
</button>
<button
	type="button"
	disabled={isLoading}
	onClick={handleSubmit(onSubmit)}
	className="px-3 py-1 rounded bg-mainColor hover:bg-hoverMainColor transition font-medium duration-300 text-white tracking-wide">
	{isEditForm ? "Edit subject" : "Create new subject"}
</button>
</div> */
}
