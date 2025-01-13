import { urlRegister } from "./apiAuth";

export async function getCourses() {
	try {
		const response = await fetch(urlRegister + "/course/all-courses");

		if (!response.ok) {
			throw new Error(`Błąd: ${response.status} - ${response.statusText}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Błąd podczas pobierania kursów:", error);
		throw error;
	}
}
