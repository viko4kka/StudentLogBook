import { Outlet } from "react-router-dom";
import { menuItemsStudent } from "../features/student-panel/StudentNav";
import Sidebar from "../ui/Sidebar";
import Header from "../ui/Header";

function StudentPanel() {
	return (
		<div className="flex bg-secondWhite h-screen">
			<Sidebar
				menuItems={menuItemsStudent}
				className="w-[330px] flex-shrink-0"
			/>

			<div className="flex flex-col flex-grow">
				<Header />
				<Outlet />
			</div>
		</div>
	);
}

export default StudentPanel;
