function setBlinkre1(){
    setInterval(blackBlinker1, 1000);
    setInterval(greenBlinker1, 1000);
}

let blackBlinker1On = 0;
function blackBlinker1(){
    if (blackBlinker1On===0){
        document.getElementById("yellowCar").style.display = "none";
        document.getElementById("yellowCarB").style.display = "inherit";
        blackBlinker1On = 1;
    }
    else if (blackBlinker1On===1){
        document.getElementById("yellowCar").style.display = "inherit";
        document.getElementById("yellowCarB").style.display = "none";
        blackBlinker1On = 0;
    }
}

let greenBlinker1On = 0;
function greenBlinker1(){
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