import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Courses from "./pages/Courses";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				<BrowserRouter>
					<Routes>
						<Route index path="/" element={<Login />} />

						<Route path="login" element={<Login />} />
						<Route path="register" element={<Register />} />

						<Route path="dashboard" element={<Dashboard />}>
							<Route path="courses" element={<Courses />} />
						</Route>

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
