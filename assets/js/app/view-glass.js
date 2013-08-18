ViewGlass = function(id) {
    var self = this;
    self.element  = document.getElementById(id);
    self.updateView();
}

ViewGlass.prototype.center = function(width, x, y) {
    var self = this;
    self.updateView(width, x, y);
}

ViewGlass.prototype.updateView = function(width, x, y) {
    var self = this;
    var zoom = 2;
    var selfWidth = self.getWidthValue();
    //We need to use a percentage here, since a negative px value will not work
    var left = -((x * zoom) - (selfWidth / zoom));
    var top  = -((y * zoom) - (selfWidth /zoom ));
    self.element.style.backgroundSize = width * zoom+ 'px ' + width * zoom+ 'px';
    self.element.style.backgroundPosition = left + 'px ' + top + 'px';
}

ViewGlass.prototype.getWidthValue = function() {
    var self = this;
    return parseInt($(self.element).getStyle('width'));
}

ViewGlass.prototype.show = function() {
    var self = this;
    self.element.style.visibility = 'visible';
}

ViewGlass.prototype.hide = function() {
    var self = this;
    self.element.style.visibility = 'hidden';
}
