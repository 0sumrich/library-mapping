import React from "react";
import ReactMapboxGl from "react-mapbox-gl";
import Barnet from "./barnet";

const MapBox = ReactMapboxGl({
	accessToken: process.env.REACT_APP_API_KEY
});
//fitBounds
export default ({ la }) => {
	const feature = la.features[0];
	const { centroid, bounds } = feature.properties;
	return (
		<MapBox
			style="mapbox://styles/mapbox/streets-v8"
			containerStyle={{
				height: "100vh",
				width: "100vw"
			}}
			center={centroid}
			fitBounds={bounds}
			fitBoundsOptions={{padding: 50}}
		>
			<Barnet coordinates={feature.geometry.coordinates[0]} />
		</MapBox>
	);
};
