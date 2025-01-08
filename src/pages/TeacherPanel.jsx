import Sidebar from "../ui/Sidebar";
import { menuItems } from "../features/teacher-panel/TeacherNav";
import { Outlet } from "react-router-dom";

function TeacherPanel() {
	return (
		<div className="bg-secondWhite">
			<Sidebar menuItems={menuItems} />
			<div>
				<Outlet />
			</div>
		</div>
	);
}

export default TeacherPanel;
