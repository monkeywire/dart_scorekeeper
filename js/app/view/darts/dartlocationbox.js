DartLocationBox = function() {
    this.elem = document.createElement('div');
    this.elem.setAttribute('class', 'dart-location-box');
    this.textElem = document.createElement('div');
    this.textElem.setAttribute('class', 'dart-location-text');
    this.elem.appendChild(this.textElem);
};

DartLocationBox.prototype.hide = function() {
    this.elem.style.visibility = 'hidden';
}

DartLocationBox.prototype.show = function() {
    this.elem.style.visibility = 'visible';
}

DartLocationBox.prototype.setText = function(text) {
    this.textElem.innerHTML = text;
}
