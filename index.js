console.log("hello world")

let para = document.getElementById('para1');
let para2 = document.getElementById('para2')
let para3 = document.getElementById('para3');
let span = document.getElementById('span');
let btn = document.getElementById('btn')
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let services = document.getElementById('services')

function click1() {
    if (para.style.display != "none" && para2.style.display != "block" && para3.style.display != "block") {
        para.style.display = "none";
        para2.style.display = "block";
        para3.style.display = "block";

    } else {
        para.style.display = "block";
        para2.style.display = "none";
        para3.style.display = "none";

    }
}

function ok2() {
    window.open("fastfood.html ");
}

function ok3() {
    window.open("salad.html ");
}

function ok4() {
    window.open("delivery.html ");
}