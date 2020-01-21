import React, { useState } from "react";
import ReactMapboxGl, { GeoJSONLayer } from "react-mapbox-gl";
import Barnet from "./barnet";
import Tip from "./tip";
import "./map.css";

const publickey = process.env.REACT_APP_API_KEY;

const MapBox = ReactMapboxGl({
	accessToken: publickey
});

const style = "mapbox://styles/0sumrich/ck55oh8go05ks1cqqi7lavhcq";

const featureState = (hov, bool) => [
	{
		source: "composite",
		sourceLayer: "out",
		id: hov
	},
	{ hover: bool }
];

export default ({ la, mapStyle, libraries }) => {
	const [mouse, setMouse] = useState(null);
	const [feature, setFeature] = useState(null);
	let hoverId = null;

	const laFeature = la.features[0];
	const { centroid, bounds } = laFeature.properties;
	const handleMove = (m, e) => {
		const lsoas = m.queryRenderedFeatures(e.point, {
			layers: ["lib-users"]
		});
		setMouse(e.lngLat);
		if (lsoas.length > 0) {
			const f = lsoas[0];
			setFeature(f);
			const id = f.id;
			if (hoverId !== id && hoverId) {
				m.setFeatureState(...featureState(hoverId, false));
			}
			m.setFeatureState(...featureState(id, true));
			hoverId = id;
		} else {
			m.setFeatureState(...featureState(hoverId, false));
			hoverId = null;
			setFeature(null);
		}
	};
	return (
		<MapBox
			style={style}
			containerStyle={{
				height: "80vh",
				width: "75%",
				display: 'inline-block'
			}}
			onMouseMove={handleMove}
			center={centroid}
			fitBounds={bounds}
			fitBoundsOptions={{ padding: 50 }}
		>
			<Barnet coordinates={laFeature.geometry.coordinates[0]} />
			<Tip feature={feature} mouse={mouse} />
			<GeoJSONLayer
				data={libraries}
				circleLayout={{}}
				circlePaint={{
					"circle-radius": 3
				}}
			/>
		</MapBox>
	);
};
