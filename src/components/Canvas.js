import React, { useEffect, useState } from "react";

export default function Canvas({color}) {
	const canvasRef = React.useRef();
	const [canvas, setCanvas] = useState(null);
	const [ctx, setCtx] = useState(null);
	useEffect(() => {
		setCanvas(canvasRef.current);
		if (canvas) {
			setCtx(canvas.getContext("2d"));
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		}
	}, [canvasRef, ctx, canvas]);

	class Particles {
		constructor(x, y) {
			this.x = x;
			this.y = y;
			this.size = 3;
			this.baseX = this.x;
			this.baseY = this.y;
			this.density = Math.random() * 30 + 1;
			this.color = color;
			this.distance = 20;
		}

		draw() {
			ctx.fillStyle = this.color;
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
			ctx.closePath();
			ctx.fill();
		}

		update() {
			let dx = this.baseX - this.x;
			let dy = this.baseY - this.y;
			let distance = Math.sqrt(dx * dx + dy * dy);


			this.x += (Math.round(Math.random() * 100)) / 100;
			this.y += (Math.round(Math.random() * 100)) / 100;

            if(this.x >= window.innerWidth){
                this.x -= window.innerWidth
				
            }
            if(this.y >= window.innerHeight){
                this.y -= window.innerHeight
            }
		}
	}

	let particlesArray = [];

	function init() {
		particlesArray = [];
		for (let i = 0; i < 200; i++) {
			let x = Math.random() * canvas.width;
			let y = Math.random() * canvas.height;
			particlesArray.push(new Particles(x, y));
		}
	}

	function animate() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for (let particle of particlesArray) {
			particle.draw();
			particle.update();
		}
		connect();
		requestAnimationFrame(animate);
	}

	function connect() {
		for (let a = 0; a < particlesArray.length; a++) {
			for (let b = a; b < particlesArray.length; b++) {
				let dx = particlesArray[a].x - particlesArray[b].x;
				let dy = particlesArray[a].y - particlesArray[b].y;

				let distance = Math.sqrt(dx * dx + dy * dy);

				if (distance < 90) {
					ctx.strokeStyle = color;
					ctx.lineWidth = 1;
					ctx.beginPath();
					ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
					ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
					ctx.stroke();
				}
			}
		}
	}

	if (canvas && ctx) {
		init();
		animate();
		connect();
	}

	return (
		<div>
			<canvas
				ref={canvasRef}
				style={{ position: "absolute", width: "100vw", minHeight: "100%" }}
			></canvas>
		</div>
	);
}
