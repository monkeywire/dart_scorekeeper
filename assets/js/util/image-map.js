var ImageMap = function (mapId, orignalWidth) {
    var map = document.getElementById(mapId);
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
