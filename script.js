let next = document.querySelector(".slider .images .key .next");
let perv = document.querySelector(".slider .images .key .prev");

let profileTanya = document.querySelector(".slider .profile.tanya");
let profileJhon = document.querySelector(".slider .profile.jhon");

let texTanya = document.querySelector(".slider .text.tanya");
let textJhon = document.querySelector(".slider .text.jhon");

next.onclick = function () {
    profileTanya.classList.toggle("close");
    texTanya.classList.toggle("close");
    profileJhon.classList.toggle("close");
    profileJhon.classList.add("animate");
    textJhon.classList.toggle("close");
    textJhon.classList.add("animate");
}

perv.onclick = function () {
    profileTanya.classList.toggle("close");
    profileJhon.classList.toggle("close");
    textJhon.classList.toggle("close");
    profileTanya.classList.add("animate");
    texTanya.classList.add("animate");
    texTanya.classList.toggle("close");
}