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
}
