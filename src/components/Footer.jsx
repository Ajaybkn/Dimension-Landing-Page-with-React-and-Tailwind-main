import React from "react";

const Footer = () => {
	return (
		<footer className="border-t border-gray-800 py-12 px-6">
			<div className="max-w-[852px] mx-auto">
				<div className="grid md:grid-cols-4 gap-8">
					<div>
						<div className="flex items-center space-x-2 mb-4">
							<div className="w-8 h-8 bg-gradient-to-br from-dimension-purple to-dimension-orange rounded-lg flex items-center justify-center">
								<span className="text-white font-bold text-sm">D</span>
							</div>
							<span className="text-white font-semibold">Dimension</span>
						</div>
					</div>

					<div>
						<h4 className="font-semibold mb-4">Product</h4>
						<ul className="space-y-2">
							<li>
								<a href="#" className="text-gray-400 text-sm  hover:text-white transition-colors">
									Changelog
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
									Docs
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
									Documentation
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
									Blog
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-semibold mb-4">Company</h4>
						<ul className="space-y-2">
							<li>
								<a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
									About
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
									Careers
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
									Press
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-semibold mb-4">Contact</h4>
						<ul className="space-y-2">
							<li>
								<a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
									Discord
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
									Twitter
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
									Email
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
					<p>&copy; 2024 Dimension. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
