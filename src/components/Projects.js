import React from "react";
import "../App.css";
import loader1 from "../images/loader1.gif";

export default function Projects({
	imageSrc,
	name,
	details,
	language,
	link,
	classname,
	isBlack,
	special
}) {
	const [loading, setLoading] = React.useState(true);
	return (
		<div className="grid-project">
			{imageSrc.map((imagesrc) => (
				<img
					src={loading ? loader1 : imagesrc}
					onLoad={() => {
						setLoading(false);
					}}
					className="project-image"
					alt="project"
				/>
			))}
			<div
				style={{
					backgroundColor: isBlack ? "#ffffff17" : "",
					color : isBlack ? "white" : "black" , 
					border : isBlack ? "none" : "#6D83F2 solid 3px"
				}}
				className={"grid-translate"}
			>
				<div className="project-details">
					<h2
						style={{
							textTransform: "uppercase",
							fontWeight: "initial",
							color: isBlack ? "#ffffb9" : "orange" ,
						}}
					>
						Name : {name}
					</h2>
					<p>
						<b style={{ fontWeight: "500" }}>Details</b> : {details}
					</p>
					{special && <p>
						<b style={{ fontWeight: "800", textTransform:"uppercase" }}>Won Prize for Best Events Page 🏆</b>
					</p>}
					<p>
						<b style={{ fontWeight: "500" }}>Language</b>: {language}
					</p>
					
					<a
						target="_blank"
						rel="noreferrer"
						style={{ fontWeight: "600", fontSize: "15px" }}
						href={link}
					>
						<button
							style={{
								backgroundColor: "transparent",
								// border: "none",
                                color:"white",
								width: "120px",
								height: "40px",
								borderRadius: "5px",
								cursor: "pointer",
								fontWeight: "500",
								background:isBlack ? "none" : "#3645b2", border: isBlack ?"4px solid #3645b2" : "none"
							}}
						>
							DEMO
						</button>
					</a>
				</div>
			</div>
		</div>
	);
}
