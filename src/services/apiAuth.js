export const urlRegister = "http://localhost:3001/api";

export async function registerUser({
	userName,
	email,
	password,
	confirmPassword,
	role,
}) {
	const registerOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			userName,
			email,
			password,
			confirmPassword,
			role,
		}),
	};

	try {
		const response = await fetch(
			urlRegister + "/auth/register",
			registerOptions
		);
		console.log("Odpowiedź z serwera:", response);

		if (!response.ok) {
			throw new Error(`Błąd: ${response.status} - ${response.statusText}`);
		}

		return await response.json();
	} catch (error) {
		console.error("Błąd podczas rejestracji:", error);
		throw error;
	}
}

export async function loginUser({ email, password }) {
	const login = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email, password }),
	};

	try {
		const response = await fetch(urlRegister + "/auth/login", login);
		console.log("Odpowiedź z serwera:", response);

		if (!response.ok) {
			throw new Error(`Błąd: ${response.status} - ${response.statusText}`);
		}

		return await response.json();
	} catch (error) {
		console.error("Błąd podczas logowania:", error);
		throw error;
	}
}

export async function getUser() {
	const token = localStorage.getItem("token");

	if (!token) {
		throw new Error("Brak tokena w localStorage!");
	}

	const getUserOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ token }),
	};

	try {
		const response = await fetch(
			urlRegister + "/auth/retrive-user",
			getUserOptions
		);

		if (response.ok) {
			return await response.json();
		}
	} catch (error) {
		console.error("Błąd podczas pobierania danych użytkownika:", error);
		throw error;
	}
}
