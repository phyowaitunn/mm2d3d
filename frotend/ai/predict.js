
function ai(){

let n=Math.floor(Math.random()*100);

document.getElementById("ai").innerText=n;

}

setInterval(ai,15000);
ai();
