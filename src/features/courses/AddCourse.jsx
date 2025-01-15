import { useState } from "react";
import CreateCourseForm from "./CreateCourseForm";
import Modal from "../../ui/Modal";

function AddCourse() {
	const [isOpenModal, setIsOpenModal] = useState(false);

	const handleShowForm = () => {
		setIsOpenModal(!isOpenModal);
	};

	return (
		<div className="flex flex-row space-x-2 justify-end mt-2 px-4">
			<button
				onClick={handleShowForm}
				className="px-3 py-1 rounded bg-mainColor hover:bg-hoverMainColor transition font-medium duration-300 text-white tracking-wide">
				Add subjet
			</button>

			{isOpenModal && (
				<Modal onClose={() => setIsOpenModal(false)}>
					<CreateCourseForm onCloseModal={() => setIsOpenModal(false)}/>
				</Modal>
			)}
			
		</div>
	);
}

export default AddCourse;

