import React from "react";
import "../App.css";

export default function NavBar({ home, skills, about, projects, contact, isBlack }) {
	const [displayHam, setHam] = React.useState(true);

	// React.useEffect(() => {
	// 	setHam(window.innerWidth > 950);
	// }, []);
	return (
		<div style={{minHeight:"10vh",width:"100vw"}}>
			<div
				className="pos"
				onClick={() => {
					setHam(!displayHam);
				}}
			>
				<div style={{backgroundColor:isBlack ? "white" : "black"}} className="ham"></div>
				<div style={{backgroundColor:isBlack ? "white" : "black"}} className="ham"></div>
				<div style={{backgroundColor:isBlack ? "white" : "black"}} className="ham"></div>
			</div>
			<div className="navbar-height" style={{background : isBlack ? "rgb(0 0 143)" : "rgba(182, 145, 255,1)", color:isBlack ? "white"  : "white"}}>
				<div></div>
				<div className="hoverDiv" style={{display: displayHam ? "flex" : "none",background : isBlack ? "rgb(0 0 143)" : "rgba(182, 145, 255,1)"}}>
					<div>
						<p
							className="hover-effect"
							onClick={() => {
								home.current.scrollIntoView({
									behavior: "smooth",
								});
							}}
							style={{ cursor: "pointer" }}
						>
							Home
						</p>
					</div>

					<div>
						<p
							className="hover-effect"
							onClick={() => {
								about.current.scrollIntoView({
									behavior: "smooth",
								});
							}}
							style={{ cursor: "pointer" }}
						>
							About Me
						</p>
					</div>

					<div style={{ position: "relative" }}>
						<p
							className="hover-effect"
							onClick={() => {
								projects.current.scrollIntoView({
									behavior: "smooth",
								});
							}}
							style={{ cursor: "pointer" }}
						>
							Projects
						</p>
					</div>
					<div style={{ position: "relative" }}>
						<p
							className="hover-effect"
							onClick={() => {
								skills.current.scrollIntoView({
									behavior: "smooth",
								});
							}}
							style={{ cursor: "pointer" }}
						>
							Skills
						</p>
					</div>

					<div style={{ position: "relative", cursor: "pointer" }}>
						<p
							onClick={() => {
								contact.current.scrollIntoView({
									behavior: "smooth",
								});
							}}
							className="hover-effect"
						>
							Contact Me
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
