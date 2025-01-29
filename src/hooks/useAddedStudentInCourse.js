import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addStudentInCourse } from "../services/apiCourses";
import toast from "react-hot-toast";

export function useAddedStudentInCourse() {
	const queryClient = useQueryClient();

	const { mutate: addStudent, isLoading } = useMutation({
		mutationFn: async ({ courseId, studentsIds }) => {
			const result = await addStudentInCourse({
				courseId,
				studentsIds,
			});
			return result;
		},
		onSuccess: () => {
			toast.success("Student list updated");

			queryClient.invalidateQueries({
				queryKey: ["course"],
			});
		},

		onError: (error) => {
			toast.error("Error adding student to course: " + error.message);
		},
	});

	return { isLoading, addStudent };
}
