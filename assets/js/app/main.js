App = function() {
    var self = this;
    self.dartboard     = new DartBoard('dart-board');
    self.boardLocation = new DartboardLocation();
    self.imageMap      = new ImageMap('dart-board-map', 600);
    self.menu          = new Menu('menu', 'menu-button');
    self.endturnBtn    = new EndTurnButton('end-turn-button');
    self.viewGlass     = new ViewGlass('view-glass', 2);
    self.chalkboard    = new ChalkBoard('chalk-board', 301, ['player1', 'player2']);

    self.initLayout();
    self.menu.showMain();
};

App.prototype.initLayout = function() {
    var self = this;
    self.imageMap.resize(self.dartboard.getWidthValue());
    window.onresize = function() { self.initLayout(); };
}

App.prototype.newGame = function() {
    var self = this;
    self.game = new Game_01(['player1', 'player2'], 3);
}

app = new App();

