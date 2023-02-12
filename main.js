

var button = document.getElementById("button");
var input = document.querySelector("input");

button.onclick = function (){
    var input = document.querySelector("input");
    var myString = document.getElementById("inner");
    if ( input.value === "" ){
        input.value = "example@gmail.com";
        myString.style.visibility = "visible";
        input.style.border = "1px solid red";
    }
};

input.onclick = function (){
    var myString = document.getElementById("inner");
    input.value = "";
    myString.style.visibility = "hidden";
    input.style.border = "1px solid black";
};