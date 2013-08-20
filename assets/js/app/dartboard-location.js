DartboardLocation = function() {
    var self = this;
    self.area     = undefined;
    self.isDouble = undefined;
    self.value    = undefined;
};

DartboardLocation.prototype.parseLabel = function(label) {
    var self = this;
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

DartboardLocation.prototype.set = function(label) {
    var self = this;
    label = self.parseLabel(label);
    self.area     = label.area;
    self.value    = label.value;
    self.isDouble = label.isDouble;
};

DartboardLocation.prototype.update = function(event) {
    // Clicks the dartboard imageMap that will call the DatboardLocation.set()
    // with the location on the dart board.
    Touch.fireMouseEvent(event, 'click');
}

