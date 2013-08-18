Extended = function(e) {
    this.e = e;
}

Extended.prototype.documentOffset = function() {
    var valueT = 0, valueL = 0;
    if (this.e.parentNode) {
      do {
        valueT += this.e.offsetTop  || 0;
        valueL += this.e.offsetLeft || 0;
        this.e = this.e.offsetParent;
      } while (this.e);
    }
    return {offsetL: valueL, offsetT: valueT};
}

Extended.prototype.getStyle = function(styleProp)
{
    var x = this.e;
    if (x.currentStyle)
        var y = x.currentStyle[styleProp];
    else if (window.getComputedStyle)
        var y = window.getComputedStyle(x,null).getPropertyValue(styleProp);
    return y;
}

$ = function(e) {
    return new Extended(e);
}
