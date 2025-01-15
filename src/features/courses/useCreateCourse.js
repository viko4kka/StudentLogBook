import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCourse as createCourseApi } from "../../services/apiCourses";
import toast from "react-hot-toast";

export function useCreateCourse() {
	const queryClient = useQueryClient();
	const user = queryClient.getQueryData(["user"]);
	const userName = user?.data?.userName;
	console.log(userName, user);

	const { mutate: createCourse, isLoading } = useMutation({
		mutationFn: async ({ title, description, startDate, endDate }) =>
			createCourseApi({ userName, title, description, startDate, endDate }),
		onSuccess: () => {
			toast.success("New subject successfully created");
			queryClient.invalidateQueries({ queryKey: ["course"] });
		},
		onError: (err) => toast.error(err.message),
	});

	return { createCourse, isLoading };
}
