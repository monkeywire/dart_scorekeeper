RecycleButton = function(that) {
    this.that = that;
    this.elem = document.createElement('div');
    this.elem.setAttribute('class', 'dart-recycle-button');
    this.elem.setAttribute('onClick', 'alert();');
}

RecycleButton.prototype.show = function() {
    this.elem.style.visibility = 'visible';
}

RecycleButton.prototype.hide = function() {
    this.elem.style.visibility = 'hidden';
}

RecycleButton.prototype.click = function() {
    alert();
    this.parent.parent.removeChild(this.parent);
}
