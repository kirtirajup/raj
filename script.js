let pannel = document.querySelector(".navSlideBox");
let pannelButton = document.querySelector("#slideOpen");

pannelButton.addEventListener('click' , ()=> {
    if(pannel.style.left == '4px') {
        pannel.style.left = '-265px';
        pannelButton.innerText = ">>>>";
    }
    else {
        pannel.style.left = '4px';
        pannelButton.innerText = '<<<<';
    }
})

// let image = document.querySelector(".myImage");
// let buttonForHover = document.querySelectorAll(".infoButton");

// buttonForHover.addEventListener("mouseover" , ()=> {
//     image.style.border = "2px solid black";
// })