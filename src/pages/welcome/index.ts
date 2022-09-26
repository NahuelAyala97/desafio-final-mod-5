const tijeraImg = require("url:../../components/images/tijera.png");
const papelImg = require("url:../../components/images/papel.png");
const piedraImg = require("url:../../components/images/piedra.png");

export function initWelcomePage(params) {
	const div = document.createElement("div");
	const style = document.createElement("style");

	div.innerHTML = `
    <div class="home__container-content">
				<div class="home__container-title">
					<h1 class="home__title">Piedra Papel <span>ó</span> Tijera</h1>
				</div>
				<my-button class="button" title="Empezar"></my-button>
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
        margin-bottom: 45px;
    }
    
    .home__title {
        margin: 0;
        color: #009048;
        font-family: "Special Elite", cursive;
        font-style: normal;
        font-weight: 700;
        font-size: 80px;
    }

    .home__title > span {
        color: #91CCAF;

    }
    
    .home__container-comands {
        width: max-content;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 36px;
        position: fixed;
        bottom: -60px;
    }
    
    `;

	div.appendChild(style);

	const button = div.querySelector(".button");
	button?.addEventListener("click", (e) => {
		params.goTo("/desafio-final-mod-5/roules");
	});

	return div;
}
