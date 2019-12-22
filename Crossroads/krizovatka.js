let svgGreenCar = document.querySelector("#svgGreenCar"); //pomocou Jqery si najdeme v html dokumente idecko auta
let svgBlackCar = document.querySelector("#svgBlackCar");
let svgYellowCar = document.querySelector("#svgYellowCar");
let svgTram = document.querySelector("#tram");
let pedestrian = document.querySelector("#pedestrian1");
let pedestrian2 = document.querySelector("#pedestrian2");
let bike = document.querySelector("#cycle");

 window.inMove = false;

///1. krizovatka/ 3 auta ////////////////////////////////////////////////////////////////////////

function move1GreenCar(){  //zelene auto
    let animation = gsap.timeline();
    //toto je green sock funkcia ktoru volame o riadok nizsie
    animation .set(svgGreenCar, {ease: "none",       x:0})
    //animacie su jednoduche, spravis autu path skrze x a y suradnice a popritom otacas
    //vyskusajte si nejaku krizovatku u seba a pomente tieto suradnice a pozerajte ako to bude reagovat auto
        .to(svgGreenCar, 1,{ease: "none",   x:100})
        .to(svgGreenCar, 1,{ease: "none",   x:180, y:"-=20",  rotation:"-20_short"})
        .to(svgGreenCar, 0.8,{ease: "none", x:220, y:"-=60",  rotation:"-40_short"})
        .to(svgGreenCar, 0.7,{ease: "none", x:300, y:"-120",  rotation:"-80_short"})
        .to(svgGreenCar, 0.7,{ease: "none",               x:330, y:"-=180", rotation:"-90_short"})
        .to(svgGreenCar, 0.8,{ease: "none",                      y:"-=220"})
        .to(svgGreenCar, 1,{ease: "none",                        y:"-=250"});
    //POZOR ak sa bude spravat zvlastne, tak vymen x s y, niekedy zalezi od prvotneho natocenia auta
}
function move1YellowCar() {
    let animation3w = gsap.timeline();
    animation3w .set(svgYellowCar, {ease: "none",     y:0})
        .to(svgYellowCar, 0.7,{ease: "none",   y:-130,x:"-=20", rotation:"-20_short"})
        .to(svgYellowCar, 0.7,{ease: "none",   y:-210,x:"-=60", rotation:"-40_short" })
        .to(svgYellowCar, 0.7,{ease: "none",   y:-270,x:"-=120", rotation:"-70_short" })
        .to(svgYellowCar, 0.7,{ease: "none",   y:-330,x:"-=180", rotation:"-90_short" })
        .to(svgYellowCar, 0.7,{ease: "none",  x:"-=260"})
        .to(svgYellowCar, 0.7,{ease: "none", })
        .to(svgYellowCar, 0.7,{ease: "none",  });
}

function move1BlackCar() {
    let animation3b = gsap.timeline();
    animation3b .set(svgBlackCar, {ease: "none",      y:0})
        .to(svgBlackCar, 0.7,{ease: "none",   y:-120,})
        .to(svgBlackCar, 0.7,{ease: "none",   y:-240, })
        .to(svgBlackCar, 0.7,{ease: "none",   y:-360, })
        .to(svgBlackCar, 0.7,{ease: "none",   y:-480, })
        .to(svgBlackCar, 0.7,{ease: "none", y:-600, })
        .to(svgBlackCar, 0.7,{ease: "none", y:-720, })
        .to(svgBlackCar, 0.7,{ease: "none", y:-840, });
}

///2. krizovatka/ 3 auta ///////////////////////////////////////////////////////////////////////////////////
function move2BlackCar() {
    if(!inMove){
        window.inMove = true; //nastavenie globalnej na true, ale aj tak to nejako nefunguje
        let animation2b = gsap.timeline();
        animation2b .set(svgBlackCar, {ease: "none",      y:0})
            .to(svgBlackCar, 0.7,{ease: "none",   y:120,})
            .to(svgBlackCar, 0.7,{ease: "none",   y:240, })
            .to(svgBlackCar, 0.7,{ease: "none",   y:360, })
            .to(svgBlackCar, 0.7,{ease: "none",   y:480, })
            .to(svgBlackCar, 0.7,{ease: "none", y:600, })
            .to(svgBlackCar, 0.7,{ease: "none", y:720, })
            .to(svgBlackCar, 0.7,{ease: "none", y:840, });
        window.inMove = false;
    }
    else return 0;
}
function move2GreenCar() {
    if (!inMove) {
        let animation2 = gsap.timeline();
        inMove = true;
        animation2.set(svgGreenCar, {ease: "none", x: 0})
            .to(svgGreenCar, 1, {ease: "none", x: 100,})
            .to(svgGreenCar, 1, {ease: "none", x: 180, y: "+=20", rotation: "40_short"})
            .to(svgGreenCar, 0.8, {ease: "none", x: 190, y: "+=60", rotation: "70_short"})
            .to(svgGreenCar, 0.7, {ease: "none", x: 190, y: "+=120", rotation: "90_short"})
            .to(svgGreenCar, 0.7, {ease: "none", x: 190, y: "+=180"})
            .to(svgGreenCar, 0.8, {ease: "none", x: 190, y: "+=220"})
            .to(svgGreenCar, 1, {ease: "none", x: 190, y: "+=250"});
        inMove = false;
    }
    else return 0;
}
function move2YellowCar() {
    if (!inMove) {
        let animation2w = gsap.timeline();
        inMove = true;
        animation2w.set(svgYellowCar, {ease: "none", y: 0})
            .to(svgYellowCar, 1, {ease: "none", y: -100,})
            .to(svgYellowCar, 1, {ease: "none", y: -180, x: "+=20", rotation: "40_short"})
            .to(svgYellowCar, 0.8, {ease: "none", y: -210, x: "+=60", rotation: "70_short"})
            .to(svgYellowCar, 0.7, {ease: "none", y: -210, x: "+=120", rotation: "90_short"})
            .to(svgYellowCar, 0.7, {ease: "none", y: -210, x: "+=180"})
            .to(svgYellowCar, 0.8, {ease: "none", y: -210, x: "+=220"})
            .to(svgYellowCar, 1, {ease: "none", y: -210, x: "+=250"});
        inMove = false;
    }
    else return 0;
}

///3. az 5. krizovatka/ 1 auto + elektricka Tram ////////////////////////////////////////////////////////////////////////
function move3to5Tram() {
    let animationT = gsap.timeline();
    animationT .set(svgTram, {ease: "none",     y:0})
        .to(svgTram, 1,{ease: "none",   y:-100,})
        .to(svgTram, 1,{ease: "none",   y:-180, x:"+=20",  rotation:"20_short"})
        .to(svgTram, 0.8,{ease: "none", y:-220, x:"+=40",  rotation:"45_short"})
        .to(svgTram, 0.8,{ease: "none", y:-290, x:"+=60",  rotation:"70_short"})
        .to(svgTram, 0.7,{ease: "none", y:-312, x:"+=120", rotation:"90_short"})
        .to(svgTram, 0.7,{ease: "none", y:-312,               x:"+=180"})
        .to(svgTram, 0.8,{ease: "none", y:-312,               x:"+=220"})
        .to(svgTram, 1,{ease: "none",   y:-312,               x:"+=250"});
}
function move3to5GreenCar(){
    let animation3 = gsap.timeline();
    animation3 .set(svgGreenCar, {ease: "none",      x:0})
        .to(svgGreenCar, 1,{ease: "none",   x:120,})
        .to(svgGreenCar, 1,{ease: "none",   x:180, })
        .to(svgGreenCar, 1,{ease: "none",   x:235, })
        .to(svgGreenCar, 1,{ease: "none",   x:270, })
        .to(svgGreenCar, 0.7,{ease: "none", x:340, })
        .to(svgGreenCar, 0.5,{ease: "none", x:400, })
        .to(svgGreenCar, 0.5,{ease: "none", x:470,  })
        .to(svgGreenCar, 0.5,{ease: "none", x:570,  })
}
///6. krizovatka/ 2 auta / kruhovy objazd ////////////////////////////////////////////////////////////////////////
function move6GreenCar(){
    let animation4 = gsap.timeline();
    animation4 .set(svgGreenCar, {ease: "none",      x:0, })
        .to(svgGreenCar, 1,{ease: "none",   x:100})
        .to(svgGreenCar, 0.5,{ease: "none", x:150, y:"+=30",  rotation:"30_short"})
        .to(svgGreenCar, 0.5,{ease: "none", x:200, y:"+=40", rotation:"45_short"})
        .to(svgGreenCar, 0.5,{ease: "none", x:250, y:"+=50",  rotation:"50_short"})
        .to(svgGreenCar, 0.5,{ease: "none", x:300, y:"+=55", rotation:"40_short"})
        .to(svgGreenCar, 0.5,{ease: "none", x:350, y:"+=40",  rotation:"30_short"})
        .to(svgGreenCar, 0.5,{ease: "none", x:400, y:"+=30", rotation:"20_short"})
        .to(svgGreenCar, 0.5,{ease: "none", x:450, y:"+=20",  rotation:"10_short"})
        .to(svgGreenCar, 0.5,{ease: "none", x:500, y:"+=10"})
        .to(svgGreenCar, 0.5,{ease: "none", x:550, y:"+=20",  rotation:"10_short"})
        .to(svgGreenCar, 0.5,{ease: "none", x:600, y:"+=10"})
}
function move6YellowCar() {
    let animation4 = gsap.timeline();
    animation4.set(svgYellowCar, {ease: "none", y: 0,})
        .to(svgYellowCar, 1, {ease: "none", y: -100,x: "-=10", rotation: "-20_short"})
        .to(svgYellowCar, 0.5, {ease: "none", y: -150, x: "-=30", rotation: "-30_short"})
        .to(svgYellowCar, 0.5, {ease: "none", y: -200, x: "-=40", rotation: "-45_short"})
        .to(svgYellowCar, 0.5, {ease: "none", y: -250, x: "-=50", rotation: "-50_short"})
        .to(svgYellowCar, 0.5, {ease: "none", y: -300, x: "-=55", rotation: "-60_short"})
        .to(svgYellowCar, 0.5, {ease: "none", y: -320, x: "-=60", rotation: "-70_short"})
        .to(svgYellowCar, 0.5, {ease: "none", y: -320, x: "-=70", rotation: "-80_short"})
        .to(svgYellowCar, 0.5, {ease: "none", y: -320, x: "-=80", rotation: "-90_short"})
        .to(svgYellowCar, 0.5, {ease: "none", y: -300, x: "-=90", rotation: "-100_short"})
        .to(svgYellowCar, 0.5, {ease: "none", y: -270, x: "-=80", rotation: "-110_short"})
        .to(svgYellowCar, 0.5, {ease: "none", y: -240, x: "-=70", rotation: "-130_short"})
        .to(svgYellowCar, 0.5, {ease: "none", y: -200, x: "-=60", rotation: "-140_short"})
}
///7. krizovatka/ 2 auta ////////////////////////////////////////////////////////////////////////
function move7YellowCar() {
    let animation7 = gsap.timeline();
    animation7.set(svgYellowCar, {ease: "none", x: 0,})
        .to(svgYellowCar, 0.7,{ease: "none",   y:"-100"})
        .to(svgYellowCar, 0.7,{ease: "none",   y:"-180"})
        .to(svgYellowCar, 0.7,{ease: "none", y:"-260"})
        .to(svgYellowCar, 0.7,{ease: "none", y:"-340"})
        .to(svgYellowCar, 0.7,{ease: "none",y:"-420"})
        .to(svgYellowCar, 0.7,{ease: "none",y:"-500"})
        .to(svgYellowCar, 0.7,{ease: "none",y:"-580"})
        .to(svgYellowCar, 0.7,{ease: "none",y:"-660"})
        .to(svgYellowCar, 0.7,{ease: "none",y:"-740"})
        .to(svgYellowCar, 0.7,{ease: "none",y:"-820"})
}
function move7GreenCar() {
    let animation7 = gsap.timeline();
    animation7.set(svgGreenCar, {ease: "none", y: 0,})
        .to(svgGreenCar, 1,{ease: "none",   x:100})
        .to(svgGreenCar, 1,{ease: "none",   x:200, y:"-=20",  rotation:"-20_short"})
        .to(svgGreenCar, 0.8,{ease: "none", x:260, y:"-=40",  rotation:"-40_short"})
        .to(svgGreenCar, 0.8,{ease: "none", x:320, y:"-=60",  rotation:"-55_short"})
        .to(svgGreenCar, 0.7,{ease: "none", x:370, y:"-=80",  rotation:"-70_short"})
        .to(svgGreenCar, 0.7,{ease: "none",x:420, y:"-=160", rotation:"-90_short"})
        .to(svgGreenCar, 0.8,{ease: "none",y:"-=220"})
        .to(svgGreenCar, 1,{ease: "none",y:"-=250"});
}
///8. krizovatka/ 3 auta /////////////////////////////////////////////////////////////////////////
function move8BlackCar() {
    let animation8 = gsap.timeline();
    animation8.set(svgYellowCar, {ease: "none", y: 0,})
        .to(svgBlackCar, 0.7,{ease: "none",   y:100})
        .to(svgBlackCar, 0.7,{ease: "none",   y:180})
        .to(svgBlackCar, 0.7,{ease: "none",   y:260})
        .to(svgBlackCar, 0.7,{ease: "none",   y:340})
        .to(svgBlackCar, 0.7,{ease: "none",y:420})
        .to(svgBlackCar, 0.7,{ease: "none",y:500})
        .to(svgBlackCar, 0.7,{ease: "none",y:580})
        .to(svgBlackCar, 0.7,{ease: "none",y:660})
        .to(svgBlackCar, 0.7,{ease: "none",y:740})
        .to(svgBlackCar, 0.7,{ease: "none",y:820})
        .to(svgBlackCar, 0.7,{ease: "none",y:880})
}
function move8YellowCar() {
    let animation8 = gsap.timeline();
    animation8.set(svgYellowCar, {ease: "none", y: 0,})
        .to(svgYellowCar, 1,{ease: "none",   y:"-100"})
        .to(svgYellowCar, 1,{ease: "none",   y:"-180", x:"-=20",  rotation:"-30_short"})
        .to(svgYellowCar, 0.8,{ease: "none", y:"-240", x:"-=60",  rotation:"-50_short"})
        .to(svgYellowCar, 0.7,{ease: "none", y:"-280", x:"-=120", rotation:"-70_short"})
        .to(svgYellowCar, 0.7,{ease: "none",y:"-320",x:"-=180",rotation:"-90_short"})
        .to(svgYellowCar, 0.8,{ease: "none",               x:"-=220"})
        .to(svgYellowCar, 1,{ease: "none",                 x:"-=250"});

}
function move8GreenCar() {
    let animation8 = gsap.timeline();
    animation8.set(svgGreenCar, {ease: "none", x: 0,})
        .to(svgGreenCar, 1, {ease: "none", x: 100})
        .to(svgGreenCar, 1, {ease: "none", x: 180, y: "-=20", rotation: "-20_short"})
        .to(svgGreenCar, 0.8, {ease: "none", x: 240, y: "-=40", rotation: "-40_short"})
        .to(svgGreenCar, 0.8, {ease: "none", x: 290, y: "-=60", rotation: "-55_short"})
        .to(svgGreenCar, 0.7, {ease: "none", x: 340, y: "-=80", rotation: "-70_short"})
        .to(svgGreenCar, 0.7, {ease: "none", x: 380, y: "-=160", rotation: "-90_short"})
        .to(svgGreenCar, 0.8, {ease: "none", y: "-=220"})
        .to(svgGreenCar, 1, {ease: "none", y: "-=250"});
}
///9. krizovatka/ 2 auta / 1 elektricka ////////////////////////////////////////////////////////////////////////
function move9YellowCar() {
    let animation8 = gsap.timeline();
    animation8.set(svgYellowCar, {ease: "none", y: 0,})
        .to(svgYellowCar, 1,{ease: "none",   y:"-100"})
        .to(svgYellowCar, 0.7,{ease: "none",   y:"-150"})
        .to(svgYellowCar, 0.7,{ease: "none",   y:"-220", x:"+=20",  rotation:"30_short"})
        .to(svgYellowCar, 0.8,{ease: "none", y:"-260", x:"+=60",  rotation:"50_short"})
        .to(svgYellowCar, 0.7,{ease: "none", y:"-260", x:"+=90", rotation:"70_short"})
        .to(svgYellowCar, 0.7,{ease: "none",y:"-260",x:"+=90",rotation:"90_short"})
        .to(svgYellowCar, 0.8,{ease: "none",               x:"+=120"})
        .to(svgYellowCar, 1,{ease: "none",                 x:"+=180"});
}
function move9GreenCar() {
    let animation8 = gsap.timeline();
    animation8.set(svgGreenCar, {ease: "none", x: 0,})
        .to(svgGreenCar, 1, {ease: "none", x: 100})
        .to(svgGreenCar, 0.5, {ease: "none", x: 150})
        .to(svgGreenCar, 0.5, {ease: "none", x: 200})
        .to(svgGreenCar, 0.5, {ease: "none", x: 280, y: "-=20", rotation: "-20_short"})
        .to(svgGreenCar, 0.5, {ease: "none", x: 340, y: "-=40", rotation: "-40_short"})
        .to(svgGreenCar, 0.5, {ease: "none", x: 380, y: "-=60", rotation: "-55_short"})
        .to(svgGreenCar, 0.7, {ease: "none", x: 420, y: "-=80", rotation: "-70_short"})
        .to(svgGreenCar, 0.7, {ease: "none", x: 430, y: "-=160", rotation: "-90_short"})
        .to(svgGreenCar, 0.8, {ease: "none", y: "-=220"})
        .to(svgGreenCar, 1, {ease: "none", y: "-=250"});
}
function moveTram9(){
    let animation3 = gsap.timeline();
    animation3 .set(svgTram, {ease: "none",      y:0})
        .to(svgTram, 0.5,{ease: "none",   y:-100,})
        .to(svgTram, 0.5,{ease: "none",   y:-200, })
        .to(svgTram, 0.5,{ease: "none",   y:-305, })
        .to(svgTram, 0.5,{ease: "none",   y:-400, })
        .to(svgTram, 0.5,{ease: "none", y:-500,  })
        .to(svgTram, 0.5,{ease: "none", y:-600,  })
        .to(svgTram, 0.5,{ease: "none", y:-700,  })
        .to(svgTram, 0.5,{ease: "none", y:-800,  })
        .to(svgTram, 0.5,{ease: "none", y:-900,  })
}

///10. krizovatka/ 2 auta / 1 elektricka ////////////////////////////////////////////////////////////////////////
function move10YellowCar() {
    let animation10y = gsap.timeline();
    animation10y.set(svgYellowCar, {ease: "none", y: 0,})
        .to(svgYellowCar, 0.7,{ease: "none",     y:"-100"})
        .to(svgYellowCar, 0.5,{ease: "none",   y:"-150", x:"+=20",  rotation:"30_short"})
        .to(svgYellowCar, 0.5,{ease: "none",   y:"-180", x:"+=40",  rotation:"50_short"})
        .to(svgYellowCar, 0.5,{ease: "none",   y:"-200", x:"+=60", rotation:"70_short"})
        .to(svgYellowCar, 0.5,{ease: "none",x:"+=70",rotation:"90_short"})
        .to(svgYellowCar, 0.5,{ease: "none",               x:"+=100"})
        .to(svgYellowCar, 1,{ease: "none",                 x:"+=200"})
        .to(svgYellowCar, 1,{ease: "none",                 x:"+=300"});
}
function move10GreenCar() {
    let animation10 = gsap.timeline();
    animation10.set(svgGreenCar, {ease: "none", x: 0,})
        .to(svgGreenCar, 0.7, {ease: "none", x: 100})
        .to(svgGreenCar, 0.5, {ease: "none", x: 150})
        .to(svgGreenCar, 0.5, {ease: "none", x: 200})
        .to(svgGreenCar, 0.5, {ease: "none", x: 280, y: "-=40", rotation: "-20_short"})
        .to(svgGreenCar, 0.5, {ease: "none", x: 340, y: "-=60", rotation: "-40_short"})
        .to(svgGreenCar, 0.5, {ease: "none", x: 360, y: "-=100", rotation: "-70_short"})
        .to(svgGreenCar, 0.7, {ease: "none", y: "-=140", rotation: "-80_short"})
        .to(svgGreenCar, 0.7, {ease: "none",  y: "-=160", rotation: "-90_short"})
        .to(svgGreenCar, 0.8, {ease: "none", y: "-=220"})
        .to(svgGreenCar, 1, {ease: "none", y: "-=250"});
}

