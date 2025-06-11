import React from "react";

const Header = () => {
	const navItems = [
		{ label: "About", badge: null },
		{ label: "Careers", badge: "2" },
		{ label: "Blog", badge: null },
		{ label: "Changelog", badge: null },
	];
	return (
		<header className="w-full h-[87px]  border-b-[0.8px] border-transparent backdrop-blur-[6px] ">
			<div className="max-w-[1400px] h-full mx-auto flex items-center justify-between px-4">
				{/* Logo and brand name */}
				<div className="flex items-center gap-[13px]">
					<img
						className="w-[38px] h-[38px] object-cover"
						alt="Dimension logo"
						src="https://c.animaapp.com/mblreywe5sjw5i/img/q-715f17d1-2-2.png"
					/>
					<span className="font-sans font-semibold text-white text-base tracking-[0.16px]">Dimension</span>
				</div>

				{/* Navigation menu */}
				<nav className="flex items-center px-7 py-3 rounded-[51.72px] border-[0.8px] border-solid border-[#272842]">
					<div className="flex items-center gap-[46px]">
						{navItems.map((item, index) => (
							<div key={index} className="flex items-center gap-[3.57px]">
								<span className="font-sans font-medium text-[#adb2ca] text-sm tracking-[0.14px]">{item.label}</span>
								{item.badge && (
									<div className="w-[23px] h-[23px] bg-[#181832] rounded-[11.59px] flex items-center justify-center">
										<span className="font-sans font-medium text-white text-[12.5px] tracking-[0.12px]">
											{item.badge}
										</span>
									</div>
								)}
							</div>
						))}
					</div>
				</nav>

				{/* Join waitlist button */}
				<button className="h-9 px-4 py-2 rounded-lg bg-gradient-to-b from-[rgba(226,232,255,0)] to-[rgba(226,232,255,0.12)] hover:from-[rgba(226,232,255,0.05)] hover:to-[rgba(226,232,255,0.15)]">
					<span className="font-sans font-medium text-[#b4bad1] text-sm tracking-[0.42px]">Join waitlist</span>
				</button>
			</div>
		</header>
	);
};

export default Header;
