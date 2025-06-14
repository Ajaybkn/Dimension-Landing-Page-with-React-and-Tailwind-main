import React from "react";

const Hero = () => {
	return (
		<section className="relative overflow-visible isolate text-center py-24 px-6 max-w-7xl mx-auto">
			{/* Background Circles */}
			<div className="absolute inset-0 -z-10 flex items-center justify-center">
				{/* Ellipse 1 (No Glow Effect) */}
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

				{/* Ellipse 2 (Counterclockwise) */}
				<div className="absolute w-[1000px] top-[150px] flex items-center justify-center">
					<div className="absolute w-full h-full rounded-full animate-glowOrbit z-0 mb-5 "></div>
					<img src="images/Ellipse1.png" alt="Background Circle 2" className="relative w-full opacity-30 z-10" />

					{/* Rotating Glow (Fire) */}
					<div className="absolute inset-0 animate-orbit-glow-reverse">
						<div className="absolute left-1/2 top-[-50px] w-60 h-4 -translate-x-1/2 rounded-full bg-gradient-to-tr from-yellow-300 via-purple-700 to-red-600 opacity-90 blur-2xl" />
					</div>
				</div>

				{/* Ellipse 3 (Clockwise) */}
				<div className="absolute w-[900px] top-[350px] flex items-center justify-center">
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

					{/* Rotating Glow (Fire) */}
					<div className="absolute inset-0 animate-orbit-glow">
						<div className="absolute left-1/2 top-[-40px] w-48 h-5 -translate-x-1/2 rounded-full bg-gradient-to-tr from-yellow-300 via-purple-700 to-red-600 opacity-90 blur-2xl" />
					</div>
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
