import React, { useState } from "react";
import ReactMapboxGl from "react-mapbox-gl";
import Barnet from "./barnet";

const publickey = process.env.REACT_APP_API_KEY;

const MapBox = ReactMapboxGl({
	accessToken: publickey
});

const style = "mapbox://styles/0sumrich/ck55oh8go05ks1cqqi7lavhcq";

export default ({ la, mapStyle }) => {
	let hoverId = null;
	const laFeature = la.features[0];
	const { centroid, bounds } = laFeature.properties;
	const handleMove = (m, e) => {
		const lsoas = m.queryRenderedFeatures(e.point, {
			layers: ["lib-users"]
		});
		if (lsoas.length > 0) {
			const f = lsoas[0];
			const id = f.id;
			if (hoverId !== id && hoverId) {
				m.setFeatureState(
					{
						source: "composite",
						sourceLayer: "out",
						id: hoverId
					},
					{ hover: false }
				);
			}
			m.setFeatureState(
				{
					source: "composite",
					sourceLayer: "out",
					id: id
				},
				{ hover: true }
			);
			hoverId = id;
		}
	};

	return (
		<MapBox
			style={style}
			containerStyle={{
				height: "100vh",
				width: "100vw"
			}}
			onMouseMove={handleMove}
			center={centroid}
			fitBounds={bounds}
			fitBoundsOptions={{ padding: 50 }}
		>
			<Barnet coordinates={laFeature.geometry.coordinates[0]} />
		</MapBox>
	);
};
