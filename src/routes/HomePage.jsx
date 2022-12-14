import React from "react";
import About from "../components/About";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Nav from "../components/Nav";
import Team from "../components/Team";
import { motion } from "framer-motion";
export default function HomePage() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{
				duration: 0.2,
				type: "spring",
				damping: 20,
				stiffness: 100,
			}}
		>
			<Nav />
			<Hero />
			<Info />
			<About />
			<Team />
			<ContactUs />
			<Footer />
		</motion.div>
	);
}
