EndTurnButton = function(id) {
    var self = this;
    self.el  = document.getElementById(id);
    self.init();
}

EndTurnButton.prototype.init = function() {
    var self = this;
    self.el.addEventListener('click', function(e) { self.click(); });
}

EndTurnButton.prototype.click = function() {
    var self = this;
    self.totalDarts();
    app.dartboard.clearDarts();
    //TODO Move these chalkboard assignments a KnockOut.JS binding.
    app.chalkboard.playerTurn(app.game.currentPlayerName());
    app.chalkboard.round(app.game.round);
    self.skin.onClickEffects(self.el);
}

EndTurnButton.prototype.totalDarts = function() {
    var self = this;
    var playerTurn = app.game.playerTurn;
    for(i = 0; i < 3; i++) {
        if(app.dartboard.darts[i]) {
            var dart = app.dartboard.darts[i].location;
            app.game.addDart(dart.area, dart.value, dart.isDouble );
        } else {
            app.game.addDart('miss', 0, false);
        }
    };
    var playerScore = app.game.playerScoreByIndex(playerTurn);
    app.chalkboard.addScore(playerTurn, 301 - playerScore);
}
