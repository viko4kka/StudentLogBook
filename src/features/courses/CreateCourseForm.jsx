import { useForm } from "react-hook-form";
import { useCreateCourse } from "./useCreateCourse";
import { useEffect } from "react";
import { useEditCourse } from "./useEditCourse";

function CreateCourseForm({ onCloseModal, initialData }) {
	const { createCourse, isLoading: isLoadingCreate } = useCreateCourse();
	const { isLoading: isLoadingEdit, updateCourse } = useEditCourse();
	const { register, handleSubmit, reset, setValue } = useForm();
	const isEditForm = initialData?.id !== undefined;
	const isLoading = isLoadingEdit || isLoadingCreate;

	console.log(isEditForm);

	function onSubmit({ title, description, startDate, endDate }) {
		if (isEditForm) {
			updateCourse(
				{ id: initialData.id, title, description, startDate, endDate },
				{
					onSettled: () => {
						reset();
						onCloseModal?.();
					},
				}
			);
		} else {
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
	}

	console.log(initialData);

	useEffect(() => {
		if (initialData) {
			setValue("title", initialData.title);
			setValue("description", initialData.description);
			setValue(
				"startDate",
				new Date(initialData.startDate).toISOString().split("T")[0]
			); // Konwersja na YYYY-MM-DD
			setValue(
				"endDate",
				new Date(initialData.endDate).toISOString().split("T")[0]
			); // Konwersja na YYYY-MM-DD
		}
	}, [initialData, setValue]);

	return (
		<div className="bg-white w-full max-w-[420px] flex flex-col justify-center items-center rounded  py-8 px-12">
			<p className="text-secondBlack text-2xl font-semibold mb-6">
				{isEditForm ? "Edit subject" : "Add new subject"}
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
					{isEditForm ? "Edit subject" : "Create new subject"}
				</button>
			</div>
		</div>
	);
}

export default CreateCourseForm;
