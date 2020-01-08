import React, { useState } from "react";
import ReactMapboxGl, { Source, Layer } from "react-mapbox-gl";
import Barnet from "./barnet";
const publickey = process.env.REACT_APP_API_KEY;
const MapBox = ReactMapboxGl({
	accessToken: publickey
});
const style = "mapbox://styles/0sumrich/ck4skvfdt4noq1co2t468d50p";

export default ({ la, mapStyle }) => {
	const [hoverId, setHoverId] = useState(null);
	const feature = la.features[0];
	const { centroid, bounds } = feature.properties;
	return (
		<MapBox
			style={style}
			containerStyle={{
				height: "100vh",
				width: "100vw"
			}}
			onStyleLoad={m => {
				m.setStyle(mapStyle);
			}}
			onMouseMove={(_, e) => {
				const lsoas = _.queryRenderedFeatures(e.point, {
					layers: ["lib-users"]
				});

				if (lsoas.length > 0) {
					console.log(lsoas[0]);
					if (hoverId) {
						_.setFeatureState(
							{
								source: "composite",
								sourceLayer: "out",
								id: hoverId
							},
							{ hover: false }
						);
					}
					setHoverId(lsoas[0].id);
					_.setFeatureState(
						{
							source: "composite",
							sourceLayer: "out",
							id: lsoas[0].id
						},
						{ hover: true }
					);
				}
			}}			
			center={centroid}
			fitBounds={bounds}
			fitBoundsOptions={{ padding: 50 }}
		>
			<Barnet coordinates={feature.geometry.coordinates[0]} />
		</MapBox>
	);
};
