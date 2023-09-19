var n=prompt("Player 1, What is your name?")
var m=prompt("Player 2, What is your name?")

var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/"+ randomDiceImage;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/dice"+ randomNumber2 + ".png";
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2)

if(randomNumber1  > randomNumber2){
    document.querySelector("h1").innerHTML= n+ " Wins!🚩";}
else if(randomNumber2  > randomNumber1){
    document.querySelector("h1").innerHTML=m+ " Wins!🚩";
}
else{
    document.querySelector("h1").innerHTML="It's a Draw!!";
}