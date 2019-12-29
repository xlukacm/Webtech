let svgGreenCar = document.querySelector("#svgGreenCar"); //pomocou Jqery si najdeme v html dokumente idecko auta
let svgBlackCar = document.querySelector("#svgBlackCar");
let svgYellowCar = document.querySelector("#svgYellowCar");
let svgTram = document.querySelector("#tram");
let pedestrian = document.querySelector("#pedestrian1");
let pedestrian2 = document.querySelector("#pedestrian2");
let bike = document.querySelector("#cycle");


///1. krizovatka/ 3 auta ////////////////////////////////////////////////////////////////////////
let animation = gsap.timeline();

let cross1greenMoved = false;
let cross1yellowMoved = false;
let cross1blackMoved = false;

function move1GreenCar(){  //zelene auto
    //toto je green sock funkcia ktoru volame o riadok nizsie
     window.cross1greenMoved = true;
    animation .set(svgGreenCar, {ease: "none",       x:0})
    //animacie su jednoduche, spravis autu path skrze x a y suradnice a popritom otacas
    //vyskusajte si nejaku krizovatku u seba a pomente tieto suradnice a pozerajte ako to bude reagovat auto
        .to(svgGreenCar,0.6,{ease: "none",   x:100})
        .to(svgGreenCar,0.6,{ease: "none",   x:140, y:"-=20",  rotation:"-20_short"})
        .to(svgGreenCar, 0.6,{ease: "none", x:180, y:"-=30",  rotation:"-40_short"})
        .to(svgGreenCar, 0.6,{ease: "none", x:210, y:"-=40",  rotation:"-70_short"})
        .to(svgGreenCar, 0.6,{ease: "none",               x:230, y:"-=40", rotation:"-90_short"})
        .to(svgGreenCar, 0.6,{ease: "none",                      y:"-=220"})
        .to(svgGreenCar,0.6,{ease: "none",                        y:"-=250"});
        Object.freeze(svgGreenCar);
    //POZOR ak sa bude spravat zvlastne, tak vymen x s y, niekedy zalezi od prvotneho natocenia auta
        if(window.cross1yellowMoved && window.cross1blackMoved){
            document.getElementById('wronglog').style.display = "block";
        }
}
function move1YellowCar() {
    //if(cross1greenMoved )
    window.cross1yellowMoved = true;
     let animation = gsap.timeline();
    animation .set(svgYellowCar, {ease: "none",     y:0})
        .to(svgYellowCar, 0.6,{ease: "none",   y:-100})
        .to(svgYellowCar, 0.3,{ease: "none",   y:-130,x:"-=20", rotation:"-20_short"})
        .to(svgYellowCar, 0.5,{ease: "none",   y:-165,x:"-=20", rotation:"-40_short" })
        .to(svgYellowCar, 0.5,{ease: "none",   y:-200,x:"-=40", rotation:"-70_short" })
        .to(svgYellowCar, 0.6,{ease: "none",   y:-230,x:"-=40", rotation:"-90_short" })
        .to(svgYellowCar, 0.6,{ease: "none",  x:"-=300"});
        if(window.cross1blackMoved && window.cross1greenMoved){
            document.getElementById('rightlog').style.display = "block";
            document.getElementById('demoCrossroad1').style.display = "none";
        }
}

function move1BlackCar() {
    window.cross1blackMoved = true;
    // let animation = gsap.timeline();
    animation .set(svgBlackCar, {ease: "none",      y:0})
        .to(svgBlackCar, 0.6,{ease: "none",   y:-180,})
        .to(svgBlackCar, 0.6,{ease: "none",   y:-360, })
        .to(svgBlackCar, 0.6,{ease: "none",   y:-540, })
        .to(svgBlackCar, 0.6,{ease: "none", y:-720, })
        .to(svgBlackCar, 0.6,{ease: "none", y:-840, });
    if(window.cross1yellowMoved && window.cross1greenMoved){
        document.getElementById('wrongtlog').style.display = "block";
    }
}

///2. krizovatka/ 3 auta ///////////////////////////////////////////////////////////////////////////////////
let cross2greenMoved = false;
let cross2yellowMoved = false;
let cross2blackMoved = false;

function move2BlackCar() {
        window.cross2blackMoved = true;
        animation .set(svgBlackCar, {ease: "none",      y:0})
            .to(svgBlackCar, 0.8,{ease: "none",   y:200,})
            .to(svgBlackCar, 0.8,{ease: "none",   y:400, })
            .to(svgBlackCar, 0.8,{ease: "none",   y:600, })
            .to(svgBlackCar, 0.8,{ease: "none",   y:800, })
            .to(svgBlackCar, 0.8,{ease: "none",   y:900, });

        if(window.cross2yellowMoved && window.cross2greenMoved){
            document.getElementById('rightlog').style.display = "block";
            document.getElementById('demoCrossroad1').style.display = "none";
        }
}
function move2GreenCar() {
         window.cross2greenMoved = true;
        animation.set(svgGreenCar, {ease: "none", x: 0})
            .to(svgGreenCar,0.6, {ease: "none", x: 100,})
            .to(svgGreenCar,0.6, {ease: "none", x: 140, y: "+=20", rotation: "40_short"})
            .to(svgGreenCar, 0.6, {ease: "none", x: 160, y: "+=60", rotation: "70_short"})
            .to(svgGreenCar, 0.6, {ease: "none", x: 160, y: "+=120", rotation: "90_short"})
            .to(svgGreenCar, 0.6, {ease: "none", x: 160, y: "+=180"})
            .to(svgGreenCar, 0.6, {ease: "none", x: 160, y: "+=220"})
            .to(svgGreenCar,0.6, {ease: "none", x: 160, y: "+=250"});
        if(window.cross2yellowMoved && window.cross2greenMoved){
            document.getElementById('wrongtlog').style.display = "block";
        }
}
function move2YellowCar() {
        window.cross2yellowMoved = true;
        animation.set(svgYellowCar, {ease: "none", y: 0})
            .to(svgYellowCar,0.6, {ease: "none", y: -100,})
            .to(svgYellowCar,0.4, {ease: "none", y: -130, x: "+=10", rotation: "20_short"})
            .to(svgYellowCar,0.4, {ease: "none", y: -130, x: "+=20", rotation: "40_short"})
            .to(svgYellowCar, 0.4, {ease: "none", y: -150, x: "+=20", rotation: "70_short"})
            .to(svgYellowCar, 0.3, {ease: "none", y: -150, x: "+=30", rotation: "90_short"})
            .to(svgYellowCar, 0.6, {ease: "none", y: -150, x: "+=120"})
            .to(svgYellowCar,0.6, {ease: "none", y: -150, x: "+=250"});
        if(window.cross2blackMoved && window.cross2greenMoved){
            document.getElementById('wrongtlog').style.display = "block";
        }
}

