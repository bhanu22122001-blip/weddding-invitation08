// COUNTDOWN
var target = new Date("May 8, 2026 11:15:00").getTime();

setInterval(function() {
  var now = new Date().getTime();
  var diff = target - now;

  var d = Math.floor(diff/(1000*60*60*24));
  var h = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
  var m = Math.floor((diff%(1000*60*60))/(1000*60));
  var s = Math.floor((diff%(1000*60))/1000);

  document.getElementById("timer").innerHTML =
    d+"d "+h+"h "+m+"m "+s+"s";
},1000);


// MUSIC (auto after click)
document.addEventListener("click", function(){
  document.getElementById("bgMusic").play();
}, {once:true});


// WISHES
function saveWish() {
  var name = document.getElementById("name").value;
  var msg = document.getElementById("message").value;

  var p = document.createElement("p");
  p.innerHTML = "<b>"+name+":</b> "+msg;

  document.getElementById("wishList").appendChild(p);

  document.getElementById("name").value="";
  document.getElementById("message").value="";
}