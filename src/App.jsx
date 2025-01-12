import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllCoursesTeachers from "./pages/AllCoursesTeachers";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";
import TeacherPanel from "./pages/TeacherPanel";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import StudentPanel from "./pages/StudentPanel";
import AllCoursesStudents from "./pages/AllCoursesStudents";
import { Toaster } from "react-hot-toast";

//create a client
const queryClient = new QueryClient();

function App() {
	return (
		//provide the client to my app
		<>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				<BrowserRouter>
					<Routes>
						<Route path="teacher" element={<TeacherPanel />}>
							<Route
								path="all-courses-teacher"
								element={<AllCoursesTeachers />}
							/>
						</Route>
						<Route path="student" element={<StudentPanel />}>
							<Route
								path="all-courses-student"
								element={<AllCoursesStudents />}
							/>
						</Route>

						<Route path="dashboard" element={<Dashboard />} />
						<Route path="login" element={<Login />} />
						<Route path="register" element={<Register />} />
						<Route path="*" element={<PageNotFound />} />
						<Route />
					</Routes>
				</BrowserRouter>
				<Toaster
					position="top-center"
					gutter={12}
					containerStyle={{ margin: "8px" }}
					toastOptions={{
						success: {
							duration: 3000,
						},
						error: {
							duration: 3000,
						},
						style: {
							zIndex: 1000,
							fontSize: "16px",
							maxWidth: "500px",
							padding: "16px 24px",
						},
						className: "bg-white text-black",
					}}
				/>
			</QueryClientProvider>
		</>
	);
}

export default App;
