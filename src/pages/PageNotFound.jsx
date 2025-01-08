function PageNotFound() {
	return (
		<div className="flex flex-col items-center justify-center h-screen gap-10">
			<div className="flex flex-col items-center justify-center gap-y-4">
				<p className="text-2xl text-secondBlack font-bold">
					Oop!
					<span className="bg-gradient-to-r from-hoverMainColor to-firstGradientMainColor bg-clip-text text-transparent mx-1">
						404
					</span>
					Error!
				</p>
				<p className="text-5xl text-secondBlack font-medium">Page Not Found</p>
			</div>
			<button className="mt-6 text-xl px-14 py-1.5 before:ease relative overflow-hidden bg-gradient-to-r rounded-full font-medium  from-hoverMainColor to-firstGradientMainColor text-secondWhite shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40">
				Back home &#x279D;
			</button>
		</div>
	);
}

export default PageNotFound;
