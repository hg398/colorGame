var numOfSquare=6;
// color array
var colors;// = generateRandomColors(numOfSquare);
//square array
var squares=document.querySelectorAll(".square");
//final color
//var pickedColor=pickColor();

var h1=document.querySelector(".top h1");
//top RGB
var colorDisplay=document.querySelector("#colorDisplay");
//try again/correct
var message=document.querySelector("#message");
//reset(play again)
var reset=document.querySelector("#reset");	
//game mode
var modeButtons=document.querySelectorAll(".mode");

//initialization of game
init();

//reset game
reset.addEventListener("click",function(){
	//call resetGame function
	resetGame();
});

//function to generate random RGB
function getRandomRgb() {  
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

//function to generate array of colors
function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++)
		arr.push(getRandomRgb());
	return arr;
}

//function to pick final color
function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

//function to change colors of page when guess is correct
function finalColors(){
	reset.textContent="Play Again?";
	h1.style.backgroundColor=pickedColor;
	for(var i=0;i<squares.length;i++)
		squares[i].style.backgroundColor=pickedColor;
}

//function to reset Game
function resetGame(){	
	//play again --> new colors
	reset.textContent="New Colors";
	//change h1 background on reset
	h1.style.backgroundColor="steelblue";
	//remove message try again/correct
	message.textContent="";
	//generate new colors
	colors=generateRandomColors(numOfSquare);
	//assign new colors
	for(var i=0;i<squares.length;i++)
	{
			if(colors[i]){
				squares[i].style.display="block";
				squares[i].style.backgroundColor=colors[i];
			} 
			else squares[i].style.display="none";
	}
	//set new final color
	pickedColor=pickColor();
	//set new top RGB
	colorDisplay.textContent=pickedColor;
}

function init(){
	//call reset function
	resetGame();
	//mode button event listeners
	for(var i=0;i<modeButtons.length;i++)
	{
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("addEffect");
			modeButtons[1].classList.remove("addEffect");
			this.classList.add("addEffect");
			if(this.textContent==="Easy")
				numOfSquare=3;
			else numOfSquare=6;
			resetGame();
		});
	}
	//square event listeners
	for(var i=0;i<squares.length;i++)
	{
		//event listeners
		squares[i].addEventListener("click",function(){
			//get color of picked square
			var clickedColor=this.style.backgroundColor;
			//compare to pickedColor
			if(clickedColor===pickedColor){
				finalColors();
				message.textContent="Correct!";
			}
			else {
				this.style.backgroundColor="#232323";
				message.textContent="Try Again!";
			}
		});
	}
}