AnimationManager = function() {
    this.endTurnButton = document.getElementById('end-turn-button');
}

AnimationManager.prototype.endTurnClick = function() {
    var timeLine = new TimelineLite();
    var tween = new TweenLite(this.endTurnButton, .25, {css:{boxShadow: "0px 0px 0px"}});

    timeLine.to(this.endTurnButton, .1, {css:{boxShadow: "0px 0px 0px #000000"}});
    timeLine.to(this.endTurnButton, .1, {css:{boxShadow: "10px 10px 15px #000000"}});

    timeLine.play();
}