///3. az 5. krizovatka/ 1 auto + elektricka Tram ////////////////////////////////////////////////////////////////////////
function move3to5Tram() {
    // let animation = gsap.timeline();
    animation .set(svgTram, {ease: "none",     y:0})
        .to(svgTram,0.6,{ease: "none",   y:-100,})
        .to(svgTram,0.6,{ease: "none",   y:-180, x:"+=20",  rotation:"20_short"})
        .to(svgTram, 0.6,{ease: "none", y:-220, x:"+=40",  rotation:"55_short"})
        .to(svgTram, 0.6,{ease: "none", y:-250, x:"+=50",  rotation:"70_short"})
        .to(svgTram, 0.6,{ease: "none", y:-260, x:"+=110", rotation:"90_short"})
        .to(svgTram, 0.6,{ease: "none", y:-260,               x:"+=180"})
        .to(svgTram, 0.6,{ease: "none", y:-260,               x:"+=220"})
        .to(svgTram,0.6,{ease: "none",   y:-260,               x:"+=250"});
}
function move3to5GreenCar(){
    // let animation = gsap.timeline();
    animation .set(svgGreenCar, {ease: "none",      x:0})
        .to(svgGreenCar,0.6,{ease: "none",   x:100,})
        .to(svgGreenCar,0.6,{ease: "none",   x:200, })
        .to(svgGreenCar,0.6,{ease: "none",   x:300, })
        .to(svgGreenCar,0.6,{ease: "none",   x:400, })
        .to(svgGreenCar, 0.6,{ease: "none", x:500,  })
        .to(svgGreenCar, 0.6,{ease: "none", x:600,  });
}
///6. krizovatka/ 2 auta / kruhovy objazd ////////////////////////////////////////////////////////////////////////
function move6GreenCar(){
    // let animation = gsap.timeline();
    animation .set(svgGreenCar, {ease: "none",      x:0, })
        .to(svgGreenCar,0.6,{ease: "none",   x:80})
        .to(svgGreenCar, 0.6,{ease: "none", x:130, y:"+=30",  rotation:"30_short"})
        .to(svgGreenCar, 0.6,{ease: "none", x:180, y:"+=40", rotation:"45_short"})
        .to(svgGreenCar, 0.6,{ease: "none", x:210, y:"+=40",  rotation:"50_short"})
        .to(svgGreenCar, 0.4,{ease: "none", x:250, y:"+=20", rotation:"30_short"})
        .to(svgGreenCar, 0.4,{ease: "none", x:280, y:"+=20",  rotation:"20_short"})
        .to(svgGreenCar,0.4,{ease: "none", x:330, y:"+=10", rotation:"0_short"})
        .to(svgGreenCar, 0.4,{ease: "none", x:380, y:"+=10",  rotation:"-10_short"})
        .to(svgGreenCar, 0.5,{ease: "none", x:450, y:"-=20",rotation:"-10_short"})
        .to(svgGreenCar, 0.5,{ease: "none", x:500,  rotation:"-10_short"})
        .to(svgGreenCar, 0.6,{ease: "none", x:550, y:"+=10"})
}
function move6YellowCar() {
    // let animation = gsap.timeline();
    animation.set(svgYellowCar, {ease: "none", y: 0,})
        .to(svgYellowCar, 0.4,{ease: "none", y:-30,x:"-=10", rotation:"-10_short"})
        .to(svgYellowCar, 0.3,{ease: "none", y:-60,x:"-=10", rotation:"-20_short"})
        .to(svgYellowCar,0.3, {ease: "none", y: -80,x: "-=20", rotation: "-30_short"})
        .to(svgYellowCar, 0.4, {ease: "none", y: -110, x: "-=30", rotation: "-45_short"})
        .to(svgYellowCar, 0.4, {ease: "none", y: -130, x: "-=30", rotation: "-60_short"})
        .to(svgYellowCar, 0.4, {ease: "none", y: -145, x: "-=30", rotation: "-75_short"})
        .to(svgYellowCar, 0.5, {ease: "none", y: -160, x: "-=40", rotation: "-90_short"})
        .to(svgYellowCar, 0.5, {ease: "none", y: -160, x: "-=40", rotation: "-100_short"})
        .to(svgYellowCar, 0.5, {ease: "none", y: -150, x: "-=40", rotation: "-110_short"})
        .to(svgYellowCar, 0.4, {ease: "none", y: -120, x: "-=45", rotation: "-120_short"})
        .to(svgYellowCar, 0.4, {ease: "none", y: -100, x: "-=45", rotation: "-130_short"})
        .to(svgYellowCar, 0.4, {ease: "none", y: -80, x: "-=30", rotation: "-140_short"})
        .to(svgYellowCar, 0.4, {ease: "none", y: -60, x: "-=30", rotation: "-140_short"})
        .to(svgYellowCar, 0.4, {ease: "none", y: -40, x: "-=30", rotation: "-140_short"})
}
///7. krizovatka/ 2 auta ////////////////////////////////////////////////////////////////////////
function move7YellowCar() {
    // let animation = gsap.timeline();
    animation.set(svgYellowCar, {ease: "none", x: 0,})
        .to(svgYellowCar, 0.6,{ease: "none",   y:"-100"})
        .to(svgYellowCar, 0.6,{ease: "none",   y:"-180"})
        .to(svgYellowCar, 0.6,{ease: "none", y:"-260"})
        .to(svgYellowCar, 0.6,{ease: "none", y:"-340"})
        .to(svgYellowCar, 0.6,{ease: "none",y:"-420"})
        .to(svgYellowCar, 0.6,{ease: "none",y:"-500"})
        .to(svgYellowCar, 0.6,{ease: "none",y:"-580"})
        .to(svgYellowCar, 0.6,{ease: "none",y:"-660"})
        .to(svgYellowCar, 0.6,{ease: "none",y:"-740"})
        .to(svgYellowCar, 0.6,{ease: "none",y:"-820"})
}
function move7GreenCar() {
    // let animation = gsap.timeline();
    animation.set(svgGreenCar, {ease: "none", y: 0,})
        .to(svgGreenCar,0.6,{ease: "none",   x:100})
        .to(svgGreenCar,0.5,{ease: "none",   x:160, y:"-=20",  rotation:"-20_short"})
        .to(svgGreenCar, 0.5,{ease: "none", x:190, y:"-=30",  rotation:"-40_short"})
        .to(svgGreenCar, 0.6,{ease: "none", x:220, y:"-=60",  rotation:"-55_short"})
        .to(svgGreenCar, 0.6,{ease: "none", x:250, y:"-=60",  rotation:"-70_short"})
        .to(svgGreenCar, 0.6,{ease: "none",x:280, y:"-=160", rotation:"-90_short"})
        .to(svgGreenCar, 0.6,{ease: "none",y:"-=220"})
        .to(svgGreenCar,0.6,{ease: "none",y:"-=250"});
}

