DartboardLocation = function() {
    this.pos = {x: undefined, y: undefined};
    this.label = undefined;
    this.value = undefined;
}

Dartboard = function() {
    this.board = document.getElementById('dart-board');
    this.darts = new Darts();
    this.loc = new DartboardLocation();
    this.endTurnButton = new EndTurnButton();
    this.init();
}

Dartboard.prototype.init = function() {
    var that = this;
    this.board.addEventListener('touchstart', function(e) { that.touchstart(e); } );
    this.board.addEventListener('touchend', function(e) { that.touchend(e); } );
    this.board.addEventListener('touchmove', function(e) { that.touchmove(e); } );
}

Dartboard.prototype.touchstart = function(event) {
    if(navigator.userAgent.match(/Android/i)) { event.preventDefault(); };
    this.updateLocation(event);
    this.darts.add(this.loc.label, this.loc.value, this.loc.pos);
}

Dartboard.prototype.touchend = function(event) {
    this.updateLocation(event);
    this.darts.placeLastDart(this.loc.label, this.loc.value, this.loc.pos);
}

Dartboard.prototype.touchmove = function(event) {
    this.updateLocation(event);
    this.darts.moveLastDart(this.loc.label, this.loc.value, this.loc.pos);
}

Dartboard.prototype.updateLocation = function(event) {
    this.loc.pos = TouchExtensions.touchPos(event);
    TouchExtensions.fireMouseEventAtPos('mouseover', this.loc.pos.x, this.loc.pos.y);
}

Dartboard.prototype.boardLocationCallback = function(label, value) {
    this.loc.label = label;
    this.loc.value = value;
}

Dartboard.prototype.endTurn = function() {
    var darts = this.darts.allDarts();
    for(i = 0; i <= 2; i++) {
        if(darts[i]) {
            game.addDart(darts[i].label, darts[i].value);
        } else {
            game.addDart('miss', 0);
        }
    }
    this.darts.removeAllDarts();
    //this.endTurnButton.hide();
    play.randomChalkSound();
}

