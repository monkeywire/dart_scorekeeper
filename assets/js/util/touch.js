var Touch = {
    fireMouseEvent: function(event, eventType) {
        this.fireMouseEventAtPos(eventType, Touch.touchPosX(event), Touch.touchPosY(event));
    },

    fireMouseEventAtPos: function(eventType, x,y){
        var ev = document.createEvent("MouseEvent");
        var el = document.elementFromPoint(x,y);
        ev.initMouseEvent(
            eventType,
            true /* bubble */, true /* cancelable */,
            window, null,
            x, y, x, y, /* coordinates */
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
