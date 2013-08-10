/* Handles the sizing and layout of screen elements */
// TODO: See if we can move allot of this JS to CSS3*/
Layout = function() {
    this.dartLocation = document.getElementById('dart-location-box');
    this.chalkBoard   = document.getElementById('chalk-board');
    this.menu         = document.getElementById('menu');
    this.dartBoard    = document.getElementById('dart-board');
    this.imageMap     = new ImageMap(document.getElementById('dart-board-map'),600);
    this.init();
}

Layout.prototype.init = function() {
    this.onResize();
}

Layout.prototype.onResize = function() {
    var width = window.innerWidth;
    var height = window.innerHeight;


    if(isLandscape()) {
        var dartBoardWidth = Math.min(height * (8/10), width * (4/10));
        var dartBoardHeight = dartBoardWidth;
        var dartBoardTop = (height - dartBoardHeight) / 2;
        var dartBoardLeft = width * (1/10);

        var chalkBoardWidth = width * (3/10);
        var chalkBoardHeight = height - (dartBoardHeight + (height * (2/10)) + 30);
        var chalkBoardLeft = dartBoardLeft + dartBoardWidth + (width * (1/10));
        var chalkBoardTop = dartBoardTop + (dartBoardHeight * (2/10));

        var menuWidth = dartBoardWidth * (7/10);
        var menuHeight = menuWidth;
        var menuLeft = dartBoardLeft + (dartBoardLeft * (7/10));
        var menuTop = dartBoardTop + (dartBoardWidth * (1/10));
    } else { //Portrait
        var dartBoardWidth = Math.min(width * (8/10), height * (6/10));
        var dartBoardHeight = dartBoardWidth;
        var dartBoardLeft = (width - dartBoardWidth) / 2;
        var dartBoardTop = height * (1/10);

        var chalkBoardWidth = width * (8/10);
        var chalkBoardHeight = height - (dartBoardHeight + (height * (2/10)) + 30);
        var chalkBoardLeft = width * (1/10);
        var chalkBoardTop = dartBoardTop + dartBoardHeight + (height * (1/20));

        var menuWidth = dartBoardWidth * (6/10);
        var menuHeight = menuWidth;
        var menuLeft = (width - menuWidth) / 2;
        var menuTop = dartBoardTop + (dartBoardWidth * (2/10));
    }

    this.chalkBoard.style.left = chalkBoardLeft + 'px';
    this.chalkBoard.style.width = chalkBoardWidth + 'px';
    this.chalkBoard.style.height = chalkBoardHeight + 'px';
    this.chalkBoard.style.top = chalkBoardTop + 'px';

    this.dartBoard.style.left = dartBoardLeft + 'px';
    this.dartBoard.style.width = dartBoardWidth + 'px';
    this.dartBoard.style.height = dartBoardHeight + 'px';
    this.dartBoard.style.top = dartBoardTop + 'px';

    this.menu.style.left = menuLeft + 'px';
    this.menu.style.width = menuWidth + 'px';
    this.menu.style.height = menuHeight + 'px';
    this.menu.style.top = menuTop + 'px';

    this.imageMap.resize(dartBoardWidth);
}
