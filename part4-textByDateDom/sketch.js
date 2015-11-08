var text1 = "hang in there, buddy";
var text2 = "why do you keep staring at me?";
var mainText;
var bodyElement;
var mainTextElement
var dayOfMonth;



/**
 * Setup the sketch
 */
function setup() {
	createCanvas(windowWidth, windowHeight);

	bodyElement = select('body');

	dayOfMonth = day();
	// dayOfMonth = 15;
	if(dayOfMonth < 15) {
		mainText = text1;
	} else {
		mainText = text2;
	}

	// draw main text element using HTML instead of canvas
	// http://p5js.org/reference/#/libraries/p5.dom
	mainTextElement = createElement('h1', mainText);
	mainTextElement.style('width', '100%');
	mainTextElement.style('text-align', 'center');
	mainTextElement.style('font-weight', 'normal');
	mainTextElement.parent(bodyElement);
	mainTextElement.position(width/0, height/2);
}

/**
 * Main animation loop
 */
function draw() {



}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
