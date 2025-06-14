import React from "react";
import { Settings, Users } from "lucide-react";

// Data for user cursors (from Features)
const userCursors = [
	{
		name: "Necati",
		position: { top: "86px", left: "388px" },
		background: "linear-gradient(180deg,rgba(31,33,56,1) 0%,rgba(57,57,82,1) 100%)",
		cursorSrc: "https://c.animaapp.com/mblreywe5sjw5i/img/iconamoon-cursor-fill.svg",
	},
	{
		name: "Tejas",
		position: { top: "109px", left: "84px" },
		background: "linear-gradient(180deg,rgba(41,32,72,1) 0%,rgba(62,53,92,1) 100%)",
		cursorSrc: "https://c.animaapp.com/mblreywe5sjw5i/img/iconamoon-cursor-fill-1.svg",
	},
	{
		name: "Ogus",
		position: { top: "173px", left: "317px" },
		background: "linear-gradient(180deg,rgba(41,32,72,1) 0%,rgba(62,53,92,1) 100%)",
		cursorSrc: "https://c.animaapp.com/mblreywe5sjw5i/img/iconamoon-cursor-fill-1.svg",
	},
];

// Tool icons (from previous iterations, updated with placeholders)
const toolIcons = [
	{
		name: "Linear",
		icon: (
			<img
				className="w-6 h-6 object-contain invert"
				alt="Linear icon"
				src="/images/ball.png"
				onError={(e) => (e.target.src = "https://via.placeholder.com/24/FFFFFF/000000?text=L")}
			/>
		),
	},
	{
		name: "GitHub",
		icon: (
			<img
				className="w-6 h-6 object-contain invert"
				alt="GitHub icon"
				src="/images/gith.png"
				onError={(e) => (e.target.src = "https://via.placeholder.com/24/FFFFFF/000000?text=GH")}
			/>
		),
	},
	{
		name: "Cloud",
		icon: (
			<img
				className="w-6 h-6 object-contain invert"
				alt="Cloud icon"
				src="/images/cloud.png"
				onError={(e) => (e.target.src = "https://via.placeholder.com/24/FFFFFF/000000?text=C")}
			/>
		),
	},
	{
		name: "Postman",
		icon: (
			<img
				className="w-6 h-6 object-contain invert"
				alt="Postman icon"
				src="/images/unk.png"
				onError={(e) => (e.target.src = "https://via.placeholder.com/24/FFFFFF/000000?text=P")}
			/>
		),
	},
	{
		name: "Notion",
		icon: (
			<img
				className="w-6 h-6 object-contain invert"
				alt="Notion icon"
				src="/images/prism.png"
				onError={(e) => (e.target.src = "https://via.placeholder.com/24/FFFFFF/000000?text=N")}
			/>
		),
	},
	{
		name: "Google",
		icon: (
			<img
				className="w-6 h-6 object-contain invert"
				alt="Google icon"
				src="/images/goog.png"
				onError={(e) => (e.target.src = "https://via.placeholder.com/24/FFFFFF/000000?text=G")}
			/>
		),
	},
	{
		name: "Railway",
		icon: (
			<img
				className="w-6 h-6 object-contain invert"
				alt="Railway icon"
				src="/images/verc.png"
				onError={(e) => (e.target.src = "https://via.placeholder.com/24/FFFFFF/000000?text=R")}
			/>
		),
	},
	{
		name: "Figma",
		icon: (
			<img
				className="w-6 h-6 object-contain invert"
				alt="Figma icon"
				src="/images/figm.png"
				onError={(e) => (e.target.src = "https://via.placeholder.com/24/FFFFFF/000000?text=F")}
			/>
		),
	},
];

