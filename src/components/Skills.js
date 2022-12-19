import React from "react";
import python from "../logos/python.svg";
import django from "../images/django (1).png";
import js from "../logos/js.svg";
import html from "../logos/html5.svg";
import css from "../logos/css3.svg";
import photoshop from "../images/photoshop.png";
import illustrator from "../images/illustrator.png";
import premier from "../images/premiere.png";
import nodelogo from '../images/node-js.png'
import reactlogo from '../images/react.png'
import xd from "../images/experience.png";
import "../App.css";

export default function Skills({ isBlack }) {
	return (
		<div
			className="skillsBackground"
			style={{ background: isBlack ? "black" : "white" }}
		>
			<h1
				style={{
					textAlign: "center",
					fontSize: "40px",
					textTransform: "uppercase",
					fontWeight: "initial",
					color: isBlack ? "#ffe69f" : "orange",
				}}
			>
				Skills
			</h1>
			<div
				className="skills"
				style={{ background: isBlack ? "black" : "white" }}
			>
				<div
					className="element"
					style={{
						background: isBlack
							? "hsla(0,0%,100%,.10196078431372549)"
							: "none",
						border: isBlack ? "none" : "#6D83F2 solid 3px",
					}}
				>
					<h3 style={{color: isBlack ? "white" : "black"}}>Web Development</h3>
					<div className="skillsPic">
						<img className="html" src={html} alt="lnag" />
						<img className="html" src={css} alt="lnag" />
						<img src={js} alt="lnag" />
						<img src={python} alt="lnag" />
						<img src={django} alt="lnag" />
						<img src={nodelogo} alt="lnag" />
						<img src={reactlogo} alt="lnag" />
					</div>
				</div>
				{/* <div className="element">
                <h3>AR App Development</h3>
                <img src={unity} alt="lnag" style={{position:"relative",bottom:"30px"}}/>
                <img src={csharp} alt="lnag"/>
            </div> */}
				<div
					className="element graphic_design"
					style={{
						background: isBlack
							? "hsla(0,0%,100%,.10196078431372549)"
							: "none",
							border: isBlack ? "none" : "#6D83F2 solid 3px",
					}}
				>
					<h3 style={{color: isBlack ? "white" : "black"}}>Graphic Design and Video Editing</h3>
					<div className="skillsPic">
						<img src={photoshop} alt="lnag" />
						<img src={illustrator} alt="lnag" />
						<img src={premier} alt="lnag" />
						<img src={xd} alt="lnag" />
					</div>
				</div>
			</div>
		</div>
	);
}
