var a=Math.floor(Math.random()*6)+1;
var b=Math.floor(Math.random()*6)+1;
if(a==b){
    document.querySelector("h1").innerHTML="Match Draw.!";
}
else if(b<a){
    document.querySelector("h1").innerHTML="&#10024;player 1 won"
}
else{
    document.querySelector("h1").innerHTML="player 2 won&#10024;"
}
var randomImgSrc="images/"+"dice"+a+".png";
var randomImgSrc1="images/"+"dice"+b+".png";
document.querySelector(".img1").setAttribute("src",randomImgSrc);
document.querySelector(".img2").setAttribute("src",randomImgSrc1);
