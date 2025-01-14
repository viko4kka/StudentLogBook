import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCourse as createCourseApi } from "../../services/apiCourses";
import toast from "react-hot-toast";

export function useCreateCourse() {
	const queryClient = useQueryClient();

	const { mutate: createCourse, isLoading } = useMutation({
		mutationFn: createCourseApi,
		onSuccess: () => {
			toast.success("New subject successfully created");
			queryClient.invalidateQueries({ queryKey: ["course"] });
		},
		onError: (err) => toast.error(err.message),
	});

	return { createCourse, isLoading };
}
