import { BarLoader } from "react-spinners";
import AddCourse from "../features/courses/AddCourse";
import { useCourses } from "../features/courses/useCourses";
import ListCourses from "../ui/ListCourses";
function Courses() {
	const { data, isLoading, isError } = useCourses();

	return (
		<div className="px-28">
			<div className="flex flex-col gap-y-1 items-center w-full mt-6 px-6 bg-white shadow rounded py-8">
				<p className="flex justify-start w-full text-secondBlack text-2xl py-2">
					Your subjects
				</p>
				{isLoading ? (
					<div className="flex items-center justify-center w-full h-full">
						<BarLoader color="#E97510" />
					</div>
				) : data.data.length > 0 ? (
					data.data.map((course) => (
						<ListCourses
							id={course.id}
							key={course.id}
							title={course.title}
							description={course.description}
							startDate={course.startDate}
							endDate={course.endDate}
						/>
					))
				) : (
					<p className="text-lg text-gray-500 py-4">No subjects available.</p>
				)}

				{/* <Pagination /> */}
			</div>
			<AddCourse />
		</div>
	);
}

export default Courses;
