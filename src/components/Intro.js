import React from "react";

export default function Intro({intro, isBlack}) {
	return (
		<div className="intro" style={{background : isBlack ? "rgb(0 11 71)" : "rgb(182, 145, 255)"}}>
			<div className="intro-element">
				<h3 style={{fontWeight:"600"}}>Hi, I am</h3>
				<h2 style={{color:"yellow",fontSize:"40px"}}>Subhojit Dey</h2>
				<h4 style={{fontWeight:400}}>
					Web Developer, Web Designer
				</h4>
                <button className="button" onClick={()=>{
					intro.current.scrollIntoView({
						behavior: "smooth", 
					})
				}} >My Projects</button>
			</div>
		</div>
        // </Tilt>
	);
}