// Left Side Component (Features)
const Features = () => {
	return (
		<div className="relative w-full max-w-[588px] h-[540px] rounded-[16.7px] overflow-hidden border-solid border border-[#1c1d36] mb-10">
			{/* Top section with title and floating icons */}
			<div className="relative w-full pt-7 pl-7">
				<div className="relative w-full h-[156px]">
					<div className="relative w-[380px] h-[107px]">
						<img className="w-[29px] h-[29px]" alt="Frame" src="https://c.animaapp.com/mblreywe5sjw5i/img/frame.svg" />

						<div className="flex flex-col w-[380px] items-start gap-[7px] mt-[37px]">
							<div className="relative self-stretch  font-semibold text-[#e2e8ff] text-[18.7px] tracking-[0] leading-normal">
								Collaborate on everything.
							</div>

							<div className="relative self-stretch  font-medium text-[#7c7f99] text-[16.6px] tracking-[0] leading-normal">
								From deployments to tasks, work with your team every step of the way.
							</div>
						</div>
					</div>

					{/* Decorative floating icons/elements */}
					<div className="absolute top-0 right-0 w-[250px] h-[156px]">
						{Array.from({ length: 30 }).map((_, index) => (
							<div
								key={index}
								className="absolute w-[30px] h-[30px] opacity-50"
								style={{
									top: `${Math.floor(Math.random() * 120)}px`,
									left: `${Math.floor(Math.random() * 220) + 30}px`,
								}}
							/>
						))}
					</div>
				</div>
			</div>

			{/* Bottom section with code editor */}
			<div className="w-[570px] h-[353px] mx-auto mt-2 bg-[#0c0c26] rounded-[16.7px] overflow-hidden border-solid border border-[#2f2f49]">
				<div className="p-0 relative">
					{/* Blur effect */}
					<div className="absolute w-[260px] h-[230px] top-[388px] left-[-197px] bg-[#ffffff30] blur-[244.48px]" />

					<div className="relative w-full h-[366px] group">
						{/* Code editor image */}
						<img
							className="w-[521px] h-[259px] absolute top-0 right-0 object-cover"
							alt="Code editor"
							src="https://c.animaapp.com/mblreywe5sjw5i/img/image-40.png"
						/>

						{/* Error highlight in code */}
						{/* <div className="absolute w-[188px] h-[25px] top-[58px] left-[300px] bg-[#ff00004f] rounded-lg border border-solid border-[#850622] " /> */}
						<div className="relative group">
							<div className="absolute w-[188px] h-[25px] top-[58px] left-[300px] bg-[#ff00004f] rounded-lg border border-solid border-[#850622] transition-all duration-300 group-hover:left-[103px] group-hover:w-[100px] group-hover:bg-[#00ff004f]" />
						</div>

						{/* User cursors */}
						{userCursors.map((user, index) => (
							<div
								key={index}
								className={`absolute transition-all duration-300 ${
									user.name === "Necati"
										? "left-[388px] group-hover:left-[200px] top-[86px] h-[36px] w-[86px]"
										: user.name === "Tejas"
										? "left-[84px] group-hover:left-[300px] top-[109px] h-[37px] w-[79px]"
										: user.name === "Ogus"
										? "left-[317px] group-hover:left-[150px] top-[173px] h-[37px] w-[79px]"
										: ""
								}`}
							>
								<div className="relative h-full">
									<div
										// className="inline-flex items-center justify-center gap-2.5 px-4 py-1 absolute rounded-[70px] border-none"
										className={`inline-flex items-center justify-center gap-2.5 px-4 py-1 absolute rounded-[70px] border-none transition-all duration-300
  ${
		user.name === "Necati"
			? "left-[10px] group-hover:left-[5px]"
			: user.name === "Tejas"
			? "left-[11px] group-hover:left-[20px]"
			: user.name === "Ogus"
			? "left-[12px] "
			: ""
	}`}
										style={{
											top: user.name === "Necati" ? "11px" : "12px",
											// left: user.name === "Necati" ? "10px" : "11px",
											background: user.background,
										}}
									>
										<div className="relative w-fit mt-[-1.00px] font-medium text-[#ced2e8] text-sm tracking-[0] leading-normal">
											{user.name}
										</div>
									</div>

									<img className="absolute w-[18px] h-[19px] top-0 left-0" alt="Cursor" src={user.cursorSrc} />
								</div>
							</div>
						))}

						{/* Bottom info bar */}
						<div className="absolute w-full h-[94px] bottom-0 left-0 shadow-[0px_0px_4px_#00000040]">
							<div className="relative w-full h-[94px] rounded-[8px_8px_15px_15px] border-solid border border-[#2f2f49] bg-[#0d0d27] bg-opacity-80">
								<div className="flex items-end gap-1.5 absolute top-[23px] left-[163px]">
									<img
										className="relative w-[21px] h-5"
										alt="Frame"
										src="https://c.animaapp.com/mblreywe5sjw5i/img/frame-1.svg"
									/>

									<div className="relative w-fit font-semibold text-white text-base tracking-[0.48px] leading-normal whitespace-nowrap">
										Collaborative debugging.
									</div>
								</div>

								<div className="absolute top-[46px] left-[116px] font-medium text-[#7a7d96] text-sm tracking-[0] leading-normal">
									Share and collaboratively debug code - together.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

// Right Side Component (MainContentSection with Rotating Icons)
const MainContentSection = () => {
	return (
		<div className="w-full max-w-[384px] rounded-[10.15px] border border-[#1c1d36]">
			<div className="p-5">
				<div className="flex flex-col gap-4">
					<div className="flex items-start gap-3">
						<Settings className="text-orange-500" size={24} />
						<div className="flex flex-col gap-[7px]">
							<h3 className="font-semibold text-[#e2e8ff] text-[18.7px]">Crafted for your favorite tools</h3>
							<p className="font-medium text-[#7c7f99] text-base">
								Connect your tools - we'll handle the rest. Many integrations, with more to come.
							</p>
						</div>
					</div>

					<div className="relative w-full h-[359px] mt-4 rounded-[10.15px] overflow-hidden border-[#1c1d36] border bg-[#1C1D36] opacity-60 ">
						<div className="absolute w-full h-full flex items-center justify-center central-anim">
							{/* Central Logo */}
							<div className="w-16 h-16 bg-gradient-to-br rounded-full flex items-center justify-center z-10">
								<img
									className="w-[38px] h-[38px] object-cover"
									alt="Dimension logo"
									src="https://c.animaapp.com/mblreywe5sjw5i/img/q-715f17d1-2-2.png"
								/>
							</div>

							{/* Rotating Icons */}
							<div className="absolute w-48 h-52 animate-spin-slow">
								{toolIcons.map((tool, index) => {
									const angle = (index / toolIcons.length) * 360; // Calculate angle for each icon
									const radius = 96; // Radius of the circular path (half of w-48)
									const x = radius * Math.cos((angle * Math.PI) / 180);
									const y = radius * Math.sin((angle * Math.PI) / 180);

									return (
										<div
											key={tool.name}
											className="absolute w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center"
											style={{
												transform: `translate(${x}px, ${y}px)`,
												left: "50%",
												top: "50%",
												marginLeft: "-24px", // Center the icon (half of w-12)
												marginTop: "-24px", // Center the icon (half of h-12)
											}}
										>
											{tool.icon}
										</div>
									);
								})}
							</div>

							{/* Background Circular Lines (for visual effect) */}
							<div className="absolute w-56 h-56 border border-gray-800 rounded-full opacity-50"></div>
							<div className="absolute w-64 h-64 border border-gray-800 rounded-full opacity-30"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

// Parent Component to Combine Both
const CollaborateAndTools = () => {
	return (
		<section className=" pl-32 ">
			<div>
				<div className="">
					<img src="/images/lines.png" alt="Dimension" />
				</div>
				<div className="relative bottom-[450px] right-0">
					<div className="relative">
						<img src="/images/dots1.png" alt="Dimension" className="your-existing-classes" aria-hidden="true" />
						{/* Example: glowing dot at x=40px, y=30px */}
						<div
							className="absolute"
							style={{
								left: 40,
								top: 30,
								width: 16,
								height: 16,
								borderRadius: "50%",
								background: "radial-gradient(circle, #f472b6 0%, transparent 70%)",
								filter: "blur(2px)",
								opacity: 0.8,
								pointerEvents: "none",
							}}
						/>
						{/* Repeat for more glowing dots */}
					</div>
				</div>
			</div>
			<div className="max-w-6xl mt-[-120px] mx-auto">
				<h3 className="text-white mb-0 text-[48px] font-semibold">
					Build software{" "}
					<span className="bg-[linear-gradient(90deg,_#FFAC87_49.52%,_#FFDAA5_100%)] bg-clip-text text-transparent">
						faster, together.
					</span>
				</h3>
				<p className="mb-[90px] text-[#999DB6] text-[18px] font-medium">The most complete developer experience.</p>
				<div className="grid md:grid-cols-2 gap-6 items-start">
					{/* Left Side: Features */}
					<Features />

					{/* Right Side: MainContentSection */}
					<MainContentSection />
				</div>
			</div>
		</section>
	);
};

export default CollaborateAndTools;
