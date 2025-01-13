import { BarLoader } from "react-spinners";
import { useCourses } from "../features/courses/useCourses";
import ListCourses from "../ui/ListCourses";
import Pagination from "../ui/Pagination";
function Courses() {
	const { data, isLoading, isError } = useCourses();

	return (
		<div className="px-20">
			<div className="flex flex-col gap-y-1 items-center w-full mt-6 px-4 bg-white shadow rounded py-1">
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

				{/* <Pagination  /> */}
			</div>
			<div className="flex flex-row space-x-2 justify-end mt-2 px-4">
				<button className="px-3 py-1 rounded bg-mainColor hover:bg-hoverMainColor transition font-medium duration-300 text-white tracking-wide">
					Add subjet
				</button>
			</div>
		</div>
	);
}

export default Courses;
