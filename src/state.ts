type Move = "piedra" | "papel" | "tijera";

const state = {
	data: {
		currentGame: {
			myPlay: "",
			computerPlay: "",
		},
		historyGame: {
			myCounter: 0,
			computerCounter: 0,
		},
	},
	listeners: [],
	addMove(move: Move) {
		const currentState = this.getState();
		let optionsMove = ["piedra", "papel", "tijera"];

		currentState.currentGame.computerPlay =
			optionsMove[Math.floor(Math.random() * optionsMove.length)];
		currentState.currentGame.myPlay = move;
		this.setState(currentState);
	},
	resetMove() {
		const currentState = this.getState();
		const currentGame = currentState.currentGame;
		currentGame.myPlay = "";
		currentGame.computerPlay = "";
	},
	whoWin() {
		let currentState = this.getState();
		const game = currentState.currentGame;

		const empate = [
			game.myPlay == "tijera" && game.computerPlay == "tijera",
			game.myPlay == "piedra" && game.computerPlay == "piedra",
			game.myPlay == "papel" && game.computerPlay == "papel",
		];

		const win = [
			game.myPlay == "piedra" && game.computerPlay == "tijera",
			game.myPlay == "papel" && game.computerPlay == "piedra",
			game.myPlay == "tijera" && game.computerPlay == "papel",
		];

		const lose = [
			game.myPlay == "piedra" && game.computerPlay == "papel",
			game.myPlay == "papel" && game.computerPlay == "tijera",
			game.myPlay == "tijera" && game.computerPlay == "piedra",
		];

		if (empate.includes(true)) {
			return "empate";
		} else if (win.includes(true)) {
			this.pushToHistory("win");
			return "win";
		} else if (lose.includes(true)) {
			this.pushToHistory("lose");
			return "lose";
		} else {
			return "error";
		}
	},

	getHistory() {
		const currentState = this.getState();
		const localHistory: any = JSON.parse(
			localStorage.getItem("history") as string
		);
		if (localStorage.getItem("history")) {
			currentState.historyGame = localHistory;
		}
	},

	pushToHistory(result) {
		const currentState = this.getState();
		if (result == "win") {
			currentState.historyGame.myCounter++;
		} else if (result == "lose") {
			currentState.historyGame.computerCounter++;
		}

		this.setState(currentState);
	},
	resetHistory() {
		let currentState = state.getState();
		currentState.historyGame = {
			myCounter: 0,
			computerCounter: 0,
		};
		state.setState(currentState);
	},
	getState() {
		return this.data;
	},
	setState(newState) {
		// modifica this.data (el state) e invoca los callbacks
		this.data = newState;
		for (const cb of this.listeners) {
			cb(newState);
		}
		localStorage.setItem("history", JSON.stringify(newState.historyGame));
	},
	subscribe(callback: (any) => any) {
		// recibe callbacks para ser avisados posteriormente
		this.listeners.push(callback);
	},
};

export { state };
