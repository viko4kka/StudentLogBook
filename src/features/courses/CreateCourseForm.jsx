import { useForm } from "react-hook-form";
import { useCreateCourse } from "./useCreateCourse";

function CreateCourseForm({ onCloseModal }) {
	const { createCourse, isLoading } = useCreateCourse();
	const { register, handleSubmit, reset } = useForm();

	function onSubmit({ title, description, startDate, endDate }) {
		createCourse(
			{ title, description, startDate, endDate },
			{
				onSettled: () => {
					reset();
					onCloseModal?.();
				},
			}
		);
	}

	return (
		<div className="bg-white w-full max-w-[420px] flex flex-col justify-center items-center rounded  py-8 px-12">
			<p className="text-secondBlack text-2xl font-semibold mb-6">
				Add new subject
			</p>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className=" flex flex-col items-center justify-between w-full gap-y-2">
				<div className="my-2 w-full group">
					<div className="flex items-center border-b-2 py-2 px-4 focus-within:border-mainColor transition duration-300">
						<input
							type="text"
							disabled={isLoading}
							placeholder="Subject's name"
							className="w-full focus:outline-none"
							{...register("title", { required: "This field is required" })}
						/>
					</div>
				</div>
				<div className="my-2 w-full group">
					<div className="flex items-center border-b-2 py-2 px-4 focus-within:border-mainColor transition duration-300">
						<input
							type="text"
							disabled={isLoading}
							placeholder="Subject's description"
							className="w-full focus:outline-none"
							{...register("description", {
								required: "This field is required",
							})}
						/>
					</div>
				</div>
				<div className="my-2 w-full group">
					<div className="flex items-center border-b-2 py-2 px-4 focus-within:border-mainColor transition duration-300">
						<input
							type="date"
							disabled={isLoading}
							placeholder="Start date"
							className="w-full focus:outline-none"
							{...register("startDate", { required: "This field is required" })}
						/>
					</div>
				</div>
				<div className="my-2 w-full group">
					<div className="flex items-center border-b-2 py-2 px-4 focus-within:border-mainColor transition duration-300">
						<input
							type="date"
							disabled={isLoading}
							placeholder="End date"
							className="w-full focus:outline-none"
							{...register("endDate", { required: "This field is required" })}
						/>
					</div>
				</div>
			</form>

			<div className="flex flex-row  justify-end space-x-2 mt-6  w-full">
				<button
					onClick={() => onCloseModal?.()}
					className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 transition font-medium duration-300 text-secondBlack tracking-wide">
					Cancel
				</button>
				<button
					type="button"
					disabled={isLoading}
					onClick={handleSubmit(onSubmit)}
					className="px-3 py-1 rounded bg-mainColor hover:bg-hoverMainColor transition font-medium duration-300 text-white tracking-wide">
					Create new subject
				</button>
			</div>
		</div>
	);
}

export default CreateCourseForm;
