
const cookiCreate = () => {
    var cokBox = document.querySelector(".cookieBox")
    var cokbtn = document.querySelector(".btn");

    cokbtn.onclick = function() {
        cokBox.classList.toggle("hide");
    }
}
cookiCreate();


var tl = gsap.timeline({defauts: {ease: "Power1.out"}});

tl.to(".cookieBox", { opacity: 1, x: "2rem", duration: 1, stagger: .25,})