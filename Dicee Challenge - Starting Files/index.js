var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var dic = "dice"+ randomNumber1+ ".png"; 
var image = "images/"+dic; 
document.querySelector(".dice .img1").setAttribute("src",image); 

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
var dic2 = "dice"+ randomNumber2+ ".png"; 
var image2 = "images/"+dic2; 
document.querySelectorAll("img")[1].setAttribute("src",image2); 

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins!";
} 
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins!";
} 
else 
{
    document.querySelector("h1").innerHTML="Draw!";
}