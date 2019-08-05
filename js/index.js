//1 - dblclick
const sandImg = document.querySelector(".home img");
sandImg.addEventListener("dblclick", (event) => sandImg.style.border = "2px solid green");

//2 mouseenter
const nav = document.querySelector(".main-navigation");
nav.addEventListener("mouseenter", (event) => nav.style.background = "red");
//3 mouseleave
nav.addEventListener("mouseleave", (event) => nav.style.background = "white");

//4 scroll
window.addEventListener("scroll", (event) => document.querySelector("body").style.color = "red");

//5,6 mouserover mouseout
const introP = document.querySelector(".intro p");
console.log(introP);
introP.addEventListener("mouseover", (event) => introP.style.fontWeight = "900");
introP.addEventListener("mouseout", (event) => introP.style.fontWeight = "normal");

//7 mouseup
document.querySelector("img").addEventListener("mouseup", (event) => {
console.log(event);
event.target.style.width = "50%"}
);

//8 mousedown
document.querySelector("img").addEventListener("mousedown", event => {
    event.target.style.width = "100%";
})

//9 copy
document.querySelector("p").addEventListener("copy", e => 
{console.log(e);
alert("Are you sure you want to copy that?");
});

//10 cut
document.querySelector("p").addEventListener("cut", e => alert("Are you sure you want to cut that?"));

//stop propogation example
document.querySelector(".intro p").addEventListener("click", e => {
    console.log(e);
    alert("oh the paragraph was clicked, but this won't count as the header being clicked");
    e.stopPropagation();
});

document.querySelector("header.intro").addEventListener("click", e => alert("header was clicked"));


//stop the nav links from refreshing the page
document.querySelectorAll("nav a").forEach(item => {
    item.addEventListener("click", e => {
        e.target.style.color = "pink";
        e.preventDefault();
    })
})