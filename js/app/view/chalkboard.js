/* Handles all the chalkboard view functions */
Chalkboard = function() {
    this.player1 = document.getElementById('player1-scores');
    this.player2 = document.getElementById('player2-scores');
    this.round   = document.getElementById('round-display');
    this.turn    = document.getElementById('player-turn');
}

Chalkboard.prototype.setPlayerScore = function(index, score) {
    switch(index) {
        case 0: this.player1.innerHTML = score; break;
        case 1: this.player2.innerHTML = score; break;
    }
}

Chalkboard.prototype.setRound = function(value) {
    this.round.innertHTML = value;
}

Chalkboard.prototype.setTurn = function(value) {
    this.round.innerHTML = value;
}
