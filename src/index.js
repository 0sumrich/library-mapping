import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { barnet } from "./geo/barnet";
import { libraries } from "./geo/libraries";

ReactDOM.render(
	<App la={barnet} libraries={libraries} />,
	document.getElementById("root")
);

serviceWorker.unregister();
