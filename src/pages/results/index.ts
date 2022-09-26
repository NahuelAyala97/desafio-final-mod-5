import { stat } from "fs";
import { state } from "../../state";
const imgWin = require("url:../../components/images/ganaste.png");
const imgLoss = require("url:../../components/images/perdiste.png");

export function initResultsPage(params) {
	const div = document.createElement("div");
	const style = document.createElement("style");

	div.innerHTML = `
	<hand-command option="piedra" class="hand computer"></hand-command>
	<hand-command option="papel" class="hand player"></hand-command>
	    <div class="results">
	     <img class="results-img" src=${""} />
	        <div class="score">
	            <h3 class="score__title">Score</h3>
		        <div class="score__data">
		            <h4 class="score__data-number">Vos: <span class="score-p">0</span></h4> 
		            <h4 class="score__data-number">Maquina: <span class="score-c">0</span></h4> 
		        </div>
	        </div>
			<my-button class="button" title="Volver a Jugar"></my-button>
			<button class="reset">reset</button>
	    </div>
	`;

	const button = div.querySelector(".button");
	button?.addEventListener("click", (e) => {
		params.goTo("/roules");
	});

	const buttonReset = div.querySelector(".reset");
	buttonReset?.addEventListener("click", (e) => {
		state.resetHistory();
		setScore(state.getState().historyGame);
	});

	function setHands() {
		let currentState = state.getState();
		let currentGame = currentState.currentGame;
		const handPlayer = div.querySelector(".player");
		const handComputer = div.querySelector(".computer");

		handPlayer?.setAttribute("option", currentGame.myPlay);
		handComputer?.setAttribute("option", currentGame.computerPlay);
	}

	function setScore(history) {
		const scorePlayer = div.querySelector(".score-p") as any;
		const scoreComputer = div.querySelector(".score-c") as any;
		scorePlayer.textContent = history.myCounter;
		scoreComputer.textContent = history.computerCounter;
	}

	function activeResult() {
		let result = state.whoWin();
		const resultPage = div.querySelector(".results") as any;
		const imgEl = div.querySelector(".results-img") as any;

		if (result == "win") {
			resultPage?.classList.add("win");
			imgEl.src = imgWin;
			setHands();
			setScore(state.getState().historyGame);
		} else if (result == "lose") {
			resultPage?.classList.add("lose");
			imgEl.src = imgLoss;
			setHands();
			setScore(state.getState().historyGame);
		} else if (result == "empate") {
			resultPage?.classList.add("empate");
			resultPage.textContent = "EMPATE";
			setHands();
			setTimeout(() => {
				params.goTo("/roules");
			}, 2000);
		} else if (result == "error") {
			resultPage?.classList.add("error");
			resultPage.textContent = "ERROR";
			setTimeout(() => {
				params.goTo("/roules");
			}, 2000);
		}

		setTimeout(() => {
			resultPage.style.display = "flex";
		}, 1000);
	}

	div.setAttribute("class", "page");

	style.textContent = `
     .page{
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	 }

	 .hand {
      height: 40%;
	 }

	 .computer{
		transform: rotate(180deg)
	 }
 
	 .results{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 35px 20px;
        display: none;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	 }

	 .win {
		background-color: #888949E5;
	 }

	 .lose {
		background-color: #894949E5;
	 }

	 .empate {
		background-color: #798795;
		font-family: 'Odibee Sans';
        font-weight: 400;
        font-size: 55px;
		text-align: center;
       }
	 
	.error {
		background-color: #ff6258;
		color: #FFFFFF;
		font-family: 'Odibee Sans';
        font-weight: 400;
        font-size: 55px;
		text-align: center;
       }
      
     .results-img{
		height: 250px;
		width: 250px;
	 }

	 .score{
		width: 259px;
        height: 217px;
		border: 10px solid #000000;
        border-radius: 10px;
		background-color: #FFFFFF;
		padding: 10px;
	 }

	 .score__title{
		font-family: 'Odibee Sans';
        font-weight: 400;
        font-size: 55px;
		text-align: center;
		margin: 0;
	 }

	 .score__data-number{
		font-family: 'Odibee Sans';
        font-weight: 400;
        font-size: 45px;
		text-align: end;
		margin: 0;
	 }

	 .reset{
		position: absolute;
		top: 0;
        left: 0;
        width: 90px;
        height: 61px;
        border: 10px solid #FC0303;
        border-radius: 10px;
        font-family: 'Odibee Sans';
        font-weight: 400;
        font-size: 34px;
        background-color: #FF6161;
        color: #D8FCFC;
	 }
	 `;

	activeResult();

	div.appendChild(style);
	return div;
}
