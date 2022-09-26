import "./components/button";
import "./components/hand-command";

import { initRouter } from "./routes";
import { state } from "./state";

(function () {
	const root = document.querySelector(".root");
	state.getHistory();
	initRouter(root);
})();
