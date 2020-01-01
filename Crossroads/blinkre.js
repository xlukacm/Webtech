function setBlinkre1(){
    setInterval(yellowBlinker, 1000);
    setInterval(greenBlinker, 1000);
}
function setBlinkre2(){
    setInterval(yellowBlinker, 1000);
    setInterval(greenBlinker, 1000);
}
function setBlinkre7(){
    setInterval(greenBlinker, 1000);
}
function setBlinkre8(){
    setInterval(yellowBlinker, 1000);
    setInterval(greenBlinker, 1000);
}
function setBlinkre9(){
    setInterval(yellowBlinker, 1000);
    setInterval(greenBlinker, 1000);
}
function setBlinkre10(){
    setInterval(greenBlinker, 1000);
}
function setBlinkre13(){
    setInterval(greenBlinker, 1000);
}
function setBlinkre14(){
    setInterval(yellowBlinker, 1000);
}
function setBlinkre15(){
    setInterval(yellowBlinker, 1000);
    setInterval(greenBlinker, 1000);
}

let yellowBlinker1On = 0;
function yellowBlinker(){
    if (yellowBlinker1On===0){
        document.getElementById("yellowCar").style.display = "none";
        document.getElementById("yellowCarB").style.display = "inherit";
        yellowBlinker1On = 1;
    }
    else if (yellowBlinker1On===1){
        document.getElementById("yellowCar").style.display = "inherit";
        document.getElementById("yellowCarB").style.display = "none";
        yellowBlinker1On = 0;
    }
}

let greenBlinker1On = 0;
function greenBlinker(){
    if (greenBlinker1On===0){
        document.getElementById("greenCar").style.display = "none";
        document.getElementById("greenCarB").style.display = "inherit";
        greenBlinker1On = 1;
    }
    else if (greenBlinker1On===1){
        document.getElementById("greenCar").style.display = "inherit";
        document.getElementById("greenCarB").style.display = "none";
        greenBlinker1On = 0;
    }
}