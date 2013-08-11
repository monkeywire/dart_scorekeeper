DartMarker = function(label, pos, index) {
    this.board = document.getElementById('dart-board');
    this.locBox = new DartLocationBox();
    this.index = index;
    //this.recycleButton = new RecycleButton(this);
    this.init(label, pos);
}


DartMarker.prototype.init = function(label, pos) {
    var that = this;
    this.setPos(label, pos)
    //build dart marker element
    this.elem = document.createElement('div');
    this.elem.setAttribute('class', 'dart-marker');
    this.elem.setAttribute('style', 'top:' + this.pos.y + 'px; left:' + this.pos.x + 'px;');
    this.board.appendChild(this.elem);
    this.elem.appendChild(this.locBox.elem);
    //this.elem.appendChild(this.recycleButton.elem);
    this.elem.addEventListener('touchstart', function(e) { that.touchstart(e); } );
    //this.elem.addEventListener('touchend', function(e) { return; } );
    //this.elem.addEventListener('touchmove', function(e) { return; } );
    this.locBox.setText(this.label);
}

DartMarker.prototype.move = function(label, pos) {
    this.setPos(label, pos);
    this.elem.removeAttribute('style');
    this.elem.setAttribute('style', 'top:' + this.pos.y + 'px; left:' + this.pos.x + 'px;');
    this.locBox.setText(this.label);
}

DartMarker.prototype.place = function(label) {
    this.locBox.hide();
    play.randomDartSound();
    //this.recycleButton.show();
}

DartMarker.prototype.remove = function() {
    //use this instead of .remove for compatibility to mobile android
    this.elem.parentNode.removeChild(this.elem);
}

DartMarker.prototype.setPos = function(label, pos) {
    this.label = label;
    pos.x = pos.x - this.board.style.left.replace('px', '');
    pos.y = pos.y - this.board.style.top.replace('px', '');

    this.pos = pos;
}

/*DartMarker.prototype.remove = function() {
    this.elem.parent.removeChild(this.elem);
}*/

DartMarker.prototype.touchstart = function(event) {
    //Make sure he dartboard does not take over here.
    event.stopPropagation();
    if(navigator.userAgent.match(/Android/i)) { event.preventDefault(); };
    this.locBox.show();
    return;
}

