var isLandscape = function() {
    if(window.innerWidth > window.innerHeight)
        return true;
    else
        return false;
}

var toggle_visibility = function(e) {
       if(e.style.visibility == 'hidden')
          e.style.visibility = 'visible';
       else
          e.style.visibility = 'hidden';

        if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
}


var ImageMap = function (map, orignalWidth) {
    var n,
        areas = map.getElementsByTagName('area'),
        len = areas.length,
        coords = [],
        previousWidth = orignalWidth;
    for (n = 0; n < len; n++) {
        coords[n] = areas[n].coords.split(',');
    }

    this.resize = function (newWidth) {
        var n, m, clen,
            x = newWidth / previousWidth;
        for (n = 0; n < len; n++) {
            clen = coords[n].length;
            for (m = 0; m < clen; m++) {
                coords[n][m] *= x;
            }
            areas[n].coords = coords[n].join(',');
        }
        previousWidth = newWidth;
        return true;
    };
}

var TouchExtensions = {
    fireMouseEventAtPos: function(event, x,y){
        var ev = document.createEvent("MouseEvent");
        var el = document.elementFromPoint(x,y);
        ev.initMouseEvent(
            event,
            true /* bubble */, true /* cancelable */,
            window, null,
            x, y, 0, 0, /* coordinates */
            false, false, false, false, /* modifier keys */
            0 /*left*/, null
        );
        el.dispatchEvent(ev);
    },

    touchPosX: function(event) {
        return event.changedTouches[0].pageX;
    },

    touchPosY: function(event) {
        return event.changedTouches[0].pageY;
    },

    touchPos: function(event) {
        var pos = {x: event.changedTouches[0].pageX,
                   y: event.changedTouches[0].pageY};
        return pos;
    }
}

