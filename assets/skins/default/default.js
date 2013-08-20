EndTurnButton.prototype.skin = {
    sound: new Array(new Audio('assets/skins/default/mp3/chalk-on-board-1.mp3'),
                     new Audio('assets/skins/default/mp3/chalk-on-board-2.mp3'),
                     new Audio('assets/skins/default/mp3/chalk-on-board-3.mp3'),
                     new Audio('assets/skins/default/mp3/chalk-on-board-4.mp3')),

    onClickEffects: function(el) {
        var self = this;
        self.clickAnimation(el);
        self.clickSound();
    },

    clickAnimation: function(el) {
        var self = this;
        var timeLine = new TimelineLite();
        //var tween = new TweenLite(self.element, .25, {css:{boxShadow: "0px 0px 0px"}});

        timeLine.to(el, .1, {css:{boxShadow: "0px 0px 0px #000000"}});
        timeLine.to(el, .1, {css:{boxShadow: "10px 10px 15px #000000"}});

        timeLine.play();
    },

    clickSound: function() {
        var self = this;
        var i = Math.floor((Math.random()*3)+0);
        self.sound[i].play();
    }
};

DartPointer.prototype.skin = {
    sound: new Array(new Audio('assets/skins/default/mp3/dart-hit-1.mp3'),
                     new Audio('assets/skins/default/mp3/dart-hit-2.mp3'),
                     new Audio('assets/skins/default/mp3/dart-hit-3.mp3'),
                     new Audio('assets/skins/default/mp3/dart-hit-4.mp3')),

    onPlaceEffects: function() {
        var self = this;
        self.placeSound();
    },

    placeSound: function() {
        var self = this;
        var i = Math.floor((Math.random()*3)+0);
        self.sound[i].play();
    }
};
