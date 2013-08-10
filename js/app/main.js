/* Initializes and starts all the js code */
//Initialize the view
var layout = new Layout();

//Initialize elements
var dartboard  = new Dartboard();
var chalkboard = new Chalkboard();
var menu       = new Menu();
var play       = new SoundManager();
var animate    = new AnimationManager();

//Bind window resize events
window.onresize = function(event) { layout.onResize(); };


//Initialize the game engine.
var game = undefined;
newGame = function() {
    //TODO Support for custom player names
    //TODO Remove hard coding for 301
    game = new Game_01(['Player1', 'Player2'], 3);
    game.prevPlayerIndex = game.playerTurn;
    game.updateView = function() {
        //TODO better player is winner handling

        if(game.playerScoreByIndex(0) == 301 || game.playerScoreByIndex(1) == 301) {
            alert('We Have A Winner');
            menu.toggleMenu();
        }
        //TODO remove hard coded 301
        //alert(this.prevPlayerIndex != game.playerTurn);
        if(this.prevPlayerIndex != game.playerTurn) {
            var i = this.prevPlayerIndex;
            chalkboard.setPlayerScore(i, 301 - game.playerScoreByIndex(i));
            this.prevPlayerIndex = game.playerTurn;
        }
        //chalkboard.setPlayerScore(0, 301 - game.playerScoreByIndex(0));
        //chalkboard.setPlayerScore(1, 301 - game.playerScoreByIndex(1));
        chalkboard.setRound('Round ' + game.round);
        chalkboard.setTurn(game.currentPlayerName() + '\'s Turn');



    };

    game.updateView();
    menu.toggleMenu();
    dartboard.endTurnButton.show();
}
