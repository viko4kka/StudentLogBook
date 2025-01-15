import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCourse as updateCourseApi } from "../../services/apiCourses";
import toast from "react-hot-toast";

export function useEditCourse() {
	const queryClient = useQueryClient();

	const { mutate: updateCourse, isLoading } = useMutation({
		mutationFn: async ({ id, title, description, startDate, endDate }) => {
			const result = await updateCourseApi({
				id,
				title,
				description,
				startDate,
				endDate,
			});
			return result;
		},
		onSuccess: () => {
			toast.success("Course successfully updated");

			queryClient.invalidateQueries({
				queryKey: ["course"],
			});
		},

		onError: (error) => {
			toast.error("Error updating course: " + error.message);
		},
	});

	return { isLoading, updateCourse };
}
