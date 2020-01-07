function setBlinkre1(){
    //tu sa robi to ze funkcia setBlinker1 sa zavola ked sa nacita sranka prvej krizovatky
    //setInterval robi to ze sa kazdych 1000 ms zavola funkcia ktora tam je
    //toto sa robi vo vsetkych funkciach ninzsie
    setInterval(yellowBlinker, 1000);
    setInterval(greenBlinker, 1000);
}
function setBlinkre2(){
    setInterval(yellowBlinker, 1000);
    setInterval(greenBlinker, 1000);
}
function setBlinkre3(){
    setInterval(tramBlinker, 1000);
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

//funkcionalita je otom ze sa menia obrazky, najprv je tam ten z blinkrom a ten bez blinkru nieje zobrazeny
//ked sa zavola kunkcia tak je pomocna premenna nastavena na 0 a obrazok bez smerovky sa zobrazi a ten zo smerovkou sa schova a pomoc. premenna sa zmeni na 1
//ked sa zavola znova tak je premenna nastavena na 1 tak sa obrazok zo smerovkamy schova a zobrazi sa ten bez a pomoc. premenna sa nastavy naspat na 0
let yellowBlinkerOn = 0;
function yellowBlinker(){
    if (yellowBlinkerOn===0){
        document.getElementById("yellowCar").style.display = "none";
        document.getElementById("yellowCarB").style.display = "inherit";
        yellowBlinkerOn = 1;
    }
    else if (yellowBlinkerOn===1){
        document.getElementById("yellowCar").style.display = "inherit";
        document.getElementById("yellowCarB").style.display = "none";
        yellowBlinkerOn = 0;
    }
}

let greenBlinkerOn = 0;
function greenBlinker(){
    if (greenBlinkerOn===0){
        document.getElementById("greenCar").style.display = "none";
        document.getElementById("greenCarB").style.display = "inherit";
        greenBlinkerOn = 1;
    }
    else if (greenBlinkerOn===1){
        document.getElementById("greenCar").style.display = "inherit";
        document.getElementById("greenCarB").style.display = "none";
        greenBlinkerOn = 0;
    }
}

let tramBlinkerOn = 0;
function tramBlinker(){
    if (tramBlinkerOn===0){
        document.getElementById("tram").style.display = "none";
        document.getElementById("tramB").style.display = "inherit";
        tramBlinkerOn = 1;
    }
    else if (tramBlinkerOn===1){
        document.getElementById("tram").style.display = "inherit";
        document.getElementById("tramB").style.display = "none";
        tramBlinkerOn = 0;
    }
}