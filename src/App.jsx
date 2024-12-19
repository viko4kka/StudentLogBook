import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllCoursesTeachers from "./pages/AllCoursesTeachers";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";
import StudentPanel from "./pages/StudentPanel";
import TeacherPanel from "./pages/TeacherPanel";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
				<Route path="dashboard" element={<Dashboard />} />
				<Route path="teachers" element={<TeacherPanel />} />
				<Route path="all-courses" element={<AllCoursesTeachers />} />
				<Route path="students" element={<StudentPanel />} />
				<Route path="all-courses" element={<AllCoursesTeachers />} />
				<Route path="*" element={<PageNotFound />} />
				<Route />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
