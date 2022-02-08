import React from "react";
import "../App.css";
import Projects from "./Projects";
import image from "../images/Website.png";
import image1 from "../images/web2.png";
import agri1 from "../images/agri1.gif";
import hack1 from "../images/hack1.gif";
import schooler from "../images/schooler.png";
import covid from "../images/covid.png";
import tsg from "../images/tsg.png";

export default function Web({ isBlack }) {
	return (
		<div className="Web" style={{ background: isBlack ? "black" : "white" }}>
			<h1
				style={{
					textAlign: "center",
					fontSize: "35px",
					fontWeight: "normal",
					textTransform: "uppercase",
					color: isBlack ? "#ffe69f" : "orange",
				}}
			>
				My Projects
			</h1>
			<Projects
				isBlack={isBlack}
				name={"Hackathon ( IIT Kharagpur )"}
				imageSrc={[tsg]}
				link={"https://hackathon-tsg.herokuapp.com/"}
				language={"React JS, Mongodb, Node JS, Express JS"}
				details={
					"It is a hackathon Project built with Node JS, Express JS, Mongodb, React JS ( MERN STACK ). It is built for uploading achievements, events and many news in the portal and helping the growth in student community"
				}
			/>
			<Projects
				imageSrc={[image]}
				name={"Music Upload Website"}
				details={
					"Website includes a feature of playing, uploading, deleting music or audio format."
				}
				language={
					"Building the frontend with HTML, CSS and JavaScript and the backend with a Python framework, Django"
				}
				link={"https://github.com/Subhojit-Dey1234/musicupload"}
				isBlack={isBlack}
			/>
			<Projects
				isBlack={isBlack}
				imageSrc={[hack1]}
				name={"A Website for Hackathon ( Designed and Built the Frontend )"}
				details={
					"It is a hackathon project for Accenture. The main moto was to a platform where people can support and help financialy backward people and help them bring them in the normal race."
				}
				language={"Frontend - React Js Backend- Node JS"}
				link={"https://accenture-hackathon-123.herokuapp.com/"}
			/>
			{/* <Projects
			imageSrc = {image2}
			classname={"Spider"}
			name = {"Augmented Reality App"}
			details = {
				"An Augmented Reality App with spawning and rotating a object in the AR App"
			}
			language = {
				"C# and Software- Unity3D & SDK used -> AR-Foundation and AR-Core"
			}
			link ={
				"https://github.com/Subhojit-Dey1234/ARProject1-Solar-System-"
			}
			/>
			<Projects
			imageSrc = {image3}

			name = {"Augmented Reality Shooting Game"}
			details = {
				"An Augmented Reality App shooting and killing the Virus present in the room"
			}
			language = {
				"C# and Software- Unity3D & SDK used -> AR-Foundation and AR-Core"
			}
			link ={
				"https://github.com/Subhojit-Dey1234/ARBajaj"
			}
			/> */}
			<Projects
				isBlack={isBlack}
				name={"Worked as an Intern in a EdTech Startup- Schooler Pro"}
				imageSrc={[schooler]}
				language={"React JS"}
				link={"https://www.schoolerpro.com/"}
				details={"Build the platform and added new features in the website "}
			/>
			<Projects
				isBlack={isBlack}
				name={"An Landing Page"}
				imageSrc={[agri1]}
				link={"https://github.com/Subhojit-Dey1234/Agriculture"}
				language={"Html,CSS"}
				details={"Build with Html and Css"}
			/>
			<Projects
				isBlack={isBlack}
				imageSrc={[image1]}
				name={"Ecommerce Frontend"}
				details={"A Ecommerce Website made with Html, CSS and JavaScript"}
				language={"Html, CSS and JavaScript"}
				link={"https://subhojit-dey1234.github.io/Ecommerce/"}
			/>
			<Projects
				isBlack={isBlack}
				name={"A Covid Tracker"}
				imageSrc={[covid]}
				link={"https://subhojit-dey1234.github.io/covid19chart/"}
				language={"Html,CSS"}
				details={
					"Build with Html ,Css and Chart JS. Integrating live data from API"
				}
			/>
		</div>
	);
}
