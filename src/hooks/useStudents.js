import { useQuery } from "@tanstack/react-query";
import { getAllStudents } from "../services/apiCourses";

export function useStudents() {
	const { data, isLoading } = useQuery({
		queryKey: ["students"],
		queryFn: getAllStudents,
	});

	return { data, isLoading };
}
