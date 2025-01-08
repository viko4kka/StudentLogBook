import Sidebar from "../ui/Sidebar";
import { menuItems } from "../features/teacher-panel/TeacherNav";
import { Outlet } from "react-router-dom";
import Header from "../ui/Header";

function TeacherPanel() {
	return (
		<div className="flex bg-secondWhite h-screen">
			<Sidebar menuItems={menuItems} className="w-[330px] flex-shrink-0" />

			<div className="flex flex-col flex-grow">
				<Header />
				<Outlet />
			</div>
		</div>
	);
}

export default TeacherPanel;
