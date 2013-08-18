EndTurnButton = function(id, game, dartboard, chalkBoardViewModel) {
    var self = this;
    self.el    = document.getElementById(id);
    self.dartboard  = dartboard;
    self.game       = game;
    self.chalkBoard = chalkBoardViewModel;
    self.init();
}

EndTurnButton.prototype.init = function() {
    var self = this;
    self.el.addEventListener('click', function(e) { self.click(); });
}

EndTurnButton.prototype.click = function() {
    var self = this;
    self.totalDarts();
    self.dartboard.clearDarts();
    self.chalkBoard.playerTurn(self.game.currentPlayerName());
    self.chalkBoard.round(self.game.round);
    self.skin.onClick(self.el);
}

EndTurnButton.prototype.totalDarts = function() {
    var self = this;
    var playerTurn = self.game.playerTurn;
    for(i = 0; i < 3; i++) {
        if(self.dartboard.darts[i]) {
            var dart = self.dartboard.darts[i].location;
            self.game.addDart(dart.area, dart.value, dart.isDouble );
        } else {
            self.game.addDart('miss', 0, false);
        }
    };
    var playerScore = self.game.playerScoreByIndex(playerTurn);
    self.chalkBoard.addScore(playerTurn, 301 - playerScore);
}
