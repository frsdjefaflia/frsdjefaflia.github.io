//Old code - V2
/*
var navbar = document.getElementById("navbar");
navbar.onclick = function(){
    if (document.getElementById("list").style.left === "" || document.getElementById("list").style.left === "-100%"){
        document.getElementById("list").style.left = "0";
        document.getElementById("open").style.display = "none";
        document.getElementById("close").style.display = "block";
    }
    else {
        document.getElementById("list").style.left = "-100%"
        document.getElementById("open").style.display = "block";
        document.getElementById("close").style.display = "none";
    }
};*/

//V3
var btnNavbar = document.querySelector('.navbar');
var iconOpen = document.querySelector('.fa-bars');
var iconCloce = document.querySelector('.fa-times');
var listHeader = document.querySelector('.list');

btnNavbar.onclick = function(){
    listHeader.classList.toggle('list-open');
    iconOpen.classList.toggle('close');
    iconCloce.classList.toggle('close');
};