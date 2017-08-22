class PlayerTurnOrderRandomizer {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }
    
    randomizeTurnOrder() {
        return this.shuffle([this.player1, this.player2]);
    }
    
    shuffle(array) {
        for (let i = array.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [array[i - 1], array[j]] = [array[j], array[i - 1]];
        }
        return array;
    }
}

module.exports = PlayerTurnOrderRandomizer;
