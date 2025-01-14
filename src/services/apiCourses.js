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

export async function createCourse({ title, description, startDate, endDate }) {
	const createCourseOption = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			title,
			description,
			startDate,
			endDate,
		}),
	};
	try {
		const response = await fetch(
			urlRegister + "/course/create-course",
			createCourseOption
		);

		console.log("Odpowiedź z serwera:", response);

		if (!response.ok) {
			throw new Error(`Błąd: ${response.status} - ${response.statusText}`);
		}

		return await response.json();
	} catch (error) {
		console.error("Błąd podczas tworzenia kursu:", error);
		throw error;
	}
}

// export async function deleteCourse({id}) {
// 	const deleteCourseConfig = {
// 		method: "DELETE",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 	};

// 	try {
// 		const response = await fetch(
// 			urlRegister + "/course/delete/:id",
// 			deleteCourseConfig
// 		);

// 		if (!response.ok) {
// 			throw new Error(`Błąd: ${response.status} - ${response.statusText}`);
// 		}

// 		return await response.json();
// 	} catch (error) {
// 		console.error("Błąd podczas usuwania kursu:", error);
// 		throw error;
// 	}
// }
