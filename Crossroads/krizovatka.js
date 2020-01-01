let svgGreenCar = document.querySelector("#svgGreenCar"); //pomocou Jqery si najdeme v html dokumente idecko auta

let svgBlackCar = document.querySelector("#svgBlackCar");
let svgYellowCar = document.querySelector("#svgYellowCar");


let svgTram = document.querySelector("#svgTram");
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
        .to(svgGreenCar, 0.6,{ease: "none",              x:230, y:"-=40", rotation:"-90_short"})
        .to(svgGreenCar, 0.6,{ease: "none",                      y:"-=220"})
        .to(svgGreenCar,0.6,{ease: "none",                        y:"-=250"});
    //POZOR ak sa bude spravat zvlastne, tak vymen x s y, niekedy zalezi od prvotneho natocenia auta
    if (window.cross1blackMoved)
        window.right = true;
    if (window.cross1yellowMoved)
        window.right = false;
    controlAll();
    document.getElementById('reset').style.display = "block";
}

function move1YellowCar() {
    //if(cross1greenMoved )
    window.cross1yellowMoved = true;
    // let animation = gsap.timeline();
    animation .set(svgYellowCar, {ease: "none",     y:0})
        .to(svgYellowCar, 0.6,{ease: "none",   y:-100})
        .to(svgYellowCar, 0.3,{ease: "none",   y:-130,x:"-=20", rotation:"-20_short"})
        .to(svgYellowCar, 0.5,{ease: "none",   y:-165,x:"-=20", rotation:"-40_short" })
        .to(svgYellowCar, 0.5,{ease: "none",   y:-200,x:"-=40", rotation:"-70_short" })
        .to(svgYellowCar, 0.6,{ease: "none",   y:-230,x:"-=40", rotation:"-90_short" })
        .to(svgYellowCar, 0.6,{ease: "none",  x:"-=300"});

    if(window.cross1blackMoved && window.cross1greenMoved && window.right){
            window.right = true;
    }
    controlAll();
    document.getElementById('reset').style.display = "block";
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
    if(window.cross1yellowMoved || window.cross1greenMoved){
        window.right = false;
    }
    controlAll();
    document.getElementById('reset').style.display = "block";
}

///2. krizovatka/ 3 auta ///////////////////////////////////////////////////////////////////////////////////
let cross2greenMoved = false;
let cross2yellowMoved = false;
let cross2blackMoved = false;

function move2BlackCar() {
    window.cross2blackMoved = true;
    animation .set(svgBlackCar, {ease: "none",      y:0})
        .to(svgBlackCar, 0.8,{ease: "none",   y:-200,})
        .to(svgBlackCar, 0.8,{ease: "none",   y:-400, })
        .to(svgBlackCar, 0.8,{ease: "none",   y:-600, })
        .to(svgBlackCar, 0.8,{ease: "none",   y:-800, });
    if(window.cross2yellowMoved && window.cross2greenMoved && window.right){
        window.right = true;
    }
    controlAll();
    document.getElementById('reset').style.display = "block";
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
    if (window.cross2blackMoved)
        window.right = false;
    if(window.cross2yellowMoved && window.demo ===false){
        //zmena semafora
        setTrafficCrossroad2();
    }

    controlAll();
    document.getElementById('reset').style.display = "block";
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
    if (window.cross2blackMoved)
        window.right = false;
    if(window.cross2greenMoved && window.demo === false){
        //zmena semafora
        setTrafficCrossroad2();
    }
    controlAll();
    document.getElementById('reset').style.display = "block";
}

function setTrafficCrossroad2(){
    document.getElementById('greenLight').style.display = "block";
    document.getElementById('blackLight').style.display = "block";
    document.getElementById('blackLight2').style.display = "block";
    document.getElementById('blackLight3').style.display = "block";
    document.getElementById('redLight').style.display = "block";
    document.getElementById('redLight2').style.display = "block";
}
///3. az 5. krizovatka/ 1 auto + elektricka Tram ////////////////////////////////////////////////////////////////////////
let cross3greenMoved = false;
let cross3tramMoved = false;

function move3to5Tram() {
    window.cross3tramMoved = true;
    animation .set(svgTram, {ease: "none",     y:0})
        .to(svgTram,0.6,{ease: "none",   y:-100,})
        .to(svgTram,0.6,{ease: "none",   y:-180, x:"+=20",  rotation:"20_short"})
        .to(svgTram, 0.6,{ease: "none", y:-220, x:"+=40",  rotation:"55_short"})
        .to(svgTram, 0.6,{ease: "none", y:-250, x:"+=50",  rotation:"70_short"})
        .to(svgTram, 0.6,{ease: "none", y:-260, x:"+=110", rotation:"90_short"})
        .to(svgTram, 0.6,{ease: "none", y:-260,               x:"+=180"})
        .to(svgTram, 0.6,{ease: "none", y:-260,               x:"+=220"})
        .to(svgTram,0.6,{ease: "none",   y:-260,               x:"+=250"});
    if(window.cross3greenMoved){
        window.right= false;
    }
    if (document.getElementById('cross4') && window.right===true && window.demo === false)
    {
        document.getElementById('greenLight4').style.display="block";
        document.getElementById('blackLight4').style.display="block";
    }
    controlAll();
    document.getElementById('reset').style.display = "block";
}
function move3to5GreenCar(){
    window.cross3greenMoved = true;
    animation .set(svgGreenCar, {ease: "none",      x:0})
        .to(svgGreenCar,0.6,{ease: "none",   x:100,})
        .to(svgGreenCar,0.6,{ease: "none",   x:200, })
        .to(svgGreenCar,0.6,{ease: "none",   x:300, })
        .to(svgGreenCar,0.6,{ease: "none",   x:400, })
        .to(svgGreenCar, 0.6,{ease: "none", x:500,  })
        .to(svgGreenCar, 0.6,{ease: "none", x:600,  });
    if(window.cross3tramMoved){
        window.right = true;
    }
    controlAll();
    document.getElementById('reset').style.display = "block";
}
///6. krizovatka/ 2 auta / kruhovy objazd ////////////////////////////////////////////////////////////////////////
let cross6greenMoved = false;
let cross6yellowMoved = false;

function move6GreenCar(){
    window.cross6greenMoved = true;
    animation .set(svgGreenCar, {ease: "none",      x:0, })
        .to(svgGreenCar,0.5,{ease: "none",   x:80})
        .to(svgGreenCar, 0.5,{ease: "none", x:130, y:"+=30",  rotation:"30_short"})
        .to(svgGreenCar, 0.5,{ease: "none", x:180, y:"+=40", rotation:"45_short"})
        .to(svgGreenCar, 0.5,{ease: "none", x:210, y:"+=40",  rotation:"50_short"})
        .to(svgGreenCar, 0.4,{ease: "none", x:250, y:"+=20", rotation:"30_short"})
        .to(svgGreenCar, 0.4,{ease: "none", x:280, y:"+=20",  rotation:"20_short"})
        .to(svgGreenCar,0.4,{ease: "none", x:330, y:"+=10", rotation:"0_short"})
        .to(svgGreenCar, 0.4,{ease: "none", x:380, y:"+=10",  rotation:"-10_short"})
        .to(svgGreenCar, 0.5,{ease: "none", x:450, y:"-=20",rotation:"-10_short"})
        .to(svgGreenCar, 0.5,{ease: "none", x:500,  rotation:"-10_short"})
        .to(svgGreenCar, 0.6,{ease: "none", x:550, y:"+=10"});
    if(window.cross6yellowMoved){
        window.right = false;
    }
    controlAll();
    document.getElementById('reset').style.display = "block";
}
function move6YellowCar() {
    window.cross6yellowMoved = true;
    animation.set(svgYellowCar, {ease: "none", y: 0,})
        .to(svgYellowCar, 0.4,{ease: "none", y:-30,x:"-=10", rotation:"-10_short"})
        .to(svgYellowCar, 0.3,{ease: "none", y:-60,x:"-=10", rotation:"-20_short"})
        .to(svgYellowCar,0.3, {ease: "none", y: -80,x: "-=20", rotation: "-30_short"})
        .to(svgYellowCar, 0.4, {ease: "none", y: -110, x: "-=30", rotation: "-45_short"})
        .to(svgYellowCar, 0.4, {ease: "none", y: -130, x: "-=30", rotation: "-60_short"})
        .to(svgYellowCar, 0.4, {ease: "none", y: -145, x: "-=30", rotation: "-75_short"})
        .to(svgYellowCar, 0.4, {ease: "none", y: -160, x: "-=40", rotation: "-90_short"})
        .to(svgYellowCar, 0.4, {ease: "none", y: -160, x: "-=40", rotation: "-100_short"})
        .to(svgYellowCar, 0.4, {ease: "none", y: -150, x: "-=40", rotation: "-110_short"})
        .to(svgYellowCar, 0.4, {ease: "none", y: -120, x: "-=45", rotation: "-120_short"})
        .to(svgYellowCar, 0.4, {ease: "none", y: -100, x: "-=45", rotation: "-130_short"})
        .to(svgYellowCar, 0.4, {ease: "none", y: -80, x: "-=30", rotation: "-140_short"})
        .to(svgYellowCar, 0.4, {ease: "none", y: -60, x: "-=30", rotation: "-140_short"})
        .to(svgYellowCar, 0.4, {ease: "none", y: -40, x: "-=30", rotation: "-140_short"});
    if(window.cross6greenMoved){
        window.right = true;
    }
    controlAll();
    document.getElementById('reset').style.display = "block";
}
///7. krizovatka/ 2 auta ////////////////////////////////////////////////////////////////////////
let cross7greenMoved = false;
let cross7yellowMoved = false;

