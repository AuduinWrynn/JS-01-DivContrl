/**
 * Created by Mrkun on 2015/10/26.
 */
var red = document.getElementById("red");
var yellow = document.getElementById("yellow");
var blue = document.getElementById("blue");
var display = document.getElementById("display");
var w200 = document.getElementById("w200");
var w300 = document.getElementById("w300");
var w400 = document.getElementById("w400");
var h200 = document.getElementById("h200");
var h300 = document.getElementById("h300");
var h400 = document.getElementById("h400");
var reset = document.getElementById("reset");
var confirm = document.getElementById("confirm");
var settings = document.getElementById("settings");

window.onload=function(){
    settings.onclick = function() {document.getElementById("control").style.display = "block";};
    red.onclick = function()      {display.style.background = "red";};
    yellow.onclick = function()   {display.style.background = "yellow";};
    blue.onclick = function()     {display.style.background = "blue";};
    w200.onclick = function()     {display.style.width = "200px";};
    w300.onclick = function()     {display.style.width = "300px";};
    w400.onclick = function()     {display.style.width = "400px";};
    h200.onclick = function()     {display.style.height = "200px";};
    h300.onclick = function()     {display.style.height = "300px";};
    h400.onclick = function()     {display.style.height = "400px";};
    reset.onclick = function()    {display.style.width = "220px";display.style.height = "220px";display.style.background = "#cccccc";};
    confirm.onclick = function()  {document.getElementById("control").style.display ="none";}
}
