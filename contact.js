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