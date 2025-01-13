import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";
import Courses from "./pages/Courses";
import Course from "./pages/Course";
import Timetable from "./pages/Timetable";
import Settings from "./pages/Settings";
import Grades from "./pages/Grades";
import AppLayout from "./ui/AppLayout";

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
						<Route path="dashboard" element={<Dashboard />}>
							<Route path="courses" element={<Courses />} />
							<Route path="courses/:courseId" element={<Course />} />
							<Route path="timetable" element={<Timetable />} />
							<Route path="settings" element={<Settings />} />
							<Route path="grades" element={<Grades />} />
						</Route>
						
						<Route path="login" element={<Login />} />
						<Route path="register" element={<Register />} />
						<Route path="*" element={<PageNotFound />} />
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
