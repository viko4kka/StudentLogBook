function Modal({ children, onClose }) {
	return (
		<div className="fixed inset-0 flex justify-center items-center bg-[var(--backdrop-color)] backdrop-blur-sm z-[1000]">
			<div className="absolute inset-0" onClick={onClose}></div>

			<div className="relative bg-white p-6 rounded-lg shadow-lg">
				{children}
			</div>
		</div>
	);
}

export default Modal;
