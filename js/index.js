var arr_img = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var play = ["Player 1","Player 2"];
var roll = 1;

var play_1;
var play_2;

function rollDice(){

	var ran_num = Math.floor(Math.random() * arr_img.length);

	if (roll % 2 !== 0){
		play_1 = ran_num;
		document.querySelector(".img1").setAttribute("src",arr_img[ran_num]);
		document.querySelector(".spin-btn").innerHTML = play[1];
	}
	else{
		play_2 = ran_num;
		document.querySelector(".img2").setAttribute("src",arr_img[ran_num]);
		document.querySelector(".spin-btn").innerHTML = "Reset";
		checkWin()
	}
	


	roll++;
}


function checkWin(){
	if (play_1 === play_2){
		document.querySelector(".win").innerHTML = "<strong>🚩 Its a Draw 🚩</strong>";
	}
	else{
		if(play_1 > play_2){
			document.querySelector(".win").innerHTML = "<strong>🚩 Player 1 Wins</strong>";
		}
		else{
			document.querySelector(".win").innerHTML = "<strong>Player 2 Wins 🚩</strong>";
		}
	}
}


function step(){
	var checkStatus = document.querySelector(".spin-btn").textContent;
	if (checkStatus == "Reset"){
		roll = 1;
		play_1 = 0;
		play_2 = 0;
		document.querySelector(".win").innerHTML = "";
		document.querySelector(".img1").setAttribute("src","images/dice0.png");
		document.querySelector(".img2").setAttribute("src","images/dice0.png");
		document.querySelector(".spin-btn").innerHTML = play[0];	
	}
	else{
		rollDice();
	}
}