import { BarLoader } from "react-spinners";
import { useGetUser } from "../hooks/useGetUser";

function Header() {
	const { data, isLoading, isError } = useGetUser();

	return (
		<div className="flex justify-end px-28 items-center w-full h-[80px] bg-white text-center ">
			{isLoading ? (
				<>
					<div className="flex items-center justify-center w-full h-full">
						<BarLoader color="#E97510" />
					</div>
				</>
			) : (
				<>
					<div className="text-2xl text-black ">
						Hello, {data.data.userName}
					</div>
				</>
			)}
		</div>
	);
}

export default Header;
