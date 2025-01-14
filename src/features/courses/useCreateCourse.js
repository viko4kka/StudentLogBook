import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useCreateCourse() {
	const queryClient = useQueryClient();

	const { mutate: createCourse, isLoading } = useMutation({
		mutationFn: createCourse,
		onSuccess: () => {
			toast.success("New course successfully created");
			queryClient.invalidateQueries({ queryKey: ["course"] });
		},
		onError: (err) => toast.error(err.message),
	});

	return { createCourse, isLoading };
}
