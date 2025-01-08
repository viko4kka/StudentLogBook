import { Outlet } from "react-router-dom";
import { menuItemsStudent } from "../features/student-panel/StudentNav";
import Sidebar from "../ui/Sidebar";

function StudentPanel() {
	return (
		<div className="bg-secondWhite">
			<Sidebar menuItems={menuItemsStudent} />
			<div>
				<Outlet />
			</div>
		</div>
	);
}

export default StudentPanel;
