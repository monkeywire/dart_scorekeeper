EndTurnButton = function() {
    this.elem = document.getElementById('end-turn-button');
    this.elem.setAttribute('ontouchend', 'animate.endTurnClick(); dartboard.endTurn();');
}

EndTurnButton.prototype.show = function() {
    this.elem.style.visibility = 'visible';
}

EndTurnButton.prototype.hide = function() {
    this.elem.style.visibility = 'hidden';
}
