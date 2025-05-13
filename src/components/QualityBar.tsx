import React from "react";

const backgroundColor = (completed: 1 | 2 | 3 | 4 | 5) => {
	switch (completed) {
		case 1:
			return "#f44336";
		case 2:
			return "#ff9800";
		case 3:
			return "#ffeb3b";
		case 4:
			return "#4caf50";
		case 5:
			return "#2196f3";
	}
};

export const QualityBar = ({ quality }: { quality: 1 | 2 | 3 | 4 | 5 }) => {
	const qualityPercent = quality * 20;

	return (
		<div
			style={{
				height: 30,
				width: "50%",
				backgroundColor: "#424242",
				borderRadius: 50,
				margin: 10,
				position: "relative",
				display: "flex",
				alignItems: "center",
			}}
		>
			<div
				style={{
					height: "100%",
					width: `${qualityPercent}%`,
					backgroundColor: backgroundColor(quality),
					borderRadius: "inherit",
				}}
			/>
			<span
				style={{
					padding: 5,
					color: "white",
					fontWeight: "bold",
					position: "absolute",
					left: "50%",
					transform: "translateX(-50%)",
					zIndex: 1,
					textShadow: "0px 0px 2px rgba(0,0,0,0.7)",
				}}
			>{`${"⭐".repeat(quality)}`}</span>
		</div>
	);
};

export default QualityBar;
