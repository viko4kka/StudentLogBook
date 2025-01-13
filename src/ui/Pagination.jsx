import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Pagination() {
	// return <p className="bg-red-500/50 w-full">PAGINACJA</p>;
	return (
		<div className="flex flex-row justify-between items-center w-full px-4 py-2">
			<p>1 page of 30 pages</p>
			<div className="flex flex-row space-x-2">
				<button className="flex flex-row items-center px-1 py-0.5 text-secondBlack  hover:text-mainColor duration-300 transition">
					<span className="font-medium text-lg">
						<MdOutlineKeyboardArrowLeft />
					</span>
					Prev
				</button>
				<button className="flex flex-row items-center px-1 py-0.5 text-secondBlack  hover:text-mainColor duration-300 transition">
					Next
					<span className="font-medium text-lg">
						<MdOutlineKeyboardArrowRight />
					</span>
				</button>
			</div>
		</div>
	);
}

export default Pagination;
