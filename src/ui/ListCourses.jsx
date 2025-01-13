import { BsThreeDotsVertical } from "react-icons/bs";

function ListCourses() {
	return (
		<div className=" w-full bg-hoverMainColor/10 flex flex-row items-center justify-between py-4 px-12 rounded-md   border-2 border-mainColor/60">
			<div className="flex flex-col ">
				<p className="text-secondBlack text-lg font-semibold">
					Matematyka duskretna
				</p>
				<p className="text-secondBlack text-sm px-4 mt-2">
					Basic course on mathematics
				</p>
				<p className="text-secondBlack text-sm px-4">
					Semestr letni 2024 | 1.10 - 31.12
				</p>
			</div>
			<button className="text-secondBlack text-2xl hover:text-mainColor duration-300 transition p-2">
				<BsThreeDotsVertical />
			</button>
		</div>
	);
}

export default ListCourses;
