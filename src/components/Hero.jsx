import React from "react";

const Hero = () => {
	return (
		<section className="relative overflow-visible isolate text-center py-24 px-6 max-w-7xl mx-auto">
			{/* Background Circles */}
			<div className="absolute inset-0 -z-10 flex items-center justify-center">
				{/* Ellipse 1 with Superimposed Glow */}
				<div className="absolute w-[1200px] top-[10px]">
					{/* Main Ellipse */}
					<img src="images/Ellipse1.png" alt="Background Circle 1" className="w-full opacity-70" />

					{/* Glow Overlay with soft edge mask */}
					<img
						src="images/GlowOverlay.png"
						alt="Glow Overlay"
						className="absolute top-0 left-0 w-full h-full object-cover opacity-70 mix-blend-screen pointer-events-none"
						style={{
							maskImage: "radial-gradient(circle at center, white 0%, transparent 100%)",
							WebkitMaskImage: "radial-gradient(circle at center, white 0%, transparent 100%)",
						}}
					/>
				</div>

				{/* Ellipse 2 - With Rotating Glow */}
				<div className="absolute w-[1000px] top-[150px] flex items-center justify-center">
					<div className="absolute w-full h-full rounded-full animate-glowOrbit z-0 ">
						<div className="w-full h-full relative ">
							<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full opacity-80 blur-2xl bg-gradient-to-tr from-orange-400 via-white to-pink-300 "></div>
						</div>
					</div>
					<img src="images/Ellipse1.png" alt="Background Circle 2" className="relative w-full opacity-30 z-10" />
				</div>

				{/* Ellipse 3 with Superimposed Glow and Rotating Light */}
				<div className="absolute w-[900px] top-[350px] flex items-center justify-center">
					{/* Rotating Glow Animation */}
					<div className="absolute w-full h-full rounded-full animate-glowOrbitReverse z-0">
						<div className="w-full h-full relative">
							<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full opacity-80 blur-2xl bg-gradient-to-tr from-white via-white to-blue-300"></div>
						</div>
					</div>

					{/* Ellipse Base */}
					<img src="images/Ellipse1.png" alt="Background Circle 3" className="relative w-full opacity-30 z-10" />

					{/* Glow Overlay with masked edges */}
					<img
						src="images/GlowOverlay.png"
						alt="Glow Overlay"
						className="absolute top-0 left-0 w-full h-full object-cover opacity-70 mix-blend-screen pointer-events-none z-0"
						style={{
							maskImage: "radial-gradient(circle at center, white 0%, transparent 100%)",
							WebkitMaskImage: "radial-gradient(circle at center, white 0%, transparent 100%)",
						}}
					/>
				</div>
			</div>

			{/* Main Content */}
			<div className="relative z-10">
				{/* Badge */}
				<div className="mb-6 flex justify-center">
					<span className="px-6 py-2 rounded-full border border-[#EDA9E8] bg-gradient-to-r from-[#CEAEF7] via-[#EDA9E8] to-[#F5B697] text-transparent bg-clip-text text-sm font-semibold">
						Announcing our $1.4M Fundraise
					</span>
				</div>

				{/* Heading */}
				<div className="text-center mb-6">
					<div className="font-onest font-medium text-[72px] leading-[72px] text-white">Dimension is the new</div>
					<div className="font-onest font-medium text-[72px] leading-[72px] bg-[linear-gradient(90deg,_#B67DFC_0%,_#EF84D5_22.6%,_#FFAC87_49.52%,_#FFDAA5_100%)] bg-clip-text text-transparent">
						standard for collaboration
					</div>
				</div>

				{/* Subtitle */}
				<p className="text-[#A3A8C0] text-lg mb-8 max-w-2xl mx-auto">Chat, code, cloud, deployments, and more.</p>

				{/* Input + Button */}
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
					<input
						type="email"
						placeholder="Email address..."
						className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
					/>
					<button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
						Join waitlist
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
