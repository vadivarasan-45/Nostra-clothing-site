var head__one=document.querySelector(".head__one")

head__one.addEventListener("click",function(){
     head__one.parentElement.style.marginTop="-60px"
     head__one.parentElement.style.transition="1s"

})
var right=document.querySelector(".slider-two")
var image=document.querySelector(".photo__header")
var num=0

right.addEventListener("click",function(){
     num=num+100

if(num>200)
{
    num=0
    image.style.marginLeft=0;
}
else{
    image.style.marginLeft="-"+num+"vw";
}
})

var hearts=document.querySelectorAll("#heart")

hearts.forEach((heart) => {
heart.addEventListener("click",function(){

     if(event.target.src.indexOf("blackheart")>0){
          event.target.src="photo/pngimg.com - heart_PNG51335.png"
     }
     else{
          event.target.src="photo/blackheart.png"
     }
})
})
var c=document.getElementById("close")
var left=document.querySelector(".left")
var menu_o=document.querySelector(".menu_o")
c.addEventListener("click",function()
{
 left.style.marginLeft="100%";
 left.style.transition="2s";
})
menu_o.addEventListener("click",function(){
     left.style.marginLeft="50%";
 left.style.transition="2s";
})