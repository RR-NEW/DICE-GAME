var randomNumber1=Math.floor(Math.random()*6)+1;
var randomping="dice"+randomNumber1+".png";
var randomimageso="images/"+randomping;
var image1 =document.querySelectorAll("img")[0].setAttribute("src",randomimageso);
var randomnumber2=Math.floor(Math.random()*6)+1;
var randomping1="dice"+randomnumber2+".png";
var randomimgso2="images/"+randomping1;
var img2=document.querySelectorAll("img")[1].setAttribute("src",randomimgso2);
if(randomNumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomNumber1<randomnumber2){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else
{
    document.querySelector("h1").innerHTML="Draw";
}