///8. krizovatka/ 3 auta /////////////////////////////////////////////////////////////////////////
function move8BlackCar() {
    // let animation = gsap.timeline();
    animation.set(svgYellowCar, {ease: "none", y: 0,})
        .to(svgBlackCar, 0.6,{ease: "none",   y:100})
        .to(svgBlackCar, 0.6,{ease: "none",   y:180})
        .to(svgBlackCar, 0.6,{ease: "none",   y:260})
        .to(svgBlackCar, 0.6,{ease: "none",   y:340})
        .to(svgBlackCar, 0.6,{ease: "none",y:420})
        .to(svgBlackCar, 0.6,{ease: "none",y:500})
        .to(svgBlackCar, 0.6,{ease: "none",y:580})
        .to(svgBlackCar, 0.6,{ease: "none",y:660})
        .to(svgBlackCar, 0.6,{ease: "none",y:740})
        .to(svgBlackCar, 0.6,{ease: "none",y:820})
        .to(svgBlackCar, 0.6,{ease: "none",y:880})
}
function move8YellowCar() {
    // let animation = gsap.timeline();
    animation.set(svgYellowCar, {ease: "none", y: 0,})
        .to(svgYellowCar,0.6,{ease: "none",   y:-70})
        .to(svgYellowCar,0.5,{ease: "none",   y:-130, x:"-=20",  rotation:"-30_short"})
        .to(svgYellowCar, 0.5,{ease: "none", y:-180, x:"-=40",  rotation:"-50_short"})
        .to(svgYellowCar, 0.5,{ease: "none", y:-200, x:"-=40", rotation:"-70_short"})
        .to(svgYellowCar, 0.6,{ease: "none",y:-220,x:"-=80",rotation:"-90_short"})
        .to(svgYellowCar, 0.6,{ease: "none",               x:"-=220"})
        .to(svgYellowCar,0.6,{ease: "none",                 x:"-=250"});

}
function move8GreenCar() {
    // let animation = gsap.timeline();
    animation.set(svgGreenCar, {ease: "none", x: 0,})
        .to(svgGreenCar,0.6, {ease: "none", x: 70})
        .to(svgGreenCar,0.4, {ease: "none", x: 100, y: "-=20",rotation:"-15_short"})
        .to(svgGreenCar,0.4, {ease: "none", x: 130, y: "-=20", rotation: "-30_short"})
        .to(svgGreenCar, 0.5, {ease: "none", x: 170, y: "-=30", rotation: "-50_short"})
        .to(svgGreenCar, 0.5, {ease: "none", x: 210, y: "-=40", rotation: "-70_short"})
        .to(svgGreenCar, 0.6, {ease: "none", x: 230, y: "-=50", rotation: "-90_short"})
        .to(svgGreenCar, 0.6, {ease: "none", y: "-=120"})
        .to(svgGreenCar,0.6, {ease: "none", y: "-=100"})
        .to(svgGreenCar,0.6, {ease: "none", y: "-=100"});
}
///9. krizovatka/ 2 auta / 1 elektricka ////////////////////////////////////////////////////////////////////////
function move9YellowCar() {
    // let animation = gsap.timeline();
    animation.set(svgYellowCar, {ease: "none", y: 0,})
        .to(svgYellowCar,0.8,{ease: "none",   y:"-85"})
        .to(svgYellowCar, 0.8,{ease: "none",   y:"-140", x:"+=0", rotation:"35_short"})
        .to(svgYellowCar, 0.4,{ease: "none",   y:"-150", x:"+=10",  rotation:"50_short"})
        .to(svgYellowCar, 0.4,{ease: "none", y:"-160",x:"+=40", rotation:"70_short"})
        .to(svgYellowCar, 0.6,{ease: "none",x:"+=90",rotation:"90_short"})
        .to(svgYellowCar, 0.6,{ease: "none",               x:"+=120"})
        .to(svgYellowCar,0.6,{ease: "none",                 x:"+=180"});
}
function move9GreenCar() {
    // let animation = gsap.timeline();
    animation.set(svgGreenCar, {ease: "none", x: 0,})
        .to(svgGreenCar,0.6, {ease: "none", x: 50})
        .to(svgGreenCar, 0.6, {ease: "none", x: 100})
        .to(svgGreenCar, 0.6, {ease: "none", x: 140})
        .to(svgGreenCar, 0.6, {ease: "none", x: 180, y: "-=20", rotation: "-20_short"})
        .to(svgGreenCar, 0.6, {ease: "none", x: 220, y: "-=40", rotation: "-40_short"})
        .to(svgGreenCar, 0.6, {ease: "none", x: 250, y: "-=60", rotation: "-65_short"})
        .to(svgGreenCar, 0.6, {ease: "none", y: "-=60", rotation: "-85_short"})
        .to(svgGreenCar, 0.6, {ease: "none", y: "-=160", rotation: "-90_short"})
        .to(svgGreenCar, 0.6, {ease: "none", y: "-=220"})
        .to(svgGreenCar,0.6, {ease: "none", y: "-=250"});
}
function moveTram9(){
    // let animation = gsap.timeline();
    animation .set(svgTram, {ease: "none",      y:0})
        .to(svgTram, 0.6,{ease: "none",   y:-100,})
        .to(svgTram, 0.6,{ease: "none",   y:-200, })
        .to(svgTram, 0.6,{ease: "none",   y:-305, })
        .to(svgTram, 0.6,{ease: "none",   y:-400, })
        .to(svgTram, 0.6,{ease: "none", y:-500,  })
        .to(svgTram, 0.6,{ease: "none", y:-600,  })
        .to(svgTram, 0.6,{ease: "none", y:-700,  })
        .to(svgTram, 0.6,{ease: "none", y:-800,  })
        .to(svgTram, 0.6,{ease: "none", y:-900,  })
}

///10. krizovatka/ 2 auta / 1 elektricka ////////////////////////////////////////////////////////////////////////

// let x = document.getElementsByClassName("carGreen10");
// x.addEventListener("click", move10GreenCar);
//
// let z = document.getElementsByClassName("carYellow10");
// z.addEventListener("click", move10YellowCar);


 function move10YellowCar() {
    // let animation = gsap.timeline();
    animation.set(svgYellowCar, {ease: "none", y: 0,})
        .to(svgYellowCar, 0.6,{ease: "none",     y:"-150"})
        .to(svgYellowCar, 0.6,{ease: "none",     y:"-300"})
        .to(svgYellowCar, 0.6,{ease: "none",     y:"-450"})
        .to(svgYellowCar, 0.6,{ease: "none",     y:"-600"})
        .to(svgYellowCar, 0.6,{ease: "none",     y:"-750"})
        .to(svgYellowCar, 0.6,{ease: "none",     y:"-900"})
}
function move10GreenCar() {
    // let animation = gsap.timeline();
    animation.set(svgGreenCar, {ease: "none", x: 0,})
        .to(svgGreenCar, 1, {ease: "none", x: 90})
        .to(svgGreenCar, 0.5, {ease: "none", x: 120})
        .to(svgGreenCar, 0.4, {ease: "none", x: 150, y: "+=20", rotation: "+30_short"})
        .to(svgGreenCar, 0.6, {ease: "none", x: 180, y: "+=20", rotation: "+70_short"})
        .to(svgGreenCar, 1, {ease: "none",  y: "+=160", rotation: "+90_short"})
        .to(svgGreenCar, 1, {ease: "none", y: "+=200"})
        .to(svgGreenCar,1, {ease: "none", y: "+=240"});
}

///11. krizovatka/ 1 auta / ludia + cyklista ////////////////////////////////////////////////////////////////////////
function move11GreenCar() {
    // let animation = gsap.timeline();
    animation.set(svgGreenCar, {ease: "none",      x:0})
        .to(svgGreenCar, 0.6,{ease: "none",   x:120,})
        .to(svgGreenCar, 0.6,{ease: "none",   x:240, })
        .to(svgGreenCar, 0.6,{ease: "none",   x:360, })
        .to(svgGreenCar, 0.6,{ease: "none",   x:480, })
        .to(svgGreenCar, 0.6,{ease: "none", x:600, })
        .to(svgGreenCar, 0.6,{ease: "none", x:720, })
        .to(svgGreenCar, 0.6,{ease: "none", x:840, });
}
function move11Pedestrian(){
     let animation = gsap.timeline();
    animation .set(pedestrian, {ease: "none",      x:0, rotation:"60_short"})
        .to(pedestrian,0.6,{ease: "none",   y:100,})
        .to(pedestrian,0.6,{ease: "none",   y:200,})
        .to(pedestrian,0.6,{ease: "none",   y:300,});
}
function move11Pedestrian2(){
     let animation = gsap.timeline();
    animation .set(pedestrian2, {ease: "none",      x:0, rotation:"100_short"})
        .to(pedestrian2,0.6,{ease: "none",   y:-100,})
        .to(pedestrian2,0.6,{ease: "none",   y:-200,})
        .to(pedestrian2,0.6,{ease: "none",   y:-300,});
}
function move11Bike1(){
     // let animation = gsap.timeline();
    animation .set(bike, {ease: "none",      y:0})
        .to(bike,0.6,{ease: "none",   y:-100})
        .to(bike,0.6,{ease: "none",   y:-200})
        .to(bike, 0.6,{ease: "none",   y:-300, x:20, rotation: "35_short"})
        .to(bike, 0.6,{ease: "none",   y:-340, x:40, rotation: "70_short"})

}

//krizovatka 13 je cyklista ide zarovno s autom, ale cyklista ma prednost, ak auto zataca
function move13GreenCar(){
    // let animation = gsap.timeline();
    animation.set(svgGreenCar, {ease: "none", x: 0})
        .to(svgGreenCar,0.6, {ease: "none", x: 80,})
        .to(svgGreenCar,0.6, {ease: "none", x: 120, y: "+=20", rotation: "40_short"})
        .to(svgGreenCar, 0.6, {ease: "none", x: 150, y: "+=60", rotation: "70_short"})
        .to(svgGreenCar, 0.6, {ease: "none", x: 150, y: "+=120", rotation: "90_short"})
        .to(svgGreenCar, 0.6, {ease: "none", x: 150, y: "+=180"})
        .to(svgGreenCar, 0.6, {ease: "none", x: 150, y: "+=220"})
        .to(svgGreenCar,0.6, {ease: "none", x: 150, y: "+=250"});
}
function move13Bike2(){
    // let animation = gsap.timeline();
    animation .set(bike, {ease: "none",      y:0})
        .to(bike,0.6,{ease: "none",   y:-100,})
        .to(bike,0.6,{ease: "none",   y:-200, })
        .to(bike,0.6,{ease: "none",   y:-300, })
        .to(bike,0.6,{ease: "none",   y:-400, })
        .to(bike,0.6,{ease: "none", y:-500, })
        .to(bike,0.6,{ease: "none", y:-600, })
        .to(bike,0.6,{ease: "none", y:-700,  })
        .to(bike,0.6 ,{ease: "none", y:-800,  })
}
///14. krizovatka/  auta /   ////////////////////////////////////////////////////////////////////////

function move14GreenCar(){
    // let animation = gsap.timeline();
    animation.set(svgGreenCar, {ease: "none", x: 0})
        .to(svgGreenCar, 0.6, {ease: "none", x: 150,})
        .to(svgGreenCar, 0.6, {ease: "none", x: 300})
        .to(svgGreenCar, 0.6, {ease: "none", x: 450})
        .to(svgGreenCar, 0.6, {ease: "none", x: 600})
        .to(svgGreenCar, 0.6, {ease: "none", x: 750})
        .to(svgGreenCar, 0.6, {ease: "none", x: 900})
}
function move14Pedestrian2(){
    // let animation = gsap.timeline();
    animation .set(pedestrian2, {ease: "none",      x:0, rotation:"-70_short"})
        .to(pedestrian2, 0.6,{ease: "none",   y:120,})
        .to(pedestrian2, 0.6,{ease: "none",   y:200, })
        .to(pedestrian2, 0.6,{ease: "none",   y:290, })
}
function move14YellowCar(){
    // let animation = gsap.timeline();
    animation.set(svgYellowCar, {ease: "none", y: 0})
        .to(svgYellowCar, 0.6,{ease: "none",   y:-100})
        .to(svgYellowCar, 0.6,{ease: "none",   y:-180})
        .to(svgYellowCar, 0.5,{ease: "none",   y:-220, x:"-=20",  rotation:"-20_short"})
        .to(svgYellowCar, 0.5,{ease: "none", y:-240, x:"-=40",  rotation:"-40_short"})
        .to(svgYellowCar, 0.5,{ease: "none", y:-250, x:"-=60",  rotation:"-65_short"})
        .to(svgYellowCar, 0.5,{ease: "none", y:-250,       x:"-=70",rotation:"-90_short"})
        .to(svgYellowCar, 0.6,{ease: "none",        x:"-=150"})
        .to(svgYellowCar, 0.6,{ease: "none",        x:"-=150"});
}
///15. krizovatka/  auta /   ////////////////////////////////////////////////////////////////////////
function move15YellowCar(){
    // let animation = gsap.timeline();
    animation.set(svgYellowCar, {ease: "none", y: 0})
        .to(svgYellowCar, 0.6,{ease: "none",   y:-100})
        .to(svgYellowCar, 0.6,{ease: "none",   y:-160, x:"-=20",  rotation:"-20_short"})
        .to(svgYellowCar, 0.6,{ease: "none", y:-200, x:"-=40",  rotation:"-40_short"})
        .to(svgYellowCar, 0.6,{ease: "none", y:-210, x:"-=60",  rotation:"-65_short"})
        .to(svgYellowCar, 0.6,{ease: "none",y:-230, x:"-=70", rotation:"-90_short"})
        .to(svgYellowCar, 0.6,{ease: "none",        x:"-=250"              })
        .to(svgYellowCar, 0.6,{ease: "none",        x:"-=250"                });
}
function move15BlackCar(){
    // let animation = gsap.timeline();
    animation.set(svgBlackCar, {ease: "none", x: 0})
        .to(svgBlackCar, 0.6, {ease: "none", x: "-=150"})
        .to(svgBlackCar, 0.6, {ease: "none", x: "-=150"})
        .to(svgBlackCar, 0.6, {ease: "none", x: "-=150"})
        .to(svgBlackCar, 0.6, {ease: "none", x: "-=150"})
        .to(svgBlackCar, 0.6, {ease: "none", x: "-=150"})
        .to(svgBlackCar, 0.6, {ease: "none", x: "-=150"})
}
function move15GreenCar(){
    // let animation = gsap.timeline();
    animation.set(svgGreenCar, {ease: "none", x: 0})
        .to(svgGreenCar, 0.6,{ease: "none",   x:100})
        .to(svgGreenCar, 0.6,{ease: "none",   x:160, y:"-=20",  rotation:"-20_short"})
        .to(svgGreenCar, 0.6,{ease: "none", x:200, y:"-=40",  rotation:"-40_short"})
        .to(svgGreenCar, 0.6,{ease: "none", x:210, y:"-=55",  rotation:"-70_short"})
        .to(svgGreenCar, 0.6,{ease: "none",x:230, y:"-=70", rotation:"-90_short"})
        .to(svgGreenCar, 0.6,{ease: "none",y:"-=220"})
        .to(svgGreenCar, 0.6,{ease: "none",y:"-=250"});
}


