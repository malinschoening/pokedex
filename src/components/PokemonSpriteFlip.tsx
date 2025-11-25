import React, { useState, useEffect } from "react";

interface Props {
	front: string;
	back?: string;
	alt: string;
	className?: string;
	flipped?: boolean;
	flipInterval?: number;
}

const PokemonSpriteFlip: React.FC<Props> = ({
	front,
	back,
	alt,
	className,
	flipped,
	flipInterval
}) => {
	const [autoFlipped, setAutoFlipped] = useState(false);

	useEffect(() => {
		if (!back || !flipInterval) return;
		const interval = setInterval(() => {
			setAutoFlipped((prev) => !prev);
		}, flipInterval);
		return () => clearInterval(interval);
	}, [back, flipInterval]);

	const isFlipped = flipped ?? autoFlipped;

	return (
		<div
			className={`flip-container ${className || ""}`}
			style={{ perspective: "1000px", width: "100%", height: "100%" }}
		>
			<div
				className="flip-inner"
				style={{
					transformStyle: "preserve-3d",
					transition: "transform 0.6s ease-in-out",
					transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
					width: "100%",
					height: "100%",
					position: "relative"
				}}
			>
				<img
					src={front}
					alt={`${alt} front`}
					className="flip-front img-fluid"
					style={{
						backfaceVisibility: "hidden",
						display: "block",
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						objectFit: "contain"
					}}
				/>
				{back && (
					<img
						src={back}
						alt={`${alt} back`}
						className="flip-back img-fluid"
						style={{
							transform: "rotateY(180deg)",
							backfaceVisibility: "hidden",
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: "100%",
							objectFit: "contain"
						}}
					/>
				)}
			</div>
		</div>
	);
};

export default PokemonSpriteFlip;
