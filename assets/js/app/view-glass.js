ViewGlass = function(id, zoom) {
    var self      = this;
    self.zoom     = zoom;
    self.element  = document.getElementById(id);
    // self.updateView();
}

ViewGlass.prototype.centerOn = function(x, y) {
    var self      = this;
    var bkgWidth  = app.dartboard.getWidthValue();
    var selfWidth = self.getWidthValue();

    var left   = -((x * self.zoom) - (selfWidth / self.zoom));
    var top    = -((y * self.zoom) - (selfWidth / self.zoom ));
    var height = bkgWidth * self.zoom;
    var width  = bkgWidth * self.zoom;

    self.element.style.backgroundSize     = height + 'px ' + width + 'px';
    self.element.style.backgroundPosition = left   + 'px ' + top   + 'px';
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
