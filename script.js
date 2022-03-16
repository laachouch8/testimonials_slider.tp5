let next = document.querySelector(".slider .images .key .next");
let perv = document.querySelector(".slider .images .key .prev");

let profileTanya = document.querySelector(".slider .profile.tanya");
let profileJhon = document.querySelector(".slider .profile.jhon");

let texTanya = document.querySelector(".slider .text.tanya");
let textJhon = document.querySelector(".slider .text.jhon");

next.onclick = function () {
    profileTanya.classList.add("close");
    texTanya.classList.add("close");

    profileJhon.classList.remove("close");
    profileJhon.classList.add("animate");
    textJhon.classList.remove("close");
    textJhon.classList.add("animate");
}

perv.onclick = function () {
    profileJhon.classList.add("close");
    textJhon.classList.add("close");

    profileTanya.classList.remove("close");
    profileTanya.classList.add("animate");
    texTanya.classList.add("animate");
    texTanya.classList.remove("close");
}