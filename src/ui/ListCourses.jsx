import { BsThreeDotsVertical } from "react-icons/bs";

function ListCourses({ title, description, startDate, endDate }) {
	return (
		<div className=" w-full bg-hoverMainColor/10 flex flex-row items-center justify-between py-4 px-12 rounded-md   border-2 border-mainColor/30">
			<div className="flex flex-col ">
				<p className="text-secondBlack text-lg font-semibold">{title}</p>
				<p className="text-secondBlack text-sm px-4 mt-2">{description}</p>
				<p className="text-secondBlack text-sm px-4">
					Semestr letni 2024 | {new Date(startDate).toLocaleDateString()} -
					{new Date(endDate).toLocaleDateString()}
				</p>
			</div>
			<button className="text-secondBlack text-2xl hover:text-mainColor duration-300 transition p-2">
				<BsThreeDotsVertical />
			</button>
		</div>
	);
}

export default ListCourses;
