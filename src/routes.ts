import { initWelcomePage } from "./pages/welcome";
import { initRoulesPage } from "./pages/roules";
import { initResultsPage } from "./pages/results";
import { initGamePage } from "./pages/game";

const routes = [
	{
		path: /\/desafio-final-mod-5\/welcome/,
		handler: initWelcomePage,
	},
	{
		path: /\/desafio-final-mod-5\/roules/,
		handler: initRoulesPage,
	},
	{
		path: /\/desafio-final-mod-5\/start/,
		handler: initGamePage,
	},
	{
		path: /\/desafio-final-mod-5\/results/,
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

	if (location.pathname == "/desafio-final-mod-5/") {
		goTo("/desafio-final-mod-5/welcome");
	} else {
		handlerRoute(location.pathname);
	}
	window.onpopstate = () => {
		handlerRoute(location.pathname);
	};
}
