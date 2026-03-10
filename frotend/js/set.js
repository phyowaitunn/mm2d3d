
async function load(){

try{

let r=await fetch("https://api.allorigins.win/raw?url=https://api.set.or.th/api/set/index");

let d=await r.json();

let set=d.last||0;

document.getElementById("setindex").innerText=set;

let two=set.toString().slice(-2);

document.getElementById("twod").innerText=two;

}catch(e){
console.log(e)
}

}

setInterval(load,10000);
load();