///11. krizovatka/ 1 auta / ludia + cyklista ////////////////////////////////////////////////////////////////////////
function move11GreenCar() {
    let animation11 = gsap.timeline();
    animation11 .set(svgGreenCar, {ease: "none",      x:0})
        .to(svgGreenCar, 0.5,{ease: "none",   x:120,})
        .to(svgGreenCar, 0.5,{ease: "none",   x:240, })
        .to(svgGreenCar, 0.5,{ease: "none",   x:360, })
        .to(svgGreenCar, 0.5,{ease: "none",   x:480, })
        .to(svgGreenCar, 0.5,{ease: "none", x:600, })
        .to(svgGreenCar, 0.5,{ease: "none", x:720, })
        .to(svgGreenCar, 0.5,{ease: "none", x:840, });
}
function move11Pedestrian(){
    let animation11p = gsap.timeline();
    animation11p .set(pedestrian, {ease: "none",      x:0, rotation:"60_short"})
        .to(pedestrian, 1,{ease: "none",   y:120,})
        .to(pedestrian, 1,{ease: "none",   y:180, })
}
function move11Pedestrian2(){
    let animation11pe = gsap.timeline();
    animation11pe .set(pedestrian2, {ease: "none",      x:0, rotation:"100_short"})
        .to(pedestrian2, 1,{ease: "none",   y:-120,})
        .to(pedestrian2, 1,{ease: "none",   y:-180, })
        .to(pedestrian2, 0.8,{ease: "none",   y:-250, })
}
function moveBike1(){
    let animation11b = gsap.timeline();
    animation11b .set(bike, {ease: "none",      x:0, rotation:"0_short"})
        .to(bike, 1,{ease: "none",   x:100, y: "-=10", rotation:"-20_short"})
        .to(bike, 1,{ease: "none",   x:200,y: "-=10" })
        .to(bike, 0.8,{ease: "none",   x:300,y: "-=10" })
        .to(bike, 0.8,{ease: "none",   x:380,y: "-=10"})
}

//krizovatka 13 je cyklista ide zarovno s autom, ale cyklista ma prednost, ak auto zataca

///14. krizovatka/  auta /   ////////////////////////////////////////////////////////////////////////

///15. krizovatka/  auta /   ////////////////////////////////////////////////////////////////////////
