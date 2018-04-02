let playerOne = document.querySelector("#p1");
let playerTwo = document.querySelector("#p2");
let reset = document.querySelector("#reset");
//Player One Var
let p1Score = 0;
let p1Display = document.querySelector("#p1Display");
//Player Two Var
let p2Display = document.querySelector("#p2Display");
let p2Score = 0;
//End Gamr
let gameOver = false;
let winningScore = 5;
//Change Winning Score
let numInput = document.querySelector("input");
let winningScoreDisplay = document.querySelector("p span");


//Score Changing
playerOne.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});

playerTwo.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}

		p2Display.textContent = p2Score;
	}
});

//Reset Game
reset.addEventListener("click", function(){
	reset();
});
//Reset when Number is Changed
function reset(){
	reset.addEventListener("click", function(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
});

//Change Winning Score
numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});
