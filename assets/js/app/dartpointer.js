DartPointer = function(event) {
    var self = this;
    self.el        = undefined;
    self.location  = {area: undefined, value: undefined, isDoubel: undefined};
    self.state     = 'dart-hover'
    self.build(event);
}

DartPointer.prototype.build = function(event) {
    var self = this;
    self.el = document.createElement('div');
    app.dartboard.el.appendChild(self.el);
    self.initTouch();
    self.updateView(event);
}

DartPointer.prototype.initTouch = function() {
    var self = this;
    /* Stop propagation so the dartboard does not take over when
    touching the dart marker*/
    self.el.addEventListener('touchstart', function(event) {
        event.stopPropagation();
        self.pickUp(event);
    } );

    self.el.addEventListener('touchmove', function(event) {
        event.stopPropagation();
        self.move(event);
    } );

    self.el.addEventListener('touchend', function(event) {
        event.stopPropagation();
        self.place(event);
    } );
}

DartPointer.prototype.updateView = function(event) {
    var self = this;
    var x = event.changedTouches[0].clientX - $(app.dartboard.el).documentOffset().offsetL;
    var y = event.changedTouches[0].clientY - $(app.dartboard.el).documentOffset().offsetT;
    self.el.setAttribute('class', 'dart ' + self.state);
    self.setPositionStyle(x, y);
    app.viewGlass.centerOn(x, y);
}

DartPointer.prototype.move = function(event) {
    var self = this;
    self.updateView(event);
}

DartPointer.prototype.place = function(event) {
    var self = this;
    self.state = 'dart-placed';
    self.updateLocation(event);
    self.updateView(event);
    app.viewGlass.hide();
    self.skin.onPlaceEffects();
}

DartPointer.prototype.pickUp = function(event) {
    var self = this;
    self.state = 'dart-hover';
    self.updateView(event);
    app.viewGlass.show();
}

DartPointer.prototype.updateLocation = function(event) {
    var self = this;
    app.boardLocation.update(event);
    self.location.area     = app.boardLocation.area;
    self.location.value    = app.boardLocation.value;
    self.location.isDouble = app.boardLocation.isDouble;
}

DartPointer.prototype.removeElement = function() {
    var self = this;
    self.el.parentNode.removeChild(self.el);
}

DartPointer.prototype.setPositionStyle = function(x, y) {
    var self = this;
    self.el.style.left = x + 'px';
    self.el.style.top  = y + 'px';
}
