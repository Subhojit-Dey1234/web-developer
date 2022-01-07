import "./App.css";
import "./Mobile.css";
import "./Tab.css";
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Web from "./components/Web";
import React , {useEffect, useState}  from "react";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";

function App() {
	const projects = React.useRef(null);
	const skills = React.useRef(null);
	const about = React.useRef(null);
	const home = React.useRef(null);
	const contact = React.useRef(null);

	const [ isBlack, setIsBlack ] = useState(true)
	return (
		<div>
			<div className="modes">
				<div onClick={()=>{setIsBlack(false)}}></div>
				<div onClick={()=>{setIsBlack(true)}}></div>
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
				<Skills isBlack={isBlack}/>
			</div>
			<div ref={about}>
				<About isBlack={isBlack}/>
			</div>
			<div ref={projects}>
				<Web isBlack={isBlack}/>
			</div>
			<div ref={contact}>
				<Contact isBlack={isBlack}/>
			</div>
		</div>
	);
}

export default App;
