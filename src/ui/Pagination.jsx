import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

function Pagination({ count }) {
	const [searchParams, setSearchParams] = useSearchParams();
	const currentPage = !searchParams.get("page")
		? 1
		: Number(searchParams.get("page"));

	const pageCount = Math.ceil(count / PAGE_SIZE);

	function nextPage() {
		const next = currentPage === pageCount ? currentPage : currentPage + 1;

		searchParams("page", next);
		setSearchParams(searchParams);
	}

	function prevPage() {
		const prev = currentPage === pageCount ? currentPage : currentPage - 1;

		searchParams("page", prev);
		setSearchParams(searchParams);
	}

	if (pageCount <= 1) return null;

	return (
		<div className="flex flex-row justify-between items-center w-full px-4 py-2">
			<p>
				Showing <span>{(currentPage - 1) * PAGE_SIZE}</span> to{" "}
				<span>
					{currentPage === pageCount ? count : currentPage * PAGE_SIZE}
				</span>{" "}
				of <span>{count}</span>
			</p>
			<div className="flex flex-row space-x-2">
				<button
					onClick={prevPage}
					disabled={currentPage === 1}
					className="flex flex-row items-center px-1 py-0.5 text-secondBlack  hover:text-mainColor duration-300 transition">
					<span className="font-medium text-lg">
						<MdOutlineKeyboardArrowLeft />
					</span>
					Previous
				</button>
				<button
					onClick={nextPage}
					disabled={currentPage === pageCount}
					className="flex flex-row items-center px-1 py-0.5 text-secondBlack  hover:text-mainColor duration-300 transition">
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
