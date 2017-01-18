
//window.onload = main();
var studentnames2 = ["George Fox", "Corban" , "Willamette", "PSU" , "Chemeketa" , "Western",];
var studentnames4 = [ "Victor", "David", "Omar", "Jasmine" , "Lizeth" , "Elias", "Shafi" , "Adriana", "Edith", "Veronica" , "Geraldyn", "Ivan", "Bryan" , "Bella" , "Yhair"];
var studentnames5 = [ "Amber", "David", "Jonathan", "Ezequiel", "Roman", "Oscar", "Francisco", "Yareli", "Jasma", "Melissa", "Aaron" , "Mitzi", "Baldemar", "Yareli", "Marcos", "Luis" , "Adamary"];
var studentnames6 = ["Edith", "Judith", "Michell", "Oscar", "Dulce", "Jordan", "Lance", "Madiha", "Christian", "Giselle", "Annmarie", "Rose", "Yuliana", "Joanna", "Veronica", "Brian", "Beyonce", "Andrea","Gabby" , "Lizeth", "Ana" , "Alejandra"];


function randomnumber2() { 
  var winner2 = studentnames2[Math.floor(Math.random() * studentnames2.length)];
  var x = Math.floor((Math.random() * 10) + 1);
    setTimeout(function choosewho() {document.getElementById("winner").innerHTML = " Is " + winner2 + " ready to learn?";}, x * 3000);
    setTimeout(function playit() {play();}, x * 3000);
    document.getElementById("demo").innerHTML = x;
}
  
function randomnumber3() { 
  var winner3 = studentnames3[Math.floor(Math.random() * studentnames3.length)];
  var x = Math.floor((Math.random() * 10) + 1);
    setTimeout(function choosewho() {document.getElementById("winner").innerHTML = " Is " + winner3 + " ready to learn?";}, x * 300000);
    setTimeout(function playit() {play();}, x * 300000);
        document.getElementById("demo").innerHTML = x;

}

function randomnumber4() { 
  var winner4 = studentnames4[Math.floor(Math.random() * studentnames4.length)];
  var x = Math.floor((Math.random() * 10) + 1);
    setTimeout(function choosewho() {document.getElementById("winner").innerHTML = " Is " + winner4 + " ready to learn?";}, x * 300000);
    setTimeout(function playit() {play();}, x * 300000);
        document.getElementById("demo").innerHTML = x;

}

function randomnumber5() { 
  var winner5 = studentnames5[Math.floor(Math.random() * studentnames5.length)];
  var x = Math.floor((Math.random() * 10) + 1);
    setTimeout(function choosewho() {document.getElementById("winner").innerHTML = " Is " + winner5 + " ready to learn?";}, x * 300000);
    setTimeout(function playit() {play();}, x * 300000);
        document.getElementById("demo").innerHTML = x;

}

function randomnumber6() { 
  var winner6 = studentnames6[Math.floor(Math.random() * studentnames6.length)];
  var x = Math.floor((Math.random() * 10) + 1);
    setTimeout(function choosewho() {document.getElementById("winner").innerHTML = " Is " + winner6 + " ready to learn?";}, x * 300000);
    setTimeout(function playit() {play();}, x * 300000);
        document.getElementById("demo").innerHTML = x;

}


function play() { 
  var audio = document.getElementById("BB8");
    audio.play(); 
} 



//function demo() {
//  document.getElementById("demo").innerHTML = winner2;
//}

