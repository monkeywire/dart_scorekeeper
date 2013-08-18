DartboardLocation = function() {
    var self = this;
    self.cordX    = undefined;
    self.cordY    = undefined;
    self.area     = undefined;
    self.isDouble = undefined;
    self.value    = undefined;
};

Dartboard = function(id) {
    var self = this;
    self.element   = document.getElementById(id),
    self.location  = new DartboardLocation();
    self.darts     = new Array();
    self.viewGlass = new ViewGlass('view-glass');
    self.initTouchEvents();
};

Dartboard.prototype.initTouchEvents = function() {
    var self = this;
    self.element.addEventListener('touchstart', function(e) { self.touchStart(e); } );
    self.element.addEventListener('touchend', function(e) { self.touchEnd(e); } );
    self.element.addEventListener('touchmove', function(e) { self.touchMove(e); } );
}

Dartboard.prototype.onClick = function(event, label) {
    var self = this;
    self.updateLocation(event, self.parseLabel(label));
};

Dartboard.prototype.touchStart = function(event) {
    var self = this;
    Touch.fireMouseEvent(event, 'click');
    self.darts.push(new DartPointer(self));
    self.viewGlass.show();
}

Dartboard.prototype.touchMove = function(event) {
    var self = this;
    Touch.fireMouseEvent(event, 'click');
    self.darts.last().move();
}

Dartboard.prototype.touchEnd = function(event) {
    var self = this;
    Touch.fireMouseEvent(event, 'click');
    self.darts.last().place();
    self.viewGlass.hide();
}

Dartboard.prototype.parseLabel = function(label) {
    var value    = parseInt(label, 10);
    var isDouble = false;
    var type     = label.replace(value, '');
    switch(type) {
        case 'd':
            value *= 2;
            isDouble = true;
            break;
        case 't':
            value *= 3;
            break;
        case 'miss':
            value = 0;
            break;
        case 'bull':
            isDouble = true;
            value = 25;
            break;
        case 'iris':
            isDouble = true;
            value = 50;
            break;
    };
    return {area: label, value: value, isDouble: isDouble};
};

Dartboard.prototype.updateLocation = function(event, label) {
    var self = this;
    self.location.area     = label.area;
    self.location.value    = label.value;
    self.location.isDouble = label.isDouble;
    self.location.cordX    = event.pageX - $(self.element).documentOffset().offsetL;
    self.location.cordY    = event.pageY - $(self.element).documentOffset().offsetT;
    self.viewGlass.center(self.getWidthValue(), self.location.cordX, self.location.cordY);
};

Dartboard.prototype.show = function() {
    var self = this;
    self.element.style.visibility = 'visible';
};

Dartboard.prototype.hide = function() {
    var self = this;
    self.element.style.visibility = 'hidden';
};

Dartboard.prototype.getWidthValue = function() {
    var self = this;
    return parseInt($(self.element).getStyle('width'));
}

Dartboard.prototype.clearDarts = function() {
    var self = this;
    self.darts.forEach(function(dart) {
        dart.removeElement();
    });
    self.darts = new Array();
}