function move7YellowCar() {
    window.cross7yellowMoved = true;
    animation.set(svgYellowCar, {ease: "none", x: 0,})
        .to(svgYellowCar, 0.5,{ease: "none",   y:"-100"})
        .to(svgYellowCar, 0.5,{ease: "none",   y:"-180"})
        .to(svgYellowCar, 0.5,{ease: "none", y:"-260"})
        .to(svgYellowCar, 0.5,{ease: "none", y:"-340"})
        .to(svgYellowCar, 0.5,{ease: "none",y:"-420"})
        .to(svgYellowCar, 0.5,{ease: "none",y:"-500"})
        .to(svgYellowCar, 0.5,{ease: "none",y:"-580"})
        .to(svgYellowCar, 0.5,{ease: "none",y:"-660"})
        .to(svgYellowCar, 0.5,{ease: "none",y:"-740"});
    if(window.cross7greenMoved){
        window.right = false;
    }
    controlAll();
    document.getElementById('reset').style.display = "block";
}
function move7GreenCar() {
    window.cross7greenMoved = true;
    animation.set(svgGreenCar, {ease: "none", y: 0,})
        .to(svgGreenCar,0.6,{ease: "none",   x:100})
        .to(svgGreenCar,0.5,{ease: "none",   x:160, y:"-=20",  rotation:"-20_short"})
        .to(svgGreenCar, 0.5,{ease: "none", x:190, y:"-=30",  rotation:"-40_short"})
        .to(svgGreenCar, 0.6,{ease: "none", x:220, y:"-=60",  rotation:"-55_short"})
        .to(svgGreenCar, 0.6,{ease: "none", x:250, y:"-=60",  rotation:"-70_short"})
        .to(svgGreenCar, 0.6,{ease: "none",x:280, y:"-=160", rotation:"-90_short"})
        .to(svgGreenCar, 0.6,{ease: "none",y:"-=220"})
        .to(svgGreenCar,0.6,{ease: "none",y:"-=250"});
    if(window.cross7yellowMoved){
        window.right = true;
    }
    controlAll();
    document.getElementById('reset').style.display = "block";
}

///8. krizovatka/ 3 auta /////////////////////////////////////////////////////////////////////////
let cross8yellowMoved = false;
let cross8blackMoved = false;
let cross8greenMoved = false;
window.right = true;


function move8BlackCar() {
    window.cross8blackMoved = true;
    animation.set(svgYellowCar, {ease: "none", y: 0,})
        .to(svgBlackCar, 0.7,{ease: "none",   y:-160})
        .to(svgBlackCar, 0.7,{ease: "none",   y:-320})
        .to(svgBlackCar, 0.7,{ease: "none",y:-480})
        .to(svgBlackCar, 0.7,{ease: "none",y:-640})
        .to(svgBlackCar, 0.7,{ease: "none",y:-800});
    if(window.cross8yellowMoved && window.right)
        window.right=true;
    if (window.cross8greenMoved && window.right)
        window.right=false;
    controlAll();
    document.getElementById('reset').style.display = "block";
}

function move8YellowCar() {
    window.cross8yellowMoved = true;
    animation.set(svgYellowCar, {ease: "none", y: 0,})
        .to(svgYellowCar,0.6,{ease: "none",   y:-70})
        .to(svgYellowCar,0.5,{ease: "none",   y:-130, x:"-=20",  rotation:"-30_short"})
        .to(svgYellowCar, 0.5,{ease: "none", y:-180, x:"-=40",  rotation:"-50_short"})
        .to(svgYellowCar, 0.5,{ease: "none", y:-200, x:"-=40", rotation:"-70_short"})
        .to(svgYellowCar, 0.6,{ease: "none",y:-220,x:"-=80",rotation:"-90_short"})
        .to(svgYellowCar, 0.6,{ease: "none",               x:"-=220"})
        .to(svgYellowCar,0.6,{ease: "none",                 x:"-=250"});
    if(window.cross8greenMoved && window.right)
        window.right = false;
    if(window.cross8blackMoved && window.right){
        window.right= false;
    }
    controlAll();

    document.getElementById('reset').style.display = "block";
}
function move8GreenCar() {
    window.cross8greenMoved = true;
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
    if (!window.cross8blackMoved&& window.right===true)
        window.right = false;
    if (!window.cross8yellowMoved && window.right===true)
        window.right = false;
    if(window.cross8yellowMoved && window.cross8blackMoved && window.right){
        window.right = true;
    }
    controlAll();
    document.getElementById('reset').style.display = "block";
}



///9. krizovatka/ 2 auta / 1 elektricka ////////////////////////////////////////////////////////////////////////
let cross9yellowMoved = false;
let cross9tramMoved = false;
let cross9greenMoved = false;

