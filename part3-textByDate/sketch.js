var text1 = "hang in there, buddy";
var text2 = "why do you keep staring at me?";
var mainText;
var dayOfMonth;



/**
 * Setup the sketch
 */
function setup() {
	createCanvas(windowWidth, windowHeight);

	fill(50);
	noStroke();

	// set the horizontal alignment
	textAlign(CENTER);
	// no bold or italics
	textStyle(NORMAL);
	// set the font size
	textSize(32);
	// set the typeface
	textFont('Helvetica Neue');

	// dayOfMonth = day();
	dayOfMonth = 16;
	if(dayOfMonth < 15) {
		mainText = text1;
	} else {
		mainText = text2;
	}

}

/**
 * Main animation loop
 */
function draw() {

	// text(text1, 200, 50);

	text(mainText, width/2, height/2);

}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
