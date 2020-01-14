import React, { useState } from "react";
import ReactMapboxGl, { Popup } from "react-mapbox-gl";
import Barnet from "./barnet";
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

const Tip = ({ feature, mouse }) => {
	if (feature && mouse) {
		console.log(feature);
		return (
			<Popup coordinates={[mouse.lng, mouse.lat]} offset={15}>
				<p>{feature.properties.LSOA11NM}</p>
				<p>{`Number of borrowers: ${
					feature.properties["Number of borrowers"]
				}`}</p>
				<p>{feature.properties.description}</p>
			</Popup>
		);
	} else {
		return null;
	}
};

export default ({ la, mapStyle }) => {
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
			<Tip feature={feature} mouse={mouse} />
		</MapBox>
	);
};
