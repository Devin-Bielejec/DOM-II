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




//modified from mdn -giving up on this drag drop stuff
const middleImg = document.querySelector("#first");
const middleImg2 = document.querySelector("#second");
[middleImg, middleImg2].forEach(item => 
{
    item.setAttribute("draggable", true);
    item.setAttribute("ondragstart","drag(event)");
})

const middleImgDiv = middleImg.parentNode;
middleImgDiv.id = "middleImg";
const middleImg2Div = middleImg2.parentNode;
middleImg2Div.id = "middleImg2";
[middleImgDiv, middleImg2Div].forEach(item => {
    item.setAttribute("ondrop", "drop(event)");
    item.setAttribute("ondragover", "drag(event)");
})


function drag(e){
    e.dataTransfer.setData("text", e.target.id);
}

function allowDrop(e){
    e.preventDefault();
}

function drop(e){
    e.preventDefault();
    const data = e.dataTransfer.getData("text")
    e.target.appendChild(document.getElementById(data));
}

