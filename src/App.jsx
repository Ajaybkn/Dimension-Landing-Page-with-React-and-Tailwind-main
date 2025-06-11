import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ChatPreview from "./components/ChatPreview";
// import CollaborateAndTools from "./components/CollaborateAndTools";
import Footer from "./components/Footer";
import CollaborateAndTools from "./components/Features";

function App() {
	return (
		<div className="min-h-screen  text-white">
			<div className="">
				<Header />
				<Hero />
				<ChatPreview />
			</div>
			<CollaborateAndTools />
			<Footer />
		</div>
	);
}

export default App;
