var navbar = document.getElementById("navbar");
navbar.onclick = function(){
    if (document.getElementById("list").style.left === "" || document.getElementById("list").style.left === "-100%"){
        document.getElementById("list").style.left = "0"
    }
    else {
        document.getElementById("list").style.left = "-100%"
    }
};