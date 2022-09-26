import { initWelcomePage } from "./pages/welcome";
import { initRoulesPage } from "./pages/roules";
import { initResultsPage } from "./pages/results";
import { initGamePage } from "./pages/game";

const routes = [
	{
		path: /\/welcome/,
		handler: initWelcomePage,
	},
	{
		path: /\/roules/,
		handler: initRoulesPage,
	},
	{
		path: /\/start/,
		handler: initGamePage,
	},
	{
		path: /\/results/,
		handler: initResultsPage,
	},
];

export function initRouter(container) {
	function goTo(path: string) {
		history.pushState({}, "", path);
		handlerRoute(path);
	}

	function handlerRoute(route: string) {
		for (let r of routes) {
			if (r.path.test(route)) {
				let element = r.handler({ goTo: goTo });
				if (container.firstChild) {
					container.firstChild.remove();
				}
				container.appendChild(element);
			}
		}
	}

	if (location.pathname == "/") {
		goTo("/welcome");
	} else {
		handlerRoute(location.pathname);
	}
	window.onpopstate = () => {
		handlerRoute(location.pathname);
	};
}
