### Current project
* Add touch events to the darts (move, remove, ok);
** Maybe just a move button? is there realy a need for remove and ok
* Add done check mark (will clear darts, and send darts to the game engine)
** Note: will have to add one dart at a time checking to make sure it is not a bust



### Basic functional layout
All the elements that the view needs to update are setup as classes.  Each of these
classes handle all the functions for that element.

The layout class handles all the sizing and positioning of the HTML elements
on the screen.

Touch events are mapped to mouse events in a attempt to keep cross platform
compatiablity as much as possible.

The dart board handles touch to mouse events a little differently.  Touchmove maps
to mouseover, and touchend maps to mouseclick.  This way when the user starts the
touch event on the dart boad the user can move his finger and the display will
update as needed based on the element he is over on the dartboard, when the user
lifts his finger it will trigger the click event on the image map.  This should
allow for easy mapping to click/mouseover events in the image map attributes.

### Competing Products
http://www.marmarapps.com/dart-scorekeeper.aspx


### Features
* Post scores to face book
* Easy snap with text display of dart position
* click and drag dart to position
* keep track of who's turn it is
* double in & double out options
* game type option 301, 501, 801, 1001
* keep track of scores on longer dart board (scores should scroll)
* undue dart placement
* themes


### Modes that the game can be hard coded into
* Free Mode (only keeps track of scores)
* Paid Mode (keeps track of scores, stats, & comes with trainer mode)

### Vision
The free application will serve as a advertisement for the paid version.  There
will be a link in the menu that if the unpaid version is installed will run the
advertisement for the paid version.

The paid version will record stats for later review.  The trainer mode will look
at the users stats and suggest 'weights' for places on the board.  The program will
then suggest parts of the board to 'train' on.  The program will also display custom
outs based on the weights assigned to darts.  So if you are better at hitting a 20
instead of the double 10, and you don't need the double the game will suggest the 20
as part of the out for the 10.

The part of the paid program as well will 'test' you on outs.  It will give three areas
to hit on the board, and track your accuracy on the various locations on the board
it will then be able to focus on the areas of the board that need the most work
for you to practice on and track your progress.


### Release schedule
Free Mode & Paid Mode (Stats tracking only, will contain information on trainer mode to come)
Minor Upgrades and fixes
Paid Mode (With added trainer mode)