function move9YellowCar() {
    window.cross9yellowMoved = true;
    animation.set(svgYellowCar, {ease: "none", y: 0,})
        .to(svgYellowCar,0.8,{ease: "none",   y:"-85"})
        .to(svgYellowCar, 0.8,{ease: "none",   y:"-140", x:"+=0", rotation:"35_short"})
        .to(svgYellowCar, 0.4,{ease: "none",   y:"-150", x:"+=10",  rotation:"50_short"})
        .to(svgYellowCar, 0.4,{ease: "none", y:"-160",x:"+=40", rotation:"70_short"})
        .to(svgYellowCar, 0.6,{ease: "none",x:"+=90",rotation:"90_short"})
        .to(svgYellowCar, 0.6,{ease: "none",               x:"+=120"})
        .to(svgYellowCar,0.6,{ease: "none",                 x:"+=180"});
    controlAll();
    document.getElementById('reset').style.display = "block";
}
function move9GreenCar() {
    window.cross9greenMoved = true;
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
    controlAll();
    document.getElementById('reset').style.display = "block";
}
function moveTram9(){
    window.cross9tramMoved = true;
    animation .set(svgTram, {ease: "none",      y:0})
        .to(svgTram, 0.6,{ease: "none",   y:-100,})
        .to(svgTram, 0.6,{ease: "none",   y:-200, })
        .to(svgTram, 0.6,{ease: "none",   y:-305, })
        .to(svgTram, 0.6,{ease: "none",   y:-400, })
        .to(svgTram, 0.6,{ease: "none", y:-500,  })
        .to(svgTram, 0.6,{ease: "none", y:-600,  })
        .to(svgTram, 0.6,{ease: "none", y:-700,  })
        .to(svgTram, 0.6,{ease: "none", y:-800,  })
        .to(svgTram, 0.6,{ease: "none", y:-900,  });
    if(window.cross9greenMoved){
        window.right = false;
    }
    controlAll();
    document.getElementById('reset').style.display = "block";
}

///10. krizovatka/ 2 auta  ////////////////////////////////////////////////////////////////////////
let cross10yellowMoved = false;
let cross10greenMoved = false;

 function move10YellowCar() {
     window.cross10yellowMoved = true;
    animation.set(svgYellowCar, {ease: "none", y: 0,})
        .to(svgYellowCar, 0.6,{ease: "none",     y:"-150"})
        .to(svgYellowCar, 0.6,{ease: "none",     y:"-300"})
        .to(svgYellowCar, 0.6,{ease: "none",     y:"-450"})
        .to(svgYellowCar, 0.6,{ease: "none",     y:"-600"})
        .to(svgYellowCar, 0.6,{ease: "none",     y:"-750"})
        .to(svgYellowCar, 0.6,{ease: "none",     y:"-900"});
     if(window.cross10greenMoved){
         window.right = true;
     }
     controlAll();
     document.getElementById('reset').style.display = "block";
}
function move10GreenCar() {
    window.cross10greenMoved = true;
    animation.set(svgGreenCar, {ease: "none", x: 0,})
        .to(svgGreenCar, 1, {ease: "none", x: 90})
        .to(svgGreenCar, 0.5, {ease: "none", x: 120})
        .to(svgGreenCar, 0.4, {ease: "none", x: 150, y: "+=20", rotation: "+30_short"})
        .to(svgGreenCar, 0.6, {ease: "none", x: 180, y: "+=20", rotation: "+70_short"})
        .to(svgGreenCar, 1, {ease: "none",  y: "+=160", rotation: "+90_short"})
        .to(svgGreenCar, 1, {ease: "none", y: "+=200"})
        .to(svgGreenCar,1, {ease: "none", y: "+=240"});
    if(window.cross10yellowMoved){
        window.right = false;
    }
    controlAll();
    document.getElementById('reset').style.display = "block";
}

///11. krizovatka/ 1 auta / ludia + cyklista ////////////////////////////////////////////////////////////////////////
let cross11bikeMoved = false;
let cross11greenMoved = false;
let cross11ped1Moved = false;
let cross11ped2Moved = false;

function move11GreenCar() {
    window.cross11greenMoved = true;
    animation.set(svgGreenCar, {ease: "none",      x:0})
        .to(svgGreenCar, 0.6,{ease: "none",   x:120,})
        .to(svgGreenCar, 0.6,{ease: "none",   x:240, })
        .to(svgGreenCar, 0.6,{ease: "none",   x:360, })
        .to(svgGreenCar, 0.6,{ease: "none",   x:480, })
        .to(svgGreenCar, 0.6,{ease: "none", x:600, })
        .to(svgGreenCar, 0.6,{ease: "none", x:720, })
        .to(svgGreenCar, 0.6,{ease: "none", x:840, });
    window.right = window.cross11ped1Moved && window.cross11bikeMoved && window.cross11ped2Moved;
    controlAll();
    document.getElementById('reset').style.display = "block";
}
function move11Pedestrian(){
    window.cross11ped1Moved = true;
    animation .set(pedestrian, {ease: "none",      x:0, rotation:"60_short"})
        .to(pedestrian,0.6,{ease: "none",   y:100,})
        .to(pedestrian,0.6,{ease: "none",   y:200,})
        .to(pedestrian,0.6,{ease: "none",   y:300,});
    controlAll();
    document.getElementById('reset').style.display = "block";
}
function move11Pedestrian2(){
    window.cross11ped2Moved = true;
    animation .set(pedestrian2, {ease: "none",      x:0, rotation:"100_short"})
        .to(pedestrian2,0.6,{ease: "none",   y:-100,})
        .to(pedestrian2,0.6,{ease: "none",   y:-200,})
        .to(pedestrian2,0.6,{ease: "none",   y:-300,});
    controlAll();
    document.getElementById('reset').style.display = "block";
}
function move11Bike1(){
    window.cross11bikeMoved = true;
    animation .set(bike, {ease: "none",      y:0})
        .to(bike,0.6,{ease: "none",   y:-100})
        .to(bike,0.6,{ease: "none",   y:-200})
        .to(bike, 0.6,{ease: "none",   y:-300, x:20, rotation: "35_short"})
        .to(bike, 0.6,{ease: "none",   y:-340, x:40, rotation: "70_short"});
    controlAll();
    document.getElementById('reset').style.display = "block";
}
///6. krizovatka/ 2 auta / kruhovy objazd ////////////////////////////////////////////////////////////////////////
let cross12greenMoved = false;
let cross12yellowMoved = false;

function move12GreenCar(){
    window.cross12greenMoved = true;
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
        .to(svgGreenCar, 0.6,{ease: "none", x:550, y:"+=10"});
    if(window.cross12yellowMoved){
        window.right = true;
    }
    controlAll();
    document.getElementById('reset').style.display = "block";
}

function move12YellowCar() {
    window.cross12yellowMoved = true;
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
        .to(svgYellowCar, 0.4, {ease: "none", y: -40, x: "-=30", rotation: "-140_short"});
    if(window.cross12greenMoved){
        window.right = false;
    }
    controlAll();
    document.getElementById('reset').style.display = "block";
}

let cross13greenMoved = false;
let cross13bikeMoved = false;
//krizovatka 13 je cyklista ide zarovno s autom, ale cyklista ma prednost, ak auto zataca
function move13GreenCar(){
    window.cross13greenMoved = true;
    animation.set(svgGreenCar, {ease: "none", x: 0})
        .to(svgGreenCar,0.6, {ease: "none", x: 80,})
        .to(svgGreenCar,0.6, {ease: "none", x: 120, y: "+=20", rotation: "40_short"})
        .to(svgGreenCar, 0.6, {ease: "none", x: 150, y: "+=60", rotation: "70_short"})
        .to(svgGreenCar, 0.6, {ease: "none", x: 150, y: "+=120", rotation: "90_short"})
        .to(svgGreenCar, 0.6, {ease: "none", x: 150, y: "+=180"})
        .to(svgGreenCar, 0.6, {ease: "none", x: 150, y: "+=220"})
        .to(svgGreenCar,0.6, {ease: "none", x: 150, y: "+=250"});
    if(window.cross13bikeMoved){
        window.right = true;
    }
    controlAll();
    document.getElementById('reset').style.display = "block";
}
function move13Bike2(){
    window.cross13bikeMoved = true;
    animation .set(bike, {ease: "none",      y:0})
        .to(bike,0.6,{ease: "none",   y:-100,})
        .to(bike,0.6,{ease: "none",   y:-200, })
        .to(bike,0.6,{ease: "none",   y:-300, })
        .to(bike,0.6,{ease: "none",   y:-400, })
        .to(bike,0.6,{ease: "none", y:-500, })
        .to(bike,0.6,{ease: "none", y:-600, })
        .to(bike,0.6,{ease: "none", y:-700,  })
        .to(bike,0.6 ,{ease: "none", y:-800,  });
    if(window.cross13greenMoved){
        window.right = false;
    }
    controlAll();
    document.getElementById('reset').style.display = "block";
}
///14. krizovatka/  auta /   ////////////////////////////////////////////////////////////////////////
let cross14pedMoved = false;
let cross14greenMoved = false;
let cross14blackMoved = false;
let cross14yellowMoved = false;

function move14GreenCar(){
    window.cross14greenMoved = true;
    animation.set(svgGreenCar, {ease: "none", x: 0})
        .to(svgGreenCar, 0.6, {ease: "none", x: 150,})
        .to(svgGreenCar, 0.6, {ease: "none", x: 300})
        .to(svgGreenCar, 0.6, {ease: "none", x: 450})
        .to(svgGreenCar, 0.6, {ease: "none", x: 600})
        .to(svgGreenCar, 0.6, {ease: "none", x: 750})
        .to(svgGreenCar, 0.6, {ease: "none", x: 900});
    if (window.cross14yellowMoved)
        window.right = false;
    controlAll();
    document.getElementById('reset').style.display = "block";
}
function move14Pedestrian2(){
    window.cross14pedMoved = true;
    animation .set(pedestrian2, {ease: "none",      x:0, rotation:"-70_short"})
        .to(pedestrian2, 0.6,{ease: "none",   y:80,})
        .to(pedestrian2, 0.6,{ease: "none",   y:160, });
    if (window.cross14greenMoved)
        window.right = false;
    controlAll();
    document.getElementById('reset').style.display = "block";
}
function move14YellowCar(){
    window.cross14yellowMoved = true;
    animation.set(svgYellowCar, {ease: "none", y: 0})
        .to(svgYellowCar, 0.6,{ease: "none",   y:-100})
        .to(svgYellowCar, 0.6,{ease: "none",   y:-180})
        .to(svgYellowCar, 0.5,{ease: "none",   y:-220, x:"-=20",  rotation:"-20_short"})
        .to(svgYellowCar, 0.5,{ease: "none", y:-240, x:"-=40",  rotation:"-40_short"})
        .to(svgYellowCar, 0.5,{ease: "none", y:-250, x:"-=60",  rotation:"-65_short"})
        .to(svgYellowCar, 0.5,{ease: "none", y:-250,       x:"-=70",rotation:"-90_short"})
        .to(svgYellowCar, 0.6,{ease: "none",        x:"-=150"})
        .to(svgYellowCar, 0.6,{ease: "none",        x:"-=150"});
    if (window.cross14pedMoved && window.cross14blackMoved && window.cross14greenMoved && window.right)
        window.right = true;
    controlAll();
    document.getElementById('reset').style.display = "block";
}

