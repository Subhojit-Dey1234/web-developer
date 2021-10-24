import React from "react";
import profileAbout from "../images/ProfilePic3.png";
import "../App.css";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import github from "../images/github.png";

export default function About() {
	return (
		<div>
			<div
				style={{
					height: "100vh",
					display: "grid",
					gridTemplateColumns: "auto auto",
					alignSelf: "center",
					justifyItems: "center",
					justifySelf: "center",
					fontSize: "16px",
				}}
				className="about"
			>
				<div>
					<div
						style={{
							width: "65%",
							position: "relative",
							left: "55%",
							top: "45%",
							transform: "translate(-50%,-50%)",
						}}
					>
						<h2
							style={{ textAlign: "center", color: "yellow", fontSize: "40px",fontWeight:"350" , textTransform:"uppercase"}}
							className="about-header"
						>
							About Me
						</h2>
						<h3 className="about-details" style={{ fontWeight: "400", }}>
							I am <b style={{ color: "#ffe69f",textTransform: "uppercase", }}>Subhojit Dey</b>. I am
							currently a student of IIT Kharagpur. I am a frontend web
							developer, UI designer
						</h3>
						<h3 className="about-details" style={{ fontWeight: "400" }}>
							I like building products.{" "}
						</h3>
						<h3 className="about-details" style={{ fontWeight: "400" }}>
							I am motivated to learn exciting things everyday and make my
							skills sharper so I can add value to the modern world.
						</h3>
						<button className="button-resume">Download My Resume</button>
						<div>
							<a
								href="https://www.linkedin.com/in/subhojit-dey-09/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									style={{ width: "12%", margin: "20px" }}
									src={linkedin}
									alt="linkedin"
								/>
							</a>
							<a
								href="https://twitter.com/thesubhojitdey"
								target="_blank"
								rel="noreferrer"
							>
								<img
									style={{ width: "12%", margin: "20px" }}
									src={twitter}
									alt="linkedin"
								/>
							</a>
							<a
								href="https://github.com/Subhojit-Dey1234"
								target="_blank"
								rel="noreferrer"
							>
								<img
									style={{ width: "12%", margin: "20px" }}
									src={github}
									alt="linkedin"
								/>
							</a>
						</div>
					</div>
				</div>

				<div>
					<img
						src={profileAbout}
						alt="profile"
						style={{
							width: "50%",
							alignSelf: "center",
							position: "relative",
							left: "50%",
							top: "50%",
							transform: "translate(-50%,-50%)",
						}}
					/>
				</div>
			</div>
		</div>
	);
}
