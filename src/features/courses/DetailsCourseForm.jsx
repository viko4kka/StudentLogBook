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
		<div>
			<p>{course.title}</p>
			<p>{course.description}</p>
			<p>{course.startDate}</p>
			<p>{course.endDate}</p>
			<div>
				<h3>Assign students</h3>
				<div className="bg-red-500 flex flex-col">
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
							/>
							{student.userName}
						</label>
					))}
				</div>
				<button
					onClick={() => {
						addStudent({ courseId: course.id, studentsIds: students });
						onCloseModal();
					}}>
					Save
				</button>
			</div>
		</div>
	);
}

export default DetailsCourseForm;
