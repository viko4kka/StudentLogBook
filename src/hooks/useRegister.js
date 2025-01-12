import { useMutation } from "@tanstack/react-query";
import { registerUser as registerUserApi } from "../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useRegisterUser() {
	const navigate = useNavigate();

	const { mutate: registerUser, isLoading } = useMutation({
		mutationFn: registerUserApi,
		onSuccess: () => {
			toast.success("Account successfully created!");
			navigate("/login");
		},

		onError: () => {
			toast.error("Account creation failed!");
		},
	});

	return { registerUser, isLoading };
}
