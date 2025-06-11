import React from "react";

const Hero = () => {
	return (
		<section className="relative overflow-visible isolate text-center py-24 px-6 max-w-7xl mx-auto">
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