//-----------------------------------------------------------------------------------------------------
/*let pause;
let myVar2;

function demoCrossroad1() {

    move1BlackCar();
    pause = setTimeout(function(){
        move1GreenCar();
    }, 3000);

    myVar2 = setTimeout(function(){
        move1YellowCar();
    }, 6000);
}*/

let pause;

function demoCrossroad1() {
    if (!animation.isActive()) {
        if (!animation.isActive()) {
            if (!animation.isActive()) {
                move1BlackCar();
            }
            move1GreenCar();
        }
        move1YellowCar();
    }
    // move1BlackCar();
    // pause = setInterval(move1GreenCar, 4300);
    // pause = setInterval(move1YellowCar,8100);
}
function demoCrossroad2() {
    move2GreenCar();
}
function demoCrossroad3() {
    if (!animation.isActive()) {
        if (!animation.isActive()) {
            move3to5GreenCar();
        }
        move3to5Tram();
    }
}
function demoCrossroad4() {
    if (!animation.isActive()) {
        if (!animation.isActive()) {
            move3to5Tram();
        }
        move3to5GreenCar();
    }
}
function demoCrossroad5() {
    // if (move3to5Tram()===true)
    //     move3to5GreenCar();
    if (!animation.isActive()) {
        if (!animation.isActive()) {
            move3to5Tram();
        }
        move3to5GreenCar();
    }
}
function demoCrossroad6() {
    if (!animation.isActive()) {
        if (!animation.isActive()) {
            move6GreenCar();
        }
        move6YellowCar();
    }
}
function demoCrossroad7() {
    if (!animation.isActive()) {
        if (!animation.isActive()) {
            move7YellowCar();
        }
        move7GreenCar();
    }
}
function demoCrossroad8() {
    if (!animation.isActive()) {
        if (!animation.isActive()) {
            if(!animation.isActive()){
                move8YellowCar();
            }
            move8BlackCar();
        }
        move8GreenCar();
    }
}
function demoCrossroad9() {
    if (!animation.isActive()) {
        if (!animation.isActive()) {
            if(!animation.isActive()){
                moveTram9();
            }
            move9GreenCar();
        }
        move9YellowCar();
    }
}
function demoCrossroad10() {
    if (!animation.isActive()) {
        if (!animation.isActive()) {
            move10GreenCar();
        }
        move10YellowCar();
    }
}
function demoCrossroad11() {
    if(!animation.isActive()){
        if (!animation.isActive()) {
            move11Bike1();
            move11Pedestrian();
            move11Pedestrian2();
        }
        move11GreenCar();
    }
}
function demoCrossroad12() {
    if (!animation.isActive()) {
        if (!animation.isActive()) {
            move6YellowCar();
        }
        move6GreenCar();
    }
}
function demoCrossroad13() {
    if (!animation.isActive()) {
        if (!animation.isActive()) {
            move13Bike2();
        }
        move13GreenCar();
    }
}
function demoCrossroad14() {
    if (!animation.isActive()) {
        if (!animation.isActive()) {
            if(!animation.isActive()){
                if(!animation.isActive()){
                    move14Pedestrian2();
                }
                move14GreenCar();
            }
            move2BlackCar();
        }
        move14YellowCar()
    }
}
function demoCrossroad15() {
    if (!animation.isActive()) {
        if (!animation.isActive()) {
            if(!animation.isActive()){
                move15BlackCar();
            }
            move15YellowCar();
        }
        move15GreenCar();
    }
}