/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				secondWhite: "#F9F9F9",
				secondBlack: "#121212",
				mainColor: "#E97510",
				hoverMainColor: "#F3B279",
				firstGradientMainColor: "#ED6D1F",
			},
		},
	},
	plugins: [],
};
