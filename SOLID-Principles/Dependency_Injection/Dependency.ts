//💿
class GameLoader {
    input: string;

    constructor(input: string) {
        this.input = input;
    }

    load() {
        console.log("Loading: ", this.input);
    }
}

//🆕💿
class NextGenGameLoader {
    input: string;

    constructor(input: string) {
        this.input = input;
    }

    load() {
        console.log("Loading: ", this.input);
    }
}

//💻
class PlaystationConsole {
    gameLoader: GameLoader

    constructor(gameLoader: GameLoader ){
        this.gameLoader = gameLoader
    }
    
    play() {
        this.gameLoader.load();
    }
}

//Game 💽
const gameLoader = new GameLoader("GTA");
const nextGengameLoader = new NextGenGameLoader("cyberpunk 2077");
const playstationConsole = new PlaystationConsole(gameLoader);
playstationConsole.play();
