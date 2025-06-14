import React from "react";

const Hero = () => {
	return (
		<section className="relative overflow-visible isolate text-center py-12 sm:py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
			{/* Background Circles */}
			<div className="absolute inset-0 -z-10 flex items-center justify-center">
				{/* Ellipse 1 (No Glow Effect) */}
				<div className="absolute w-[800px] sm:w-[1000px] md:w-[1200px] top-[10px]">
					{/* Main Ellipse */}
					<img src="images/Ellipse1.png" alt="Background Circle 1" className="w-full opacity-70" loading="eager" />

					{/* Glow Overlay with soft edge mask */}
					<img
						src="images/GlowOverlay.png"
						alt="Glow Overlay"
						className="absolute top-0 left-0 w-full h-full object-cover opacity-70 mix-blend-screen pointer-events-none"
						style={{
							maskImage: "radial-gradient(circle at center, white 0%, transparent 100%)",
							WebkitMaskImage: "radial-gradient(circle at center, white 0%, transparent 100%)",
						}}
						loading="eager"
					/>
				</div>

				{/* Ellipse 2 (Counterclockwise) */}
				<div className="absolute w-[600px] sm:w-[800px] md:w-[1000px] top-[100px] sm:top-[150px] flex items-center justify-center">
					<div className="absolute w-full h-full rounded-full animate-glowOrbit z-0 mb-5"></div>
					<img
						src="images/Ellipse1.png"
						alt="Background Circle 2"
						className="relative w-full opacity-30 z-10"
						loading="eager"
					/>

					{/* Rotating Glow (Fire) */}
					<div className="absolute inset-0 animate-orbit-glow-reverse">
						<div className="absolute left-1/2 top-[-30px] sm:top-[-50px] w-40 sm:w-60 h-3 sm:h-4 -translate-x-1/2 rounded-full bg-gradient-to-tr from-yellow-300 via-purple-700 to-red-600 opacity-90 blur-2xl" />
					</div>
				</div>

				{/* Ellipse 3 (Clockwise) */}
				<div className="absolute w-[500px] sm:w-[700px] md:w-[900px] top-[250px] sm:top-[350px] flex items-center justify-center">
					{/* Ellipse Base */}
					<img
						src="images/Ellipse1.png"
						alt="Background Circle 3"
						className="relative w-full opacity-30 z-10"
						loading="eager"
					/>

					{/* Glow Overlay with masked edges */}
					<img
						src="images/GlowOverlay.png"
						alt="Glow Overlay"
						className="absolute top-0 left-0 w-full h-full object-cover opacity-70 mix-blend-screen pointer-events-none z-0"
						style={{
							maskImage: "radial-gradient(circle at center, white 0%, transparent 100%)",
							WebkitMaskImage: "radial-gradient(circle at center, white 0%, transparent 100%)",
						}}
						loading="eager"
					/>

					{/* Rotating Glow (Fire) */}
					<div className="absolute inset-0 animate-orbit-glow">
						<div className="absolute left-1/2 top-[-30px] sm:top-[-40px] w-32 sm:w-48 h-4 sm:h-5 -translate-x-1/2 rounded-full bg-gradient-to-tr from-yellow-300 via-purple-700 to-red-600 opacity-90 blur-2xl" />
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="relative z-10">
				{/* Badge */}
				<div className="mb-4 sm:mb-6 flex justify-center">
					<span className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-[#EDA9E8] bg-gradient-to-r from-[#CEAEF7] via-[#EDA9E8] to-[#F5B697] text-transparent bg-clip-text text-xs sm:text-sm font-semibold">
						Announcing our $1.4M Fundraise
					</span>
				</div>

				{/* Heading */}
				<div className="text-center mx-auto mb-16 sm:mb-24 md:mb-16 max-w-[300px] sm:max-w-[600px] md:max-w-[900px]">
					<img
						src="images/dd.svg"
						alt="Dimension - The new standard for collaboration"
						className="w-full"
						width={398}
						height={80}
						loading="eager"
					/>
				</div>

				{/* Input + Button */}
				<div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-[280px] sm:max-w-md mx-auto">
					<input
						type="email"
						placeholder="Email address..."
						className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 sm:py-3 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors"
						aria-label="Email address for waitlist"
					/>
					<button
						className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-2.5 sm:py-3 rounded-lg font-medium hover:opacity-90 transition-opacity whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-900"
						aria-label="Join waitlist"
					>
						Join waitlist
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
