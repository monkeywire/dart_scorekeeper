SoundManager = function(path) {
    this.dartHits = new Array(new Audio('mp3/dart-hit-1.mp3'),
                              new Audio('mp3/dart-hit-2.mp3'),
                              new Audio('mp3/dart-hit-3.mp3'),
                              new Audio('mp3/dart-hit-4.mp3'));
}

SoundManager.prototype.randomDartSound = function() {
    //random number between 1 and 4
    var randomInt = Math.floor((Math.random()*3)+0);
    this.play(this.dartHits[randomInt]);
}

SoundManager.prototype.play = function(audio) {
    audio.play();
}