function move14BlackCar() {
    window.cross14blackMoved = true;
    animation .set(svgBlackCar, {ease: "none",      y:0})
        .to(svgBlackCar, 0.8,{ease: "none",   y:-200,})
        .to(svgBlackCar, 0.8,{ease: "none",   y:-400, })
        .to(svgBlackCar, 0.8,{ease: "none",   y:-600, })
        .to(svgBlackCar, 0.8,{ease: "none",   y:-800, })
        .to(svgBlackCar, 0.8,{ease: "none",   y:-900, });
    if (window.cross14yellowMoved)
        window.right = false;
    controlAll();
    document.getElementById('reset').style.display = "block";
}
///15. krizovatka/  auta /   ////////////////////////////////////////////////////////////////////////
let cross15blackMoved = false;
let cross15yellowMoved = false;
let cross15greenMoved = false;

function move15YellowCar(){
    window.cross15yellowMoved = true;
    animation.set(svgYellowCar, {ease: "none", y: 0})
        .to(svgYellowCar, 0.6,{ease: "none",   y:-100})
        .to(svgYellowCar, 0.6,{ease: "none",   y:-160, x:"-=20",  rotation:"-20_short"})
        .to(svgYellowCar, 0.6,{ease: "none", y:-200, x:"-=40",  rotation:"-40_short"})
        .to(svgYellowCar, 0.6,{ease: "none", y:-210, x:"-=60",  rotation:"-65_short"})
        .to(svgYellowCar, 0.6,{ease: "none",y:-230, x:"-=70", rotation:"-90_short"})
        .to(svgYellowCar, 0.6,{ease: "none",        x:"-=250"              })
        .to(svgYellowCar, 0.6,{ease: "none",        x:"-=250"                });
    if(window.cross15blackMoved && window.demo ===false){
        setTrafficCrossroad15();
        window.right = true;
    }
    if(window.cross15greenMoved)
        window.right = false;

    controlAll();
    document.getElementById('reset').style.display = "block";
}
function move15BlackCar(){
    window.cross15blackMoved = true;
    animation.set(svgBlackCar, {ease: "none", y: 0})
        .to(svgBlackCar, 0.6, {ease: "none", y: "-=150"})
        .to(svgBlackCar, 0.6, {ease: "none", y: "-=150"})
        .to(svgBlackCar, 0.6, {ease: "none", y: "-=150"})
        .to(svgBlackCar, 0.6, {ease: "none", y: "-=150"})
        .to(svgBlackCar, 0.6, {ease: "none", y: "-=150"})
        .to(svgBlackCar, 0.6, {ease: "none", y: "-=150"});
    if(window.cross15yellowMoved && window.demo ===false){
        setTrafficCrossroad15();
        window.right = false;
    }
    if (window.cross15greenMoved)
        window.right = false;
    controlAll();
    document.getElementById('reset').style.display = "block";
}
function move15GreenCar(){
    window.cross15greenMoved = true;
    animation.set(svgGreenCar, {ease: "none", x: 0})
        .to(svgGreenCar, 0.6,{ease: "none",   x:100})
        .to(svgGreenCar, 0.6,{ease: "none",   x:160, y:"-=20",  rotation:"-20_short"})
        .to(svgGreenCar, 0.6,{ease: "none", x:200, y:"-=40",  rotation:"-40_short"})
        .to(svgGreenCar, 0.6,{ease: "none", x:210, y:"-=55",  rotation:"-70_short"})
        .to(svgGreenCar, 0.6,{ease: "none",x:230, y:"-=70", rotation:"-90_short"})
        .to(svgGreenCar, 0.6,{ease: "none",y:"-=220"})
        .to(svgGreenCar, 0.6,{ease: "none",y:"-=250"});
    if(window.cross15yellowMoved && window.cross15blackMoved && window.right)
        window.right = true ;
    controlAll();
    document.getElementById('reset').style.display = "block";
}

function setTrafficCrossroad15() {
    document.getElementById('greenLight').style.display = "block";
    document.getElementById('greenLight2').style.display = "block";
    document.getElementById('blackLight').style.display = "block";
    document.getElementById('blackLight2').style.display = "block";
    document.getElementById('blackLight3').style.display = "block";
    document.getElementById('blackLight4').style.display = "block";
    document.getElementById('redLight').style.display = "block";
    document.getElementById('redLight2').style.display = "block";
}


