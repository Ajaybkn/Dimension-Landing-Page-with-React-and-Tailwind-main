export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"dimension-purple": "#8B5CF6",
				"dimension-orange": "#F97316",
				"dimension-dark": "#0F0F23",
				"dimension-darker": "#0A0A1A",
			},
			fontFamily: {
				sans: ["Onest", "sans-serif"],
			},
			keyframes: {
				glowOrbit: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
				glowOrbitReverse: {
					"0%": { transform: "rotate(360deg)" },
					"100%": { transform: "rotate(0deg)" },
				},
			},
			animation: {
				glowOrbit: "glowOrbit 6s linear infinite",
				glowOrbitReverse: "glowOrbitReverse 6s linear infinite",
			},
		},
	},
	plugins: [],
};
