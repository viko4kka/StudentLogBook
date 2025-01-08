import { IoLogOutOutline } from "react-icons/io5";

function Sidebar({ menuItems }) {
	return (
		<div className="bg-white shadow-xl w-[330px] flex flex-col items-center justify-between h-screen">
			<div className="h-screen flex flex-col items-center justify-between py-16 px-12 w-full">
				<div className="flex flex-col items-start gap-y-3 w-full">
					<p className="text-5xl py-2">Logo</p>
					{menuItems.map((item, index) => (
						<div key={index} className="group w-full">
							<a
								href={item.path}
								className="flex flex-row items-center space-x-2 py-3 px-3 group-hover:bg-hoverMainColor/20 w-full transition-all duration-300">
								<span className="text-2xl px-3 text-secondBlack group-hover:text-mainColor transition-all duration-300 ">
									{item.icon}
								</span>
								<p className="text-2xl rounded text-secondBlack group-hover:text-mainColor transition-all duration-300">
									{item.name}
								</p>
							</a>
						</div>
					))}
				</div>

				<div className="group w-full">
					<div className="flex flex-row items-center space-x-2 py-3 px-3 group-hover:bg-hoverBgLogOut/70 w-full transition-all duration-300">
						<span className="text-2xl px-3 text-secondBlack group-hover:text-white transition-all duration-300">
							<IoLogOutOutline />
						</span>
						<p className="text-2xl rounded text-secondBlack group-hover:text-white transition-all duration-300">
							Log out
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
