import React from "react";
import Map from "./map";
import Legend from "./legend";
import "./map.css";

const App = ({ la, libraries }) => (
	<main>
		<div className="title-container">
			<div className="text-container">
				<h1>Barnet Libraries</h1>
				<p>Users in Lower Layer Super Output Areas</p>
			</div>
		</div>
		<Map la={la} libraries={libraries} />
	</main>
);

export default App;
