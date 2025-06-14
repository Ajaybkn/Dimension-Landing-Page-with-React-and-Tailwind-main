import React, { useEffect, useRef } from "react";
import { MessageCircle, Users, ChevronDown, Edit2, Smartphone, AlertCircle } from "lucide-react";

const ChatPreview = () => {
	const containerRef = useRef(null);
	const borderPathRef = useRef(null);
	const ledPathRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;
		const borderPath = borderPathRef.current;
		const ledPath = ledPathRef.current;

		if (container && borderPath && ledPath) {
			// Get the dimensions of the container div
			const { width, height } = container.getBoundingClientRect();
			const radius = 16; // Matches rounded-2xl (16px)
			const strokeWidth = 1;

			// Calculate the path for a rounded rectangle
			const d = `
        M ${radius} ${strokeWidth / 2}
        H ${width - radius}
        A ${radius} ${radius} 0 0 1 ${width - strokeWidth / 2} ${radius}
        V ${height - radius}
        A ${radius} ${radius} 0 0 1 ${width - radius} ${height - strokeWidth / 2}
        H ${radius}
        A ${radius} ${radius} 0 0 1 ${strokeWidth / 2} ${height - radius}
        V ${radius}
        A ${radius} ${radius} 0 0 1 ${radius} ${strokeWidth / 2}
        Z
      `;

			// Set the path for both the border and LED
			borderPath.setAttribute("d", d);
			ledPath.setAttribute("d", d);

			// Calculate the path length for the animation
			const pathLength = ledPath.getTotalLength();
			console.log("Path Length:", pathLength); // Debug: Log the path length
			ledPath.setAttribute("stroke-dasharray", `10 ${pathLength}`); // LED segment of 10px, gap of pathLength
			ledPath.style.setProperty("--path-length", pathLength);
		}
	}, []);

	return (
		<section className="px-6 pb-20 max-w-6xl mx-auto">
			<div className="relative">
				{/* Main div with background and blur */}
				<div ref={containerRef} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden">
					<div className="flex h-[500px]">
						{/* Sidebar */}
						<div className="w-64 bg-gray-900/80 border-r border-gray-800 opacity-25">
							<div className="p-4">
								<div className="flex items-center space-x-2 mb-6">
									<div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-orange-500 rounded"></div>
									<span className="font-semibold text-white">Dimension</span>
									<ChevronDown className="text-gray-400 ml-1" size={16} />
								</div>

								<div className="space-y-2">
									<div className="flex items-center space-x-3 text-gray-300 hover:text-white cursor-pointer">
										<MessageCircle size={16} />
										<span>Chat</span>
									</div>
									<div className="ml-6 space-y-1">
										<div className="flex items-center justify-between text-sm text-white bg-gray-800 rounded px-2 py-1">
											<span># dev</span>
										</div>
										<div className="text-sm text-gray-400 hover:text-white cursor-pointer"># chat</div>
									</div>
								</div>

								<div className="mt-4 opacity-1">
									<div className="flex items-center space-x-2 text-gray-300 hover:text-white cursor-pointer">
										<ChevronDown size={16} />
										<span>Direct messages</span>
									</div>
									<div className="ml-6 mt-2 space-y-2">
										{["Tejas", "Ari", "Landon"].map((name) => (
											<div key={name} className="flex items-center space-x-2">
												<div className="w-6 h-6 bg-gray-600 rounded-full"></div>
												<span className="text-sm text-gray-400 hover:text-white cursor-pointer">{name}</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>

						{/* Main Chat Area */}
						<div className="flex-1 bg-gray-900/50 relative">
							<div className="p-4 border-b border-gray-800 opacity-25">
								<div className="flex items-center justify-between">
									<div className="flex items-center space-x-2">
										<Users size={16} className="text-gray-400" />
										<span className="font-semibold text-white">Core Team</span>
									</div>
									<div className="flex items-center space-x-4">
										<span className="text-sm text-gray-400 opacity-15">Members • 3</span>
										<div className="flex -space-x-2">
											{["Tejas", "Ari", "Landon"].map((name) => (
												<div key={name} className="w-6 h-6 bg-gray-600 rounded-full border-2 border-gray-900"></div>
											))}
										</div>
									</div>
								</div>
							</div>

							<div className="relative h-[calc(100%-4rem)]">
								<div className="p-4 space-y-4 overflow-y-auto h-full">
									{/* Message 1 */}
									<div className="flex space-x-3">
										<div className="w-8 h-8 bg-gray-600 rounded-full"></div>
										<div className="flex-1">
											<div className="flex items-center space-x-2 mb-1">
												<span className="font-medium text-sm text-white">Tejas</span>
												<span className="text-xs text-gray-400">1:14 PM</span>
											</div>
											<p className="text-sm text-gray-300">
												Hey Ari! I wanted to check in with you on the next release and bug list. Do you think we'll be
												on track to share the latest with the team on Friday?
											</p>
										</div>
									</div>

									{/* Message 2 */}
									<div className="flex space-x-3">
										<div className="w-8 h-8 bg-gray-600 rounded-full"></div>
										<div className="flex-1">
											<div className="flex items-center space-x-2 mb-1">
												<span className="font-medium text-sm text-white">Ari</span>
												<span className="text-xs text-gray-400">1:15 PM</span>
											</div>
											<p className="text-sm text-gray-300 mb-2">
												There are a few items on the tasklist that needs to be addressed on iOS.
											</p>
											<div className="bg-gray-800 rounded-lg p-3 text-sm">
												<div className="flex items-center space-x-2 mb-2">
													<div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
													<span className="text-gray-300">Linear</span>
												</div>
												<p className="text-white mb-1">Follow up not highlighted in the block at the 2nd level</p>
												<p className="text-gray-400 text-xs">
													The 2nd level comment block does not highlight the follow up button.
												</p>
												<div className="flex items-center space-x-2 mt-2 text-xs text-gray-400">
													<Smartphone size={12} />
													<span>Mobile</span>
													<span>•</span>
													<span className="text-white">Ari</span>
													<span>•</span>
													<span>In Progress</span>
													<span className="text-red-400 flex items-center">
														<AlertCircle size={12} className="mr-1" />
														Urgent
													</span>
													<Edit2 size={12} className="ml-2" />
												</div>
											</div>
										</div>
									</div>

									{/* Message 3 */}
									<div className="flex space-x-3">
										<div className="w-8 h-8 bg-gray-600 rounded-full"></div>
										<div className="flex-1">
											<div className="flex items-center space-x-2 mb-1">
												<span className="font-medium text-sm text-white">Tejas</span>
												<span className="text-xs text-gray-400">1:16 PM</span>
											</div>
											<p className="text-sm text-gray-300 mb-2">
												Awesome! Make sure it looks as close to the Figma as possible :) Here's a link to our Figma file
												if you don't have access yet.
											</p>
											<div className="bg-purple-500/20 rounded-lg p-2 inline-block">
												<span className="text-purple-400 text-sm">🎨 Figma</span>
											</div>
										</div>
									</div>

									{/* Additional Messages to Force Scrolling */}
									<div className="flex space-x-3">
										<div className="w-8 h-8 bg-gray-600 rounded-full"></div>
										<div className="flex-1">
											<div className="flex items-center space-x-2 mb-1">
												<span className="font-medium text-sm text-white">Ari</span>
												<span className="text-xs text-gray-400">1:17 PM</span>
											</div>
											<p className="text-sm text-gray-300">
												Got it, I'll review the Figma file and make the necessary adjustments.
											</p>
										</div>
									</div>
									<div className="flex space-x-3">
										<div className="w-8 h-8 bg-gray-600 rounded-full"></div>
										<div className="flex-1">
											<div className="flex items-center space-x-2 mb-1">
												<span className="font-medium text-sm text-white">Landon</span>
												<span className="text-xs text-gray-400">1:18 PM</span>
											</div>
											<p className="text-sm text-gray-300">I can help with the iOS tasks if needed. Let me know!</p>
										</div>
									</div>
									<div className="flex space-x-3">
										<div className="w-8 h-8 bg-gray-600 rounded-full"></div>
										<div className="flex-1">
											<div className="flex items-center space-x-2 mb-1">
												<span className="font-medium text-sm text-white">Tejas</span>
												<span className="text-xs text-gray-400">1:19 PM</span>
											</div>
											<p className="text-sm text-gray-300">
												Thanks, Landon! That would be great. Let's sync up later today.
											</p>
										</div>
									</div>
								</div>
								{/* Fade effect covering the bottom 50% */}
								<div
									className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none z-10"
									style={{
										background: "linear-gradient(to bottom, transparent, #111827)",
									}}
								/>
							</div>
						</div>

						{/* Right Sidebar */}
						<div className="w-64 bg-gray-900/80 border-l border-gray-800 p-4">
							<div className="space-y-6">
								<div>
									<h3 className="font-medium text-white mb-3">Members • 3</h3>
									<div className="space-y-2">
										{["Tejas", "Ari", "Landon"].map((name) => (
											<div key={name} className="flex items-center space-x-2 text-sm text-gray-400">
												<div className="w-6 h-6 bg-gray-600 rounded-full"></div>
												<span>{name}</span>
											</div>
										))}
									</div>
								</div>

								<div className="opacity-15">
									<h3 className="font-medium text-white mb-3">Quick Access</h3>
									<div className="space-y-2">
										<div className="flex items-center space-x-2 text-sm text-gray-400">
											<div className="w-2 h-2 bg-gray-500 rounded-full"></div>
											<span>Database</span>
										</div>
										<div className="flex items-center space-x-2 text-sm text-gray-400">
											<div className="w-2 h-2 bg-gray-500 rounded-full"></div>
											<span>API Collection</span>
										</div>
									</div>
								</div>

								<div className="opacity-25">
									<h3 className="font-medium text-white mb-3">Tasks</h3>
									<div className="space-y-2">
										<div className="text-sm text-gray-400">IOS-211 - Selector fix</div>
										<div className="text-sm text-gray-400">Discord Auth</div>
									</div>
								</div>

								<div className="opacity-25">
									<h3 className="font-medium text-white mb-3">Deployment</h3>
									<div className="space-y-2">
										<div className="flex items-center space-x-2 text-sm">
											<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
											<span className="text-gray-400">Frontend</span>
										</div>
										<div className="flex items-center space-x-2 text-sm">
											<div className="w-2 h-2 bg-gray-500 rounded-full"></div>
											<span className="text-gray-400">Landing</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* SVG Overlay for Border and LED Animation */}
				<svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: "visible" }}>
					<path ref={borderPathRef} className="stroke-gray-800" fill="none" strokeWidth="1" />
					<path
						ref={ledPathRef}
						className="stroke-orange-400"
						fill="none"
						strokeWidth="1"
						style={{
							strokeDasharray: "400 2000",
							animation: "ledAnimation 6s linear infinite",
						}}
					/>
				</svg>
			</div>
		</section>
	);
};

// Add the animation keyframes
const style = document.createElement("style");
style.textContent = `
	@keyframes ledAnimation {
		0% {
			stroke-dashoffset: 2400;
		}
		100% {
			stroke-dashoffset: 0;
		}
	}
`;
document.head.appendChild(style);

export default ChatPreview;
