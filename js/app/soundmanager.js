SoundManager = function(path) {
    this.dartHits = new Array(new Audio('mp3/dart-hit-1.mp3'),
                              new Audio('mp3/dart-hit-2.mp3'),
                              new Audio('mp3/dart-hit-3.mp3'),
                              new Audio('mp3/dart-hit-4.mp3'));

    this.chalkOnBoard = new Array(new Audio('mp3/chalk-on-board-1.mp3'),
                                  new Audio('mp3/chalk-on-board-2.mp3'),
                                  new Audio('mp3/chalk-on-board-3.mp3'),
                                  new Audio('mp3/chalk-on-board-4.mp3'));
}

SoundManager.prototype.randomDartSound = function() {
    //random number between 1 and 4
    var randomInt = Math.floor((Math.random()*3)+0);
    this.play(this.dartHits[randomInt]);
}

SoundManager.prototype.randomChalkSound = function() {
    //random number between 1 and 4
    var randomInt = Math.floor((Math.random()*3)+0);
    this.play(this.chalkOnBoard[randomInt]);
}

SoundManager.prototype.play = function(audio) {
    audio.play();
}