//-----------------------------------------------------------------------------------------------------

function clearTrafficCrossroad2(){
    document.getElementById('greenLight').style.display = "none";
    document.getElementById('blackLight').style.display = "none";
    document.getElementById('blackLight2').style.display = "none";
    document.getElementById('blackLight3').style.display = "none";
    document.getElementById('redLight').style.display = "none";
    document.getElementById('redLight2').style.display = "none";
}
function clearTrafficCrossroad4() {
    document.getElementById('greenLight4').style.display="none";
    document.getElementById('blackLight4').style.display="none";
}

function clearTrafficCrossroad15() {
    document.getElementById('greenLight').style.display = "none";
    document.getElementById('greenLight2').style.display = "none";
    document.getElementById('blackLight').style.display = "none";
    document.getElementById('blackLight2').style.display = "none";
    document.getElementById('blackLight3').style.display = "none";
    document.getElementById('blackLight4').style.display = "none";
    document.getElementById('redLight').style.display = "none";
    document.getElementById('redLight2').style.display = "none";
}

function displayButtonsLogs() {
    document.getElementById('wronglog').style.display = "none";
    document.getElementById('rightlog').style.display = "none";
    document.getElementById('reset').style.display = "block";
    document.getElementById('reset').style.position = "absolute";
    document.getElementById('reset').style.marginTop = "40px";
    document.getElementById('reset').style.marginLeft = "10px";
    document.getElementById('demoCrossroad').style.display = "none";
    document.getElementById('rightArrow').style.display = "block";
    document.getElementById('leftArrow').style.display = "block";
}

function demoCrossroad1() {
    animation.progress(0).clear();
    if (!animation.isActive()) {
        if (!animation.isActive()) {
            if (!animation.isActive()) {
                move1BlackCar();
            }
            move1GreenCar();
        }
        move1YellowCar();
        displayButtonsLogs();
    }
}
window.demo = false;

function demoCrossroad2() {
    animation.progress(0).clear();
    clearTrafficCrossroad2();
    clearCrossMoved();
    window.demo =true;
    animation.timeScale(0);
    setInterval(function(){animation.timeScale(1)},2000);
    if (!animation.isActive()) {
        if (!animation.isActive()) {
            if (!animation.isActive()) {
                move2GreenCar();
            }
            move2YellowCar();
        }
        setInterval(function () {setTrafficCrossroad2();},6000);
        move2BlackCar();
        window.demo = false;
        displayButtonsLogs();
    }
}
function demoCrossroad3() {
    animation.progress(0).clear();
    if (!animation.isActive()) {
        if (!animation.isActive()) {
            move3to5Tram();
        }
        move3to5GreenCar();
    }
    displayButtonsLogs();
}
function demoCrossroad4() {
    animation.progress(0).clear();
    clearTrafficCrossroad4();
    clearCrossMoved();
    window.demo =true;
    animation.timeScale(0);
    setInterval(function(){animation.timeScale(1)},2000);
    if (!animation.isActive()) {
        if (!animation.isActive()) {
            move3to5Tram();
        }
        setInterval(function () {
            document.getElementById('greenLight4').style.display="block";
            document.getElementById('blackLight4').style.display="block";
            },6000);
        move3to5GreenCar();
        window.demo = false;
    }
    displayButtonsLogs();
}
function demoCrossroad5() {
    animation.progress(0).clear();
    if (!animation.isActive()) {
        if (!animation.isActive()) {
            move3to5Tram();
        }
        move3to5GreenCar();
    }
    displayButtonsLogs();
}
function demoCrossroad6() {
    animation.progress(0).clear();
    if (!animation.isActive()) {
        if (!animation.isActive()) {
            move6GreenCar();
        }
        move6YellowCar();
    }
    displayButtonsLogs();
}
function demoCrossroad7() {
    animation.progress(0).clear();
    if (!animation.isActive()) {
        if (!animation.isActive()) {
            move7YellowCar();
        }
        move7GreenCar();
    }
    displayButtonsLogs();
}
function demoCrossroad8() {
    animation.progress(0).clear();
    if (!animation.isActive()) {
        if (!animation.isActive()) {
            if(!animation.isActive()){
                move8YellowCar();
            }
            move8BlackCar();
        }
        move8GreenCar();
    }
    displayButtonsLogs();
}
function demoCrossroad9() {
    animation.progress(0).clear();
    if (!animation.isActive()) {
            if(!animation.isActive()){
                moveTram9();
                move9YellowCar();
            }
            move9GreenCar();
    }
    displayButtonsLogs();
}
function demoCrossroad10() {
    animation.progress(0).clear();
    if (!animation.isActive()) {
        if (!animation.isActive()) {
            move10GreenCar();
        }
        move10YellowCar();
    }
    displayButtonsLogs();
}
function demoCrossroad11() {
    animation.progress(0).clear();
    if(!animation.isActive()){
        if (!animation.isActive()) {
            move11Bike1();
            move11Pedestrian();
            move11Pedestrian2();
        }
        move11GreenCar();
    }
    displayButtonsLogs();
}
function demoCrossroad12() {
    animation.progress(0).clear();
    if (!animation.isActive()) {
        if (!animation.isActive()) {
            move6YellowCar();
        }
        move6GreenCar();
    }
    displayButtonsLogs();
}
function demoCrossroad13() {
    animation.progress(0).clear();
    if (!animation.isActive()) {
        if (!animation.isActive()) {
            move13Bike2();
        }
        move13GreenCar();
    }
    displayButtonsLogs();
}
function demoCrossroad14() {
    animation.progress(0).clear();
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
    displayButtonsLogs();
}
function demoCrossroad15() {
    animation.progress(0).clear();
    clearTrafficCrossroad15();
    clearCrossMoved();
    window.demo =true;
    animation.timeScale(0);
    setInterval(function(){animation.timeScale(1)},2000);
    if (!animation.isActive()) {
        if (!animation.isActive()) {
            if(!animation.isActive()){
                move15BlackCar();
            }
            move15YellowCar();
        }
        setInterval(function () {setTrafficCrossroad15();},8000);
        move15GreenCar();
        window.demo = false;
    }
    displayButtonsLogs();
}

