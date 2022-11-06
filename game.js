const updateUnit = 10;

class Game {
    constructor() {
        this.winner = null;
        this.timer = null;
        this.timestamp = null;

        console.log("Game Created at " + new Date());
    }

    async startNewGame(callback, username) {
        this.timestamp = Math.floor(Date.now() / 1000) + updateUnit;
        this.updateTimer(callback, username);

        console.log("New Game created at " + new Date() + "by " + username);
    }

    async updateTimer(callback, username) {
        if (this.timer) {
            clearTimeout(this.timer);
        }

        this.winner = username;
        this.timer = setTimeout(() => {
            callback();
            this.finish();
            console.log("Game Finished at " + new Date() + ". Winner is " + username);
        }, updateUnit * 1000);
    }

    finish() {
        this.winner = null;
        this.timer = null;
        this.timestamp = null;
    }
}

module.exports.game = new Game();

