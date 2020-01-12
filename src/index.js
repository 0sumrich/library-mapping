import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { barnet } from "./geo/barnet";

ReactDOM.render(
	<App la={barnet} />,
	document.getElementById("root")
);

serviceWorker.unregister();
