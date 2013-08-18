ChalkboardModel = function(elementId, startScore, names) {
    var self = this;
    self.el           = document.getElementById(elementId);
    self.round        = ko.observable(0);
    self.playerNames  = ko.observableArray();
    self.playerScores = ko.observableArray();
    self.initPlayers(startScore, names);
    self.playerTurn   = ko.observable(self.playerNames()[0]);
    ko.applyBindings(self, self.el);
}

ChalkboardModel.prototype.initPlayers = function(startScore, names) {
    var self = this;
    names.forEach( function(name) {
        self.playerNames.push(name);
        self.playerScores.push(ko.observableArray([startScore]));
    });
}

ChalkboardModel.prototype.addScore = function(index, score) {
    var self = this;
    self.playerScores()[index].push(score);
}

