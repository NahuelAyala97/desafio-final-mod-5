import { state } from "../../state";

const tijeraImg = require("url:../../components/images/tijera.png");
const papelImg = require("url:../../components/images/papel.png");
const piedraImg = require("url:../../components/images/piedra.png");

export function initRoulesPage(params) {
	const div = document.createElement("div");
	const style = document.createElement("style");

	div.innerHTML = `
    <div class="home__container-content">
				<div class="home__container-title">
					<p class="home__title">Presioná jugar
					y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</p>
				</div>
				<my-button class="button" title="¡Jugar!"></my-button>
				<div class="home__container-comands">
                <hand-command option="piedra"></hand-command>
                <hand-command option="papel"></hand-command>
                <hand-command option="tijera"></hand-command>
				</div>
			</div>
    `;

	div.setAttribute("class", "home");

	style.textContent = `
    .home {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
    
    .home__container-content {
        height: 90vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .home__container-title {
        width: 300px;
        margin-bottom: 30px;
    }
    
    .home__title {
        margin: 0;
        text-align: center;
        font-family: "Special Elite", cursive;
        font-style: normal;
		font-weight: 600;
		font-size: 40px;
    }

    .home__container-comands {
        width: max-content;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 36px;
        position: fixed;
        bottom: -65px;
    }
    
    `;

	div.appendChild(style);

	const button = div.querySelector(".button");
	button?.addEventListener("click", (e) => {
		state.resetMove();
		params.goTo("./start");
	});

	return div;
}
