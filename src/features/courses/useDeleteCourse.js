import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCourse as deletedCourseApi } from "../../services/apiCourses";
import toast from "react-hot-toast";

export function useDeleteCourse() {
	const queryClient = useQueryClient();

	const { mutate: deleteCourse, isLoading } = useMutation({
		mutationFn: deletedCourseApi,
		onSuccess: () => {
			toast.success("Course successfully deleted");

			queryClient.invalidateQueries({
				queryKey: ["course"],
			});
		},

		onError: (error) => {
			toast.error("Error deleting course: " + error.message);
		},
	});

	return { isLoading, deleteCourse };
}