function rightLog() {
    document.getElementById('rightlog').style.display = "block";
    document.getElementById('demoCrossroad').style.display = "none";
    document.getElementById('rightArrow').style.display = "block";
    document.getElementById('leftArrow').style.display = "block";
}

function wrongLog() {
    document.getElementById('wronglog').style.display = "block";
    document.getElementById('demoCrossroad').style.display = "block";
}

function rightControl() {
    if (window.right!==true){
        wrongLog();
    }
    else if (window.right===true)
    {
        rightLog();
    }
}
function controlAll(){
    if(window.cross1yellowMoved && window.cross1blackMoved && window.cross1greenMoved) {
        rightControl();
    }
    if(window.cross2yellowMoved && window.cross2blackMoved && window.cross2greenMoved) {
        rightControl();
    }
    if(window.cross3greenMoved && window.cross3tramMoved) {
        rightControl();
    }
    if(window.cross6greenMoved && window.cross6yellowMoved) {
        rightControl();
    }
    if(window.cross7greenMoved && window.cross7yellowMoved) {
        rightControl();
    }
    if(window.cross8yellowMoved && window.cross8blackMoved && window.cross8greenMoved){
        rightControl();
    }
    if(window.cross9yellowMoved && window.cross9tramMoved && window.cross9greenMoved){
        rightControl();
    }
    if(window.cross10yellowMoved && window.cross10greenMoved){
        rightControl();
    }
    if(window.cross11bikeMoved && window.cross11ped1Moved && window.cross11ped2Moved && window.cross11greenMoved){
        rightControl();
    }
    if(window.cross12greenMoved && window.cross12yellowMoved){
        rightControl();
    }
    if (window.cross13bikeMoved && window.cross13greenMoved){
        rightControl();
    }
    if (window.cross14pedMoved && window.cross14yellowMoved && window.cross14blackMoved && window.cross14greenMoved){
        rightControl();
    }
    if (window.cross15blackMoved && window.cross15greenMoved && window.cross15yellowMoved){
        rightControl();
    }
}

function clearCrossMoved() {
    window.cross1greenMoved = false;
    window.cross1yellowMoved = false;
    window.cross1blackMoved = false;
    window.cross2blackMoved = false;
    window.cross2greenMoved = false;
    window.cross2yellowMoved = false;
    window.cross3greenMoved = false;
    window.cross3tramMoved = false;
    window.cross6greenMoved = false;
    window.cross6yellowMoved = false;
    window.cross7yellowMoved = false;
    window.cross7greenMoved =false;
    window.cross8blackMoved = false;
    window.cross8greenMoved = false;
    window.cross8yellowMoved = false;
    window.cross9greenMoved= false;
    window.cross9tramMoved = false;
    window.cross9yellowMoved = false;
    window.cross10greenMoved = false;
    window.cross10yellowMoved = false;
    window.cross11greenMoved= false;
    window.cross12greenMoved = false;
    window.cross12yellowMoved = false;
    window.cross13bikeMoved = false;
    window.cross13greenMoved = false;
    window.cross14greenMoved = false;
    window.cross14pedMoved = false;
    window.cross14blackMoved  = false;
    window.cross14yellowMoved= false;
    window.cross15yellowMoved = false;
    window.cross15blackMoved = false;
    window.cross15greenMoved = false;
}
function clearTraffics() {
    if (document.getElementById("cross2"))
        clearTrafficCrossroad2();
    if (document.getElementById("cross4"))
        clearTrafficCrossroad4();
    if (document.getElementById("cross15"))
        clearTrafficCrossroad15();
}

function resetCrossroad(){
    clearTraffics();
    document.getElementById('wronglog').style.display = "none";
    document.getElementById('rightlog').style.display = "none";
    document.getElementById('rightArrow').style.display = "none";
    document.getElementById('leftArrow').style.display = "none";
    window.right=true;
    clearCrossMoved();

    animation.progress(0).clear();
}