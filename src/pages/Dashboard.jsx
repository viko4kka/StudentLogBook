import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";

function Dashboard() {
	return (
		<div className="flex bg-secondWhite h-screen">
			<Sidebar className="w-[330px] flex-shrink-0" />
			<div className="flex flex-col flex-grow">
				<Header />
			</div>
		</div>
	);
}

export default Dashboard;
