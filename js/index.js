
const cookiCreate = () => {
    var cokBox = document.querySelector(".cookieBox")
    var cokbtn = document.querySelector(".btn");

    cokbtn.onclick = function() {
        cokBox.classList.toggle("hide");
    }
}
cookiCreate();
