import "./App.css";
import "./Mobile.css";
import "./Tab.css";
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Web from "./components/Web";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import loader1 from "./images/loader1.gif";

function App() {
	const projects = React.useRef(null);
	const skills = React.useRef(null);
	const about = React.useRef(null);
	const home = React.useRef(null);
	const contact = React.useRef(null);

	const [loading, setLoading] = React.useState(true);

	window.onload = function () {
		setTimeout(()=>{
			setLoading(false);
		},2000)
	};
	const [isBlack, setIsBlack] = useState(true);

	if (loading)
		return (
			<div
				style={{
					width: "100vw",
					height: "100vh",
					background: "black",
					display: "flex",
					flexDirection:"column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div>
					<img src={loader1} style={{width:"8vw"}} alt={"Loading"}/>
				</div>
				<div>
					<h1 style={{textAlign:"center",color:"white"}}>This is a loading page.....</h1>
				</div>
			</div>
		);
	return (
		<div>
			<div className="modes">
				<div
					onClick={() => {
						setIsBlack(false);
					}}
				></div>
				<div
					onClick={() => {
						setIsBlack(true);
					}}
				></div>
			</div>
			<div className="navbar">
				<NavBar
					home={home}
					skills={skills}
					about={about}
					projects={projects}
					contact={contact}
					isBlack={isBlack}
				/>
			</div>

			<div ref={home}>
				<Home projects={projects} isBlack={isBlack} />
			</div>

			<div ref={skills}>
				<Skills isBlack={isBlack} />
			</div>
			<div ref={about}>
				<About isBlack={isBlack} />
			</div>
			<div ref={projects}>
				<Web isBlack={isBlack} />
			</div>
			<div ref={contact}>
				<Contact isBlack={isBlack} />
			</div>
		</div>
	);
}

export default App;
