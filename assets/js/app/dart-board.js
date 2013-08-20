DartBoard = function(id) {
    var self = this;
    self.el       = document.getElementById(id),
    self.darts    = new Array();
    // self.location = new DartboardLocation();
    self.initTouchEvents();
};

DartBoard.prototype.initTouchEvents = function() {
    var self = this;
    // All touch events are handled by the DartPointer so we pass
    // them on to the last dart pointer.
    self.el.addEventListener('touchstart', function(event) {
        self.darts.push(new DartPointer(event));
        self.darts.last().pickUp(event);
    } );

    self.el.addEventListener('touchend', function(event) {
        self.darts.last().place(event);
    } );

    self.el.addEventListener('touchmove', function(event) {
        self.darts.last().move(event);
    } );
}

DartBoard.prototype.show = function() {
    var self = this;
    self.el.style.visibility = 'visible';
};

DartBoard.prototype.hide = function() {
    var self = this;
    self.el.style.visibility = 'hidden';
};

DartBoard.prototype.getWidthValue = function() {
    var self = this;
    return parseInt($(self.el).getStyle('width'));
}

DartBoard.prototype.clearDarts = function() {
    var self = this;
    self.darts.forEach(function(dart) {
        dart.removeElement();
    });
    self.darts = new Array();
}
