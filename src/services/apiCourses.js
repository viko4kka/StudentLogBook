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

export async function createCourse({
	userName,
	title,
	description,
	startDate,
	endDate,
}) {
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
			teacherId: userName,
		}),
	};
	try {
		const response = await fetch(
			urlRegister + "/course/create",
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

export async function deleteCourse(id) {
	const deletedCourse = {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	};

	try {
		const response = await fetch(`${urlRegister}/course/${id}`, deletedCourse);

		if (!response.ok) {
			throw new Error(`Błąd: ${response.status} - ${response.statusText}`);
		}

		return await response.json();
	} catch (error) {
		console.error("Błąd podczas usuwania kursu:", error);
		throw error;
	}
}

export async function updateCourse({
	id,
	title,
	description,
	startDate,
	endDate,
}) {
	const updateCourseOption = {
		method: "PUT",
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
			urlRegister + `/course/${id}`,
			updateCourseOption
		);

		if (!response.ok) {
			throw new Error(`Błąd: ${response.status} - ${response.statusText}`);
		}

		const result = await response.json();
		return result;
	} catch (error) {
		console.error("Błąd podczas aktualizacji kursu:", error);
		throw error;
	}
}

export async function getCourseById(id) {
	try {
		const response = await fetch(urlRegister + `/course/${id}`);

		if (!response.ok) {
			throw new Error(`Błąd: ${response.status} - ${response.statusText}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Błąd podczas pobierania kursu:", error);
		throw error;
	}
}

export async function getAllStudents() {
	try {
		const response = await fetch(urlRegister + "/course/all/students");

		if (!response.ok) {
			throw new Error(`Błąd: ${response.status} - ${response.statusText}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Błąd podczas pobierania studentów:", error);
		throw error;
	}
}

export async function addStudentInCourse({ studentsIds, courseId }) {
	const addedStudent = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			studentsIds,
			courseId,
		}),
	};

	try {
		const response = await fetch(
			urlRegister + "/course/student/add",
			addedStudent
		);

		if (!response.ok) {
			throw new Error(`Błąd: ${response.status} - ${response.statusText}`);
		}

		return await response.json();
	} catch (error) {
		console.error("Błąd podczas dodawania studenta do kursu:", error);
		throw error;
	}
}
