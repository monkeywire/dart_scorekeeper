Menu = function(elementId, buttonId) {
    var self = this;
    self.el        = document.getElementById(elementId);
    self.buttonEl  = document.getElementById(buttonId);
    self.menuTitle = ko.observable();
    self.menuItems = ko.observableArray();
    ko.applyBindings(self, self.el);
    self.buttonEl.setAttribute('onclick', 'app.menu();')
}

Menu.prototype.showMain = function() {
    var self = this;
    self.show();
    self.menuTitle('Main Menu');
    self.menuItems.removeAll();
    self.menuItems.push(
        {
            text: 'New Game',
            onClick: function() {
                app.newGame();
                self.hide();
            },
        });
    self.menuItems.push(
        {
            text: 'Resume Game',
            onClick: function() {
                self.hide();
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



