function setBlinkre1(){
    setInterval(blackBlinker1, 1000);
}

let blinkerOn = 0;
function blackBlinker1(){
    if (blinkerOn===0){
        document.getElementById("blackCar").style.display = "none";
        document.getElementById("blackCarBlinker").style.display = "inherit";
        blinkerOn = 1;
    }
    else if (blinkerOn===1){
        document.getElementById("blackCar").style.display = "inherit";
        document.getElementById("blackCarBlinker").style.display = "none";
        blinkerOn = 0;
    }
}