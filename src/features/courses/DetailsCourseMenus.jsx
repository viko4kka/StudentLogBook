function DetailsCourseMenus({ course, allStudents }) {
	const studentsInCourse = course.studentsIds.map((studentId) =>
		allStudents.data.find((student) => student.id.toString() === studentId)
	);

	console.log(studentsInCourse);
	return (
		<div>
			<p>{course.title}</p>
			<p>{course.description}</p>
			<p>{course.startDate}</p>
			<p>{course.endDate}</p>
			{studentsInCourse.map((student) => (
				<p key={student.id}>{student.userName}</p>
			))}

			<p>{course.teacherId}</p>
		</div>
	);
}

export default DetailsCourseMenus;
