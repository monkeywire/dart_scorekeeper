DartPointer = function(dartboard) {
    var self = this;
    self.dartboard = dartboard;
    self.location  = undefined;
    self.element   = undefined;
    self.state     = 'dart-hover'
    self.build();
}

DartPointer.prototype.build = function() {
    var self = this;
    self.element = document.createElement('div');
    self.dartboard.element.appendChild(self.element);
    self.updateView();
    self.initTouch();
}

DartPointer.prototype.initTouch = function() {
    var self = this;
    /* Stop propagation so the dartboard does not take over when
    touching the dart marker*/
    self.element.addEventListener('touchstart', function(e) {
        e.stopPropagation(); self.pickUp();
    } );
    self.element.addEventListener('touchmove', function(e) {
        /* I have to fire mouse event to update the location on the dartboard
         there is a CSS property that is set during 'dart-hover' that allows
         me to click through the dart div to the dartboard */
        e.stopPropagation(); Touch.fireMouseEvent(e, 'click'); self.move()
    } );
    self.element.addEventListener('touchend', function(e) {
        e.stopPropagation(); self.place();
    } );
}

DartPointer.prototype.updateView = function() {
    var self = this;
    self.updateLocation();
    self.element.style.left   = self.location.cordX + 'px';
    self.element.style.top    = self.location.cordY + 'px';
    self.element.setAttribute('class', 'dart ' + self.state);
}

DartPointer.prototype.move = function() {
    var self = this;
    self.updateView();
}

DartPointer.prototype.place = function() {
    var self = this;
    self.updateLocation();
    self.state    = 'dart-placed';
    self.updateView();
    self.dartboard.viewGlass.hide();
    self.skin.onPlace();
}

DartPointer.prototype.pickUp = function() {
    var self = this;
    self.state = 'dart-hover';
    self.updateView();
    self.dartboard.viewGlass.show();
}

DartPointer.prototype.updateLocation = function() {
    var self = this;
    self.location = app.dartBoard.location;
}

DartPointer.prototype.removeElement = function() {
    var self = this;
    self.element.parentNode.removeChild(self.element);
}
