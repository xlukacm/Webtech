 let svg = document.querySelector(".radsej_neotvaraj");
// var linijaDevelopment = document.querySelector(".linija-development");

let animation = gsap.timeline();
animation .set(svg, {duration: 0, ease: "none", x:0})
    .to(svg, 1,{duration: 0, ease: "none",x:100})
    .to(svg, 1,{duration: 0, ease: "none",x:200})
    .to(svg, 1,{duration: 0, ease: "none",x:300, rotation:"-45_short"})
    .to(svg, 1,{ease: "none", x:360, rotation:"-70_short"})
    .to(svg, 1,{ease: "none", y:"-=160", rotation:"-90_short"})
    .to(svg, 1,{ease: "none", y:"-=190"})
    .to(svg, 1,{ease: "none", y:"-=220"});