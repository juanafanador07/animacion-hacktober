//Config
let timeColor = 3.0;
let timeGrow = 1.5;

//Animation
function updateAnim(timeGrow, timeColor){
    const elems = document.querySelectorAll(".figure__elem");
    elems.forEach((elem, i) => {
        let col = i % 5;
        let row = Math.trunc(i / 5);
        let delay = (Math.abs(4 - col) - row - 4) * .1;
        elem.style.animation = 
            `grow ${timeGrow}s ${delay * timeGrow}s linear alternate-reverse infinite,
             color ${timeColor}s ${delay * timeColor}s linear infinite`;
    })
}

//Option Panel
const sliders = document.querySelectorAll(".options__input");

sliders.forEach(elem => {
    elem.addEventListener("input", e => {
        timeColor = parseFloat(sliders[0].max) - parseFloat(sliders[0].value) + parseFloat(sliders[0].min);
        timeGrow = parseFloat(sliders[1].max) - parseFloat(sliders[1].value) + parseFloat(sliders[1].min);
        console.log(timeColor, timeGrow)
        updateAnim(timeGrow, timeColor);
    })
})

//Init
updateAnim(timeGrow, timeColor);
sliders[0].value = parseFloat(sliders[0].max) - timeColor + parseFloat(sliders[0].min);
sliders[1].value = parseFloat(sliders[1].max) - timeGrow + parseFloat(sliders[1].min);