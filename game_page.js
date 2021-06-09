player1_name = localStorage.getItem("player1_name");
	player2_name = localStorage.getItem("player2_name");

	player1_score = 0;
	player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

function send(){
number1=document.getElementById("number1").value;
number2=document.getElementById("number2").value;
result=parseInt(number1)*parseInt(number2);
q="<h4>"+number1+"x"+number2+"</h4> <br><br>";
i="<input id='inputbox' style='text' placeholder='enter your anwser'>";
c="<br> <button id='button' onclick='check()' type='button'> check</button>";
row=q+i+c;
document.getElementById("output").innerHTML=row;
document.getElementById("number1").value="";
document.getElementById("number2").value="";
}