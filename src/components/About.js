import React from "react";
import profileAbout from "../images/ProfilePic3.png";
import "../App.css";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import github from "../images/github.png";

export default function About({ isBlack }) {
	return (
		<div>
			<div
				className="about"
				style={{
					background: isBlack ? "black" : "white",
					color: !isBlack ? "black" : "white",
					
				}}
			>
				<div>
					<div className="about-first">
						<h2
							className="about-header"
							style={{ color: isBlack ? "#ffe69f" : "orange" }}
						>
							About Me
						</h2>
						<h3 className="about-details" style={{ fontWeight: "400" }}>
							I am{" "}
							<b
								style={{
									color: isBlack ? "#ffe69f" : "orange",
									textTransform: "uppercase",
								}}
							>
								Subhojit Dey
							</b>
							. I am currently a student of IIT Kharagpur. I am a frontend web
							developer, UI designer
						</h3>
						<h3 className="about-details" style={{ fontWeight: "400" }}>
							I like building products.{" "}
						</h3>
						<h3 className="about-details" style={{ fontWeight: "400" }}>
							I am motivated to learn exciting things everyday and make my
							skills sharper so I can add value to the modern world.
						</h3>
						<button
							style={{
								background: isBlack ? "none" : "#3645b2",
								border: isBlack ? "2px solid #5500ffc2" : "none",
							}}
							className="button-resume"
						>
							Download My Resume
						</button>
						<div className="links">
							<a
								href="https://www.linkedin.com/in/subhojit-dey-09/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={linkedin} alt="linkedin" />
							</a>
							<a
								href="https://twitter.com/thesubhojitdey"
								target="_blank"
								rel="noreferrer"
							>
								<img src={twitter} alt="linkedin" />
							</a>
							<a
								href="https://github.com/Subhojit-Dey1234"
								target="_blank"
								rel="noreferrer"
							>
								<img src={github} alt="linkedin" />
							</a>
						</div>
					</div>
				</div>

				<div>
					<img className="about-image" src={profileAbout} alt="profile" />
				</div>
			</div>
		</div>
	);
}
