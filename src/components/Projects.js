import React from "react";
import "../App.css";
import loader from "../images/loader.gif";

export default function Projects({
	imageSrc,
	name,
	details,
	language,
	link,
	classname,
}) {
	const [loading, setLoading] = React.useState(true);
	return (
		<div className="grid-project">
			{imageSrc.map((imagesrc) => (
				<img
					src={loading ? loader : imagesrc}
					onLoad={() => {
						setLoading(false);
					}}
					style={{
						width: loading ? "22%" : "97%",
						height: loading ? "50%" : "100%",
						alignSelf: "center",
						justifySelf: "center",
						borderRadius: "20px",
						margin: "20px",
					}}
					className="project-image"
					alt="project"
				/>
			))}
			<div
				style={{
					backgroundColor: "#ffffff17",
					padding: "30px",
					borderRadius: "20px",
				}}
				className={"grid-translate"}
			>
				<div style={{ width: "80%" }} className="project-details">
					<h2
						style={{
							textTransform: "uppercase",
							fontWeight: "initial",
							color: "#ffffb9",
						}}
					>
						Name : {name}
					</h2>
					<p>
						<b style={{ fontWeight: "500" }}>Details</b> : {details}
					</p>
					<p>
						<b style={{ fontWeight: "500" }}>Language</b>: {language}
					</p>
					{/* <h3 style={{ fontWeight: "500" }}>
						Link:{" "}
						<a
							target="_blank"
							rel="noreferrer"
							style={{ fontWeight: "600", fontSize: "15px" }}
							href={link}
						>
							{link}
						</a>
					</h3> */}
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
                                border:"3px #3645B2 solid"
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
