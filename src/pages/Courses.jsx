import { BarLoader } from "react-spinners";
import AddCourse from "../features/courses/AddCourse";
import { useCourses } from "../features/courses/useCourses";
import ListCourses from "../ui/ListCourses";
import { useQueryClient } from "@tanstack/react-query";

function Courses() {
	const { data, isLoading, isError } = useCourses();
	const queryClient = useQueryClient();
	const user = queryClient.getQueryData({ queryKey: ["user"] });

	console.log(user);

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
							course={course}
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
			</div>
			{user.data.role !== "student" && <AddCourse />}
		</div>
	);
}

export default Courses;
