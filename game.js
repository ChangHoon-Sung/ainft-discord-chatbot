const TIMER_AMOUNT_SEC = 10;
const REWARD_INCREASE_INTERVAL_SEC = 10;
const MAX_REWARD = 30;

class Game {
    
    constructor() {
        this.winner = null;
        this.timer = null;
        this.timestamp = null;

        this.reward = 0;
        this.rewardTimer = null;

        console.log("Game Created at " + new Date());
    }

    async startNewGame(callback, username) {
        this.timestamp = Math.floor(Date.now() / 1000) + TIMER_AMOUNT_SEC;
        this.updateTimer(callback, username);

        this.reward = 1;
        this.rewardTimer = setInterval(() => {
            this.reward = Math.min(this.reward+1, MAX_REWARD);
        }, REWARD_INCREASE_INTERVAL_SEC * 1000);

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
        }, TIMER_AMOUNT_SEC * 1000);
    }

    finish() {
        this.winner = null;
        this.timer = null;
        this.timestamp = null;
        clearInterval(this.rewardTimer);
        this.reward = 0;
    }
}

exports.game = new Game();
exports.TIMER_AMOUNT_SEC = TIMER_AMOUNT_SEC;
exports.REWARD_INCREASE_INTERVAL_SEC = REWARD_INCREASE_INTERVAL_SEC;
exports.MAX_REWARD = MAX_REWARD;
