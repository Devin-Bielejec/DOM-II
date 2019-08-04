// Your code goes here
const sandImg = document.querySelector(".home img");
sandImg.addEventListener("dblclick", (event) => sandImg.style.border = "2px solid green");

const nav = document.querySelector(".main-navigation");
nav.addEventListener("mouseenter", (event) => nav.style.background = "red");

nav.addEventListener("mouseleave", (event) => nav.style.background = "white");


window.addEventListener("scroll", (event) => document.querySelector("body").style.color = "red");

const introP = document.querySelector(".intro p");
console.log(introP);
introP.addEventListener("mouseover", (event) => introP.style.fontWeight = "900");
introP.addEventListener("mouseout", (event) => introP.style.fontWeight = "normal");

const middleImg1 = document.querySelector("#first");
const middleImg2 = document.querySelector("#second");

