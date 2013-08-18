App = function() {
    var self = this;
    self.dartBoard       = new Dartboard('dart-board');
    self.imageMap        = new ImageMap('dart-board-map', 600);
    self.menu            = new Menu('menu');
    self.chalkboardModel = new ChalkboardModel('chalk-board', 301, ['player1', 'player2']);
    self.initLayout();
    self.menu.showMain();
};

App.prototype.initLayout = function() {
    var self = this;
    self.imageMap.resize(self.dartBoard.getWidthValue());
    window.onresize = function() { self.initLayout(); };
}

App.prototype.newGame = function() {
    var self = this;
    self.game = new Game_01(['player1', 'player2'], 3);
    self.endTurnButton   = new EndTurnButton('end-turn-button',
                                             self.game,
                                             self.dartBoard,
                                             self.chalkboardModel);
}

app = new App();

