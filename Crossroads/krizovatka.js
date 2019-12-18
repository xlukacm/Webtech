 let svg = document.querySelector("#svg2");
// var linijaDevelopment = document.querySelector(".linija-development");

function moveZ(){
    let animation = gsap.timeline();
    animation .set(svg, {ease: "none",       x:0})
        .to(svg, 1,{ease: "none",   x:100})
        .to(svg, 1,{ease: "none",   x:180, y:"-=20",  rotation:"-20_short"})
        .to(svg, 0.8,{ease: "none", x:220, y:"-=60",  rotation:"-40_short"})
        .to(svg, 0.7,{ease: "none", x:300, y:"-120",  rotation:"-80_short"})
        .to(svg, 0.7,{ease: "none",               x:330, y:"-=180", rotation:"-90_short"})
        .to(svg, 0.8,{ease: "none",                      y:"-=220"})
        .to(svg, 1,{ease: "none",                        y:"-=250"});
}

 function move1Z(){
     let animation2 = gsap.timeline();
     animation2 .set(svg, {ease: "none",      x:0})
         .to(svg, 1,{ease: "none",   x:100,})
         .to(svg, 1,{ease: "none",   x:180, y:"+=20",  rotation:"40_short"})
         .to(svg, 0.8,{ease: "none", x:220, y:"+=60",  rotation:"70_short"})
         .to(svg, 0.7,{ease: "none", x:230, y:"+=120", rotation:"90_short"})
         .to(svg, 0.7,{ease: "none", x:230,               y:"+=180"})
         .to(svg, 0.8,{ease: "none", x:230,               y:"+=220"})
         .to(svg, 1,{ease: "none",   x:230,               y:"+=250"});
 }

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