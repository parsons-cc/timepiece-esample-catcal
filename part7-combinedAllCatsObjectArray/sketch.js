var img;
var imageWidth = 600;
var imageHeight = 400;
var mainText;
var imagePath = '';
var bodyElement;
var mainTextElement;
var dayOfMonth;

// var catImages = [
// 	"images/cat_hammock.jpg",
// 	"images/cat_looking.jpg",
// 	"images/cat3.jpg",
// 	"images/cat4.jpg",
// 	"images/cat5.jpg",
// 	"images/cat6.jpg",
// 	"images/cat7.jpg",
// 	"images/cat8.jpg",
// 	"images/cat9.jpg",
// 	"images/cat10.jpg",
// 	"images/cat11.jpg",
// 	"images/cat12.jpg",
// 	"images/cat13.jpg"
// ];

var cats = [
	{
		text: "hang in there, buddy",
		path: "images/cat_hammock.jpg"
	},
	{
		text:  "why do you keep staring at me?",
		path: "images/cat_looking.jpg"
	},
	{
		text: "stop and smell the roses!",
		path: "images/cat3.jpg"
	},
	{
		text: "tastes like chicken",
		path: "images/cat4.jpg"
	},
	{
		text: "anyone have a breath mint?",
		path: "images/cat5.jpg"
	},
	{
		text: "i'm sleepy",
		path: "images/cat6.jpg"
	},
	{
		text: "why do you keep staring at me?",
		path: "images/cat7.jpg"
	},
	{
		text: "why do you keep staring at me?",
		path: "images/cat8.jpg"
	},
	{
		text: "why do you keep staring at me?",
		path: "images/cat9.jpg"
	},
	{
		text: "why do you keep staring at me?",
		path: "images/cat10.jpg"
	},
	{
		text: "why do you keep staring at me?",
		path: "images/cat11.jpg"
	},
	{
		text: "why do you keep staring at me?",
		path: "images/cat12.jpg"
	},
	{
		text: "why do you keep staring at me?",
		path: "images/cat13.jpg"
	}
];


function preload() {
	dayOfMonth = day();
	// manually change dayOfMonth to test
	// dayOfMonth = 6;
	// if(dayOfMonth == 1) {
	// 	mainText = "hang in there, buddy";
	// 	// imagePath = "images/cat_hammock.jpg";
	// } else if (dayOfMonth == 2){
	// 	mainText = "why do you keep staring at me?";
	// 	// imagePath = "images/cat_looking.jpg";
	// } else if (dayOfMonth == 3){
	// 	mainText = "stop and smell the roses!";
	// 	// imagePath = "images/cat3.jpg";
	// } else if (dayOfMonth == 4){
	// 	mainText = "tastes like chicken";
	// 	// imagePath = "images/cat4.jpg";
	// } else if (dayOfMonth == 5){
	// 	mainText = "anyone have a breath mint?";
	// 	// imagePath = "images/cat5.jpg";
	// } else if (dayOfMonth == 6){
	// 	mainText = "i'm sleepy";
	// 	// imagePath = "images/cat6.jpg";
	// } else if (dayOfMonth == 7){
	// 	mainText = "why do you keep staring at me?";
	// 	// imagePath = "images/cat7.jpg";
	// } else if (dayOfMonth == 8){
	// 	mainText = "why do you keep staring at me?";
	// 	// imagePath = "images/cat8.jpg";
	// } else if (dayOfMonth == 9){
	// 	mainText = "why do you keep staring at me?";
	// 	// imagePath = "images/cat9.jpg";
	// } else if (dayOfMonth == 10){
	// 	mainText = "why do you keep staring at me?";
	// 	// imagePath = "images/cat10.jpg";
	// } else if (dayOfMonth == 11){
	// 	mainText = "why do you keep staring at me?";
	// 	// imagePath = "images/cat11.jpg";
	// } else if (dayOfMonth == 12){
	// 	mainText = "why do you keep staring at me?";
	// 	// imagePath = "images/cat12.jpg";
	// } else if (dayOfMonth >= 13){
	// 	mainText = "why do you keep staring at me?";
	// 	// imagePath = "images/cat13.jpg";
	// }


	// because the first index is 0, and the first month is 1,
	// we need to compensate by subtracting 1 to get the index
	var currentCat = cats[dayOfMonth-1];
	console.log("currentCat", currentCat);
	mainText = currentCat.text;
	img = loadImage(currentCat.path);
	// var index = dayOfMonth-1;
	// img = loadImage(catImages[index]);
}

/**
 * Setup the sketch
 */
function setup() {
	createCanvas(windowWidth, windowHeight);

	bodyElement = select('body');

	console.log(bodyElement);

	// draw main text element using HTML instead of canvas
	// http://p5js.org/reference/#/libraries/p5.dom
	mainTextElement = createElement('h3', mainText);
	mainTextElement.style('width', '100%');
	mainTextElement.style('text-align', 'center');
	mainTextElement.style('font-weight', 'normal');
	mainTextElement.parent(bodyElement);
}

/**
 * Main animation loop
 */
function draw() {

	var red = map(hour(), 0, 24, 0, 255);
	var green = map(minute(), 0, 60, 0, 255);
	var blue = map(second(), 0, 60, 0, 255);

	background(red, green, blue);

	image(img, width/2-imageWidth/2, height/7, imageWidth, imageHeight);

	mainTextElement.position(width/0, 4*height/5);

}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
