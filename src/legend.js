import React, { useEffect, useState } from "react";
import drawLegend from "./drawLegend";

const styleId = "ck55oh8go05ks1cqqi7lavhcq";
const publickey = process.env.REACT_APP_API_KEY;
const url = `https://api.mapbox.com/styles/v1/0sumrich/${styleId}?access_token=${publickey}`;

const Legend = () => {
	const [hidden, setHidden] = useState(false);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(url);
				const json = await res.json();
				const paint = json.layers[73].paint["fill-color"];
				const colors = [paint[4], paint[6], paint[8]];
				const numbers = [paint[3], paint[5], paint[7]];
				drawLegend(colors, numbers);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, []);

	const spanClick = () => setHidden(!hidden);
	// const spanClick = () => console.log("hi");
	return (
		<div id="legend" className={hidden ? "hidden" : null}>
			<p>Number of members in each area</p>
			<div className="span" onClick={spanClick}>
				<img
					className="icon"
					src="close.png"
					height="10px"
					width="10px"
				/>
			</div>
		</div>
	);
};

export default Legend;
