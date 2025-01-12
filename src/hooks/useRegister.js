import { useMutation } from "@tanstack/react-query";
import { registerUser as registerUserApi } from "../services/apiAuth";
import toast from "react-hot-toast";

export function useRegisterUser() {
	const { mutate: registerUser, isLoading } = useMutation({
		mutationFn: registerUserApi,
		onSuccess: () => {
			toast.success("Account successfully created!");
		},

		onError: () => {
			toast.error("Account creation failed!");
		},
	});

	return { registerUser, isLoading };
}
