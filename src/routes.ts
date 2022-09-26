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

const BASE_PATH = "/desafio-m5";

function isGithubPages() {
	return location.host.includes("github.io");
}

export function initRouter(container) {
	function goTo(path: string) {
		const completePath = isGithubPages() ? BASE_PATH + path : path;
		history.pushState({}, "", completePath);
		handlerRoute(completePath);
	}

	function handlerRoute(route: string) {
		const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
		for (let r of routes) {
			if (r.path.test(newRoute)) {
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
