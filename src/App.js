import React, { Fragment } from "react";
import Map from "./map";
import Legend from './legend'
import "./main.css";

const App = ({ la, libraries }) => (
	<main>
		<h1>Barnet Libraries</h1>
		<h4>Active members in Lower Layer Super Output Areas</h4>
		<div>
			<Map la={la} libraries={libraries} />
			<Legend />
		</div>
	</main>
);

export default App;
