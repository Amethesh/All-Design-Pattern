//💿
var GameLoader = /** @class */ (function () {
    function GameLoader(input) {
        this.input = input;
    }
    GameLoader.prototype.load = function () {
        console.log("Loading: ", this.input);
    };
    return GameLoader;
}());
//🆕💿
var NextGenGameLoader = /** @class */ (function () {
    function NextGenGameLoader(input) {
        this.input = input;
    }
    NextGenGameLoader.prototype.load = function () {
        console.log("Loading: ", this.input);
    };
    return NextGenGameLoader;
}());
//💻
var PlaystationConsole = /** @class */ (function () {
    function PlaystationConsole(gameLoader) {
        this.gameLoader = gameLoader;
    }
    PlaystationConsole.prototype.play = function () {
        this.gameLoader.load();
    };
    return PlaystationConsole;
}());
//Game 💽
var gameLoader = new GameLoader("GTA");
var nextGengameLoader = new NextGenGameLoader("cyberpunk 2077");
var playstationConsole = new PlaystationConsole(gameLoader);
playstationConsole.play();
