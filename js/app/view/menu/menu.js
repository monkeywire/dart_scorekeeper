/* Handles the menu functions */
Menu = function() {
    this.menu  = document.getElementById('menu');
}

Menu.prototype.toggleMenu = function() {
    var value = this.menu.style.visibility;
    if(value == 'hidden')
        this.menu.style.visibility = 'visible';
    else
        this.menu.style.visibility = 'hidden';
}
