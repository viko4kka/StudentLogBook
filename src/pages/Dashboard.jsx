import { BarLoader } from "react-spinners";
import { useGetUser } from "../hooks/useGetUser";
import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";
import { useNavigate } from "react-router-dom";

function Dashboard() {
	const { data, isError, isLoading } = useGetUser();

	const navigate = useNavigate();

	if (isError) {
		navigate("/login");

		return null;
	}

	return (
		<div className="flex bg-secondWhite h-screen">
			{isLoading ? (
				<div className="flex items-center justify-center w-full h-full">
					<BarLoader color="#E97510" />
				</div>
			) : (
				<>
					<Sidebar data={data} className="w-[330px] flex-shrink-0" />
					<div className="flex flex-col flex-grow">
						<Header />
					</div>
				</>
			)}
		</div>
	);
}

export default Dashboard;
