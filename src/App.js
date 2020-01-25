import React from "react";
import Map from "./map";
import Legend from "./legend";
import "./map.css";

const Title = () => (
	<div className="title-container">
		<h1>Barnet Libraries</h1>
		<p>Users in Lower Layer Super Output Areas</p>
	</div>
);

const App = ({ la, libraries }) => (
	<main>
		<Title />
		<Map la={la} libraries={libraries} />
		<Legend />
	</main>
);

export default App;
