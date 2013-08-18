Menu = function(elementId) {
    var self = this;
    self.el = document.getElementById(elementId);
    self.menuTitle = ko.observable();
    self.menuItems = ko.observableArray();
    ko.applyBindings(self, self.el);
}

Menu.prototype.showMain = function() {
    var self = this;
    self.menuTitle('Main Menu');
    self.menuItems.removeAll();
    self.menuItems.push(
        {
            text: 'New Game',
            onClick: function() {
                app.newGame();
                app.menu.hide();
            },
        });
    self.menuItems.push(
        {
            text: 'Resume Game',
            onClick: function() {
                app.menu.hide();
            },
        }
    );
}

Menu.prototype.show = function() {
    var self = this;
    self.el.style.visibility = 'visible';
}

Menu.prototype.hide = function() {
    var self = this;
    self.el.style.visibility = 'hidden';
}



