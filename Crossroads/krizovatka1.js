 let svg = document.querySelector("#svg2");
// var linijaDevelopment = document.querySelector(".linija-development");

function move(){
    let animation = gsap.timeline();
    animation .set(svg, {ease: "none",     x:0})
        .to(svg, 1,{ease: "none", x:100})
        .to(svg, 1,{ease: "none", x:180, y:"-=20",  rotation:"-20_short"})
        .to(svg, 0.8,{ease: "none", x:220, y:"-=60",  rotation:"-40_short"})
        .to(svg, 0.7,{ease: "none", x:300, y:"-120",  rotation:"-80_short"})
        .to(svg, 0.7,{ease: "none",               x:330, y:"-=180", rotation:"-90_short"})
        .to(svg, 0.8,{ease: "none",                      y:"-=220"})
        .to(svg, 1,{ease: "none",                      y:"-=250"});
}

