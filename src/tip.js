import React from 'react'
import {Popup} from "react-mapbox-gl";

const Tip = ({ feature, mouse }) => {
	if (feature && mouse) {
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

export default Tip;