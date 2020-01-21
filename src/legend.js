import React, { useEffect } from "react";
import drawLegend from "./drawLegend";

const styleId = 'ck55oh8go05ks1cqqi7lavhcq';
const publickey = process.env.REACT_APP_API_KEY;
const url = `https://api.mapbox.com/styles/v1/0sumrich/${styleId}?access_token=${publickey}`

const Legend = () => {
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(url);
				const json = await res.json();
				const paint = json.layers[73].paint["fill-color"];
				const colors = [paint[4], paint[6], paint[8]]
				drawLegend(colors);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, []);
	return <svg id="legend" height="80vh" width="25%" />;
};

export default Legend;
