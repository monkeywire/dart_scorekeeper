Darts = function () {
    this.darts = new Array();
}

Darts.prototype.add = function(label, value, pos) {
    if(this.darts.length >= 3)
        throw "too many darts";

    this.darts.push({marker: new DartMarker(label, pos), value: value});
}

Darts.prototype.moveLastDart = function(label, value, pos) {
    this.darts.last().marker.move(label, pos);
    this.darts.last().value = value;
}

Darts.prototype.placeLastDart = function(label, value) {
    this.darts.last().marker.place(label);
    this.darts.last().value = value;

    return this.darts.length == 3;
}

Darts.prototype.removeAllDarts = function() {
    this.darts.forEach(function(dart) {
        dart.marker.remove();
    });
    this.darts = new Array();
}

Darts.prototype.allDarts = function() {
    var rValue = Array();
    this.darts.forEach(function(dart) {
        rValue.push({label: dart.marker.label, value: dart.value});
    });
    return rValue;
}
