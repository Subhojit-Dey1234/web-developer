import React from "react";
import "../App.css";

export default function NavBar({ home, skills, about, projects,contact }) {
	const [displayHam,setHam] = React.useState(false)

	React.useEffect(()=>{
		setHam(window.innerWidth > 950)
	},[])
	return (
		<div>
		<div className="pos" onClick={()=>{
			setHam(!displayHam)
		}}>
			<div className="ham"></div>
			<div className="ham"></div>
			<div className="ham"></div>
		</div>
		<div
			style={{
				display: displayHam ? "flex" : "none",
				position: "fixed",
				zIndex: "2000",
				top: 0,
				backgroundColor: "rgb(1 0 45 / 86%)",
			}}
			className="navbar-height"
		>
			<div style={{ width: "50vw" }}></div>
			<div
				className="hoverDiv"
				style={{
					display: "grid",
					gridTemplateColumns: "auto auto auto auto auto",
					width: "50vw",
					textAlign: "center",
					fontSize: "18px",
                    justifyContent:"space-evenly",
                    alignContent:"stretch"
				}}
			>
				<div style={{ position: "relative" }}>
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

				<div style={{ position: "relative" }}>
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

				<div style={{ position: "relative",cursor:"pointer" }}>
					<p onClick={() => {
							contact.current.scrollIntoView({
								behavior: "smooth",
							});
						}}className="hover-effect">Contact Me</p>
				</div>
			</div>
		</div>
		
		</div>
	);
}
