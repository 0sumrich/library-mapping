import React, { Fragment } from "react";
import Map from "./map";
import Legend from "./legend";
import './map.css'

const App = ({ la, libraries }) => (
	<main>
		<Map la={la} libraries={libraries} />
	</main>
);

export default App;
