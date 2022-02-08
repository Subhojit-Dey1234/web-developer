import React from "react";
import Intro from "./Intro";
import profilePic_color from "../images/ProfilePic5.png";
import "../App.css";

export default function Home({ projects , isBlack}) {
	
	return (
		<div className="container" style={{background : isBlack ?  "linear-gradient(135deg,#03004e,#000)" : "white"}}>
			<div className="body" style={{background : isBlack ?  "linear-gradient(135deg,#03004e,#000)" : "white"}}>
				<div id="intro-anim">
					<Intro intro={projects} isBlack={isBlack}/>
				</div>
				<div
					className="profilepic-container"
				>
					<img src={profilePic_color} alt="profile" className="profile-image" />
				</div>
			</div>
            <div className="wave">
					<svg
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
					>
						<path
							d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
							class="shape-fill"
						></path>
					</svg>
				</div>
		</div>
	);
}
