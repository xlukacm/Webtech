 let svg = document.querySelector("#svg2"); //pomocou Jqery si najdeme v html dokumente idecko auta
 let svgb = document.querySelector("#svgB");
 let svgzl = document.querySelector("#svgW");
 let svgz = document.querySelector("#svgZ");

///1. krizovatka/ 3 auta ////////////////////////////////////////////////////////////////////////

function move1Z(){  //zelene auto
    let animation = gsap.timeline();
    //toto je green sock funkcia ktoru volame o riadok nizsie

    animation .set(svg, {ease: "none",       x:0})
        //animacie su jednoduche, spravis autu path skrze x a y suradnice a popritom otacas
        //vyskusajte si nejaku krizovatku u seba a pomente tieto suradnice a pozerajte ako to bude reagovat auto
        .to(svg, 1,{ease: "none",   x:100})
        .to(svg, 1,{ease: "none",   x:180, y:"-=20",  rotation:"-20_short"})
        .to(svg, 0.8,{ease: "none", x:220, y:"-=60",  rotation:"-40_short"})
        .to(svg, 0.7,{ease: "none", x:300, y:"-120",  rotation:"-80_short"})
        .to(svg, 0.7,{ease: "none",               x:330, y:"-=180", rotation:"-90_short"})
        .to(svg, 0.8,{ease: "none",                      y:"-=220"})
        .to(svg, 1,{ease: "none",                        y:"-=250"});
    //POZOR ak sa bude spravat zvlastne, tak vymen x s y, niekedy zalezi od prvotneho natocenia auta
}
 function move1ZL() {
     let animation3w = gsap.timeline();
     animation3w .set(svgzl, {ease: "none",     y:0})
         .to(svgzl, 1,{ease: "none",   y:100,})
         .to(svgzl, 0.7,{ease: "none", y:180, x:"+=40",  rotation:"140_short"})
         .to(svgzl, 0.7,{ease: "none", y:220, x:"+=60",  rotation:"130_short"})
         .to(svgzl, 0.7,{ease: "none", y:260, x:"+=100", rotation:"120_short"})
         .to(svgzl, 0.7,{ease: "none", y:320,               x:"+=140", rotation:"110_short"})
         .to(svgzl, 0.8,{ease: "none", y:340,               x:"+=170", rotation:"90_short"})
         .to(svgzl, 0.8,{ease: "none", y:330,               x:"+=210", rotation:"90_short"})
         .to(svgzl, 1,{ease: "none",   y:330,               x:"+=250", rotation:"90_short"});
 }

 function move1B() {
     let animation3b = gsap.timeline();
     animation3b .set(svgb, {ease: "none",      y:0})
         .to(svgb, 0.7,{ease: "none",   y:-120,})
         .to(svgb, 0.7,{ease: "none",   y:-240, })
         .to(svgb, 0.7,{ease: "none",   y:-360, })
         .to(svgb, 0.7,{ease: "none",   y:-480, })
         .to(svgb, 0.7,{ease: "none", y:-600, })
         .to(svgb, 0.7,{ease: "none", y:-720, })
         .to(svgb, 0.7,{ease: "none", y:-840, });
 }
 ///2. krizovatka/ 3 auta ///////////////////////////////////////////////////////////////////////////////////
 function move2B() {
     let animation2b = gsap.timeline();
     animation2b .set(svgb, {ease: "none",      y:0})
         .to(svgb, 0.7,{ease: "none",   y:120,})
         .to(svgb, 0.7,{ease: "none",   y:240, })
         .to(svgb, 0.7,{ease: "none",   y:360, })
         .to(svgb, 0.7,{ease: "none",   y:480, })
         .to(svgb, 0.7,{ease: "none", y:600, })
         .to(svgb, 0.7,{ease: "none", y:720, })
         .to(svgb, 0.7,{ease: "none", y:840, });
 }
 function move2Z(){
     let animation2 = gsap.timeline();
     animation2 .set(svg, {ease: "none",      x:0})
         .to(svg, 1,{ease: "none",   x:100,})
         .to(svg, 1,{ease: "none",   x:180, y:"+=20",  rotation:"40_short"})
         .to(svg, 0.8,{ease: "none", x:190, y:"+=60",  rotation:"70_short"})
         .to(svg, 0.7,{ease: "none", x:190, y:"+=120", rotation:"90_short"})
         .to(svg, 0.7,{ease: "none", x:190,               y:"+=180"})
         .to(svg, 0.8,{ease: "none", x:190,               y:"+=220"})
         .to(svg, 1,{ease: "none",   x:190,               y:"+=250"});
 }

 function move2ZL() {
     let animation2w = gsap.timeline();
     animation2w .set(svgzl, {ease: "none",     y:0})
         .to(svgzl, 1,{ease: "none",   y:-100,})
         .to(svgzl, 1,{ease: "none",   y:-180, x:"+=20",  rotation:"40_short"})
         .to(svgzl, 0.8,{ease: "none", y:-210, x:"+=60",  rotation:"70_short"})
         .to(svgzl, 0.7,{ease: "none", y:-210, x:"+=120", rotation:"90_short"})
         .to(svgzl, 0.7,{ease: "none", y:-210,               x:"+=180"})
         .to(svgzl, 0.8,{ease: "none", y:-210,               x:"+=220"})
         .to(svgzl, 1,{ease: "none",   y:-210,               x:"+=250"});
 }
 ///3. az 5. krizovatka/ 1 auto + elektricka Tram ////////////////////////////////////////////////////////////////////////
 function move3to5Z(){
     let animation3 = gsap.timeline();
     animation3 .set(svg, {ease: "none",      x:0})
         .to(svg, 1,{ease: "none",   x:120,})
         .to(svg, 1,{ease: "none",   x:180, })
         .to(svg, 1,{ease: "none",   x:235, })
         .to(svg, 1,{ease: "none",   x:270, })
         .to(svg, 0.7,{ease: "none", x:340, })
         .to(svg, 0.5,{ease: "none", x:400, })
         .to(svg, 0.5,{ease: "none", x:470,  })
         .to(svg, 0.5,{ease: "none", x:570,  })
 }
 ///6. krizovatka/ 2 auta / kruhovy objazd ////////////////////////////////////////////////////////////////////////
 function move6(){
     let animation4 = gsap.timeline();
     animation4 .set(svg, {ease: "none",      x:0, })
         .to(svg, 1,{ease: "none",   x:100})
         .to(svg, 0.5,{ease: "none", x:150, y:"+=30",  rotation:"30_short"})
         .to(svg, 0.5,{ease: "none", x:200, y:"+=40", rotation:"45_short"})
         .to(svg, 0.5,{ease: "none", x:250, y:"+=50",  rotation:"50_short"})
         .to(svg, 0.5,{ease: "none", x:300, y:"+=55", rotation:"40_short"})
         .to(svg, 0.5,{ease: "none", x:350, y:"+=40",  rotation:"30_short"})
         .to(svg, 0.5,{ease: "none", x:400, y:"+=30", rotation:"20_short"})
         .to(svg, 0.5,{ease: "none", x:450, y:"+=20",  rotation:"10_short"})
         .to(svg, 0.5,{ease: "none", x:500, y:"+=10"})
         .to(svg, 0.5,{ease: "none", x:550, y:"+=20",  rotation:"10_short"})
         .to(svg, 0.5,{ease: "none", x:600, y:"+=10"})
 }
 function move6z() {
     let animation4 = gsap.timeline();
     animation4.set(svgz, {ease: "none", y: 0,})
         .to(svgz, 1, {ease: "none", y: -100,x: "-=10", rotation: "-20_short"})
         .to(svgz, 0.5, {ease: "none", y: -150, x: "-=30", rotation: "-30_short"})
         .to(svgz, 0.5, {ease: "none", y: -200, x: "-=40", rotation: "-45_short"})
         .to(svgz, 0.5, {ease: "none", y: -250, x: "-=50", rotation: "-50_short"})
         .to(svgz, 0.5, {ease: "none", y: -300, x: "-=55", rotation: "-60_short"})
         .to(svgz, 0.5, {ease: "none", y: -320, x: "-=60", rotation: "-70_short"})
         .to(svgz, 0.5, {ease: "none", y: -320, x: "-=70", rotation: "-80_short"})
         .to(svgz, 0.5, {ease: "none", y: -320, x: "-=80", rotation: "-90_short"})
         .to(svgz, 0.5, {ease: "none", y: -300, x: "-=90", rotation: "-100_short"})
         .to(svgz, 0.5, {ease: "none", y: -270, x: "-=80", rotation: "-110_short"})
         .to(svgz, 0.5, {ease: "none", y: -240, x: "-=70", rotation: "-130_short"})
         .to(svgz, 0.5, {ease: "none", y: -200, x: "-=60", rotation: "-140_short"})
 }