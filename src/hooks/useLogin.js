import { useMutation } from "@tanstack/react-query";
import { loginUser as loginUserApi } from "../services/apiAuth";
import toast from "react-hot-toast";

export function useLoginUser() {
	const { mutate: loginUser, isLoading } = useMutation({
		mutationFn: loginUserApi,
		onSuccess: (data) => {
			toast.success("Logged in successfully!");
			console.log(data);
			localStorage.setItem("token", data.token);
		},

		onError: () => {
			toast.error("Login failed!");
		},
		onSettled: () => {
			console.log("Login request completed!");
		},
	});

	return { loginUser, isLoading };
}
