import React from "react";

export default function Intro({intro, isBlack}) {
	return (
		<div className="intro" style={{background : isBlack ? "rgb(0 11 71)" : "#6D83F2"}}>
			<div className="intro-element">
				<h3 style={{fontWeight:"600",color: isBlack ? "white" : "white",}}>Hi, I am</h3>
				<h2 style={{color: isBlack ? "yellow" : "white",fontSize:"40px"}}>Subhojit Dey</h2>
				<h4 style={{fontWeight:400,color: isBlack ? "white" : "white",}}>
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
