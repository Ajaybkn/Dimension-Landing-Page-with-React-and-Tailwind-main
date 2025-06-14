export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				glow: "0 -10px 30px 10px rgba(249, 115, 22, 0.8), 0 -10px 50px 20px rgba(255, 255, 255, 0.5), 0 -10px 70px 30px rgba(236, 72, 153, 0.3)",
			},

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
				"orbit-glow": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
				"orbit-glow-reverse": {
					"0%": { transform: "rotate(360deg)" },
					"100%": { transform: "rotate(0deg)" },
				},
			},
			animation: {
				"orbit-glow": "orbit-glow 8s linear infinite",
				"orbit-glow-reverse": "orbit-glow-reverse 8s linear infinite",
			},
		},
	},
	plugins: [],
};
