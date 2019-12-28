import React from "react";
import ReactMapboxGl, {
	Layer,
	Feature,
	GeoJSONLayer,
	Source
} from "react-mapbox-gl";
const Map = ReactMapboxGl({
	accessToken: process.env.REACT_APP_API_KEY
});

export default ({la}) => (
	<Map
		style="mapbox://styles/mapbox/streets-v8"
		containerStyle={{
			height: "100vh",
			width: "100vw"
		}}
	>
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
			<Feature coordinates={la.features[0].geometry.coordinates[0]} />
		</Layer>
	</Map>
);