var x = setInterval(function()  {
var bakra = new Date("july 21, 2021").getTime();

var current = new Date().getTime()
// console.log(bakra)
// console.log(current)

    
var diff = bakra - current;
// console.log(diff);

var days = Math.floor(diff / (1000*60*60*24));
//console.log(days);

var hours = Math.floor((diff % (1000*60*60*24))  / (1000*60*60));
//console.log(hours);


var min = Math.floor((diff % (1000*60*60)) / (1000*60));
//console.log(min);


var sec =Math.floor((diff % (1000*60)) / 1000 );
//console.log(sec);

document.getElementById("main").innerHTML = days

document.getElementById("main1").innerHTML = hours  

document.getElementById("main2").innerHTML = min 

document.getElementById("main3").innerHTML = sec 


}, 1000 );
 
function enter(){
    var button =  document.getElementById("but")
    button.style.display = "none";
    var x = prompt("Enter Your Name")
    var a =  document.getElementById("head");
    document.getElementById("head").innerHTML = x + " ki Taraf se Advance Eid Mubarak"
    console.log(button)
    console.log(a)

}