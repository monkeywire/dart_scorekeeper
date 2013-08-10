EndTurnButton = function() {
    this.elem = document.getElementById('end-turn-button');
    this.elem.setAttribute('onClick', 'dartboard.endTurn();');
}

EndTurnButton.prototype.show = function() {
    this.elem.style.visibility = 'visible';
}

EndTurnButton.prototype.hide = function() {
    this.elem.style.visibility = 'hidden';
}

/*EndTurnButton.prototype.click = function() {
    dartboard.endTurn();
}*/
