 let svg = document.querySelector("#svg2");
// var linijaDevelopment = document.querySelector(".linija-development");

function move(){
    let animation = gsap.timeline();
    animation .set(svg, {ease: "none",     x:0})
        .to(svg, 1,{ease: "none", x:100})
        .to(svg, 1,{ease: "none", x:200})
        .to(svg, 1,{ease: "none", x:250, y:"-=50",  rotation:"-40_short"})
        .to(svg, 1,{ease: "none", x:330, y:"-100",  rotation:"-80_short"})
        .to(svg, 1,{ease: "none",                      y:"-=160", rotation:"-90_short"})
        .to(svg, 1,{ease: "none",                      y:"-=190"})
        .to(svg, 1,{ease: "none",                      y:"-=220"});
}

