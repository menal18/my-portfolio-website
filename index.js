//selecting a responsive menu icon
var menubtn=document.getElementById("menubtn")
var sidenav=document.getElementById("sidenav")
var closenav=document.getElementById("closenav")

 menubtn.addEventListener("click", function(){
   sidenav.style.right="0"
 })
 closenav.addEventListener("click", function(){
    sidenav.style.right="-50%"
 })