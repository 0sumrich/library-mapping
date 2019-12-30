import React from "react";
import { Layer, Feature } from "react-mapbox-gl";
const Barnet = ({ coordinates }) => (
	<Layer
		type="line"
		id="la"
		layout={{
			"line-join": "round",
			"line-cap": "round"
		}}
		paint={{
			"line-color": "#888",
			"line-width": 3
		}}
	>
		<Feature coordinates={coordinates} />
	</Layer>
);

export default Barnet;