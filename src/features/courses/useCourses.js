import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../services/apiCourses";

export function useCourses() {
	const { data, isLoading, isError } = useQuery({
		queryKey: ["course"],
		queryFn: getCourses,
	});

	return { data, isLoading, isError };
}
