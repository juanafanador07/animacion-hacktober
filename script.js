const elems = document.querySelectorAll(".figure__elem");
const timeGrow = 1.5;
const timeColor = 3;
elems.forEach((elem, i) => {
    let col = i % 5;
    let row = Math.trunc(i / 5);
    let delay = (Math.abs(4 - col) - row - 4) * .1;
    elem.style.animation = 
        `grow ${timeGrow}s ${delay * timeGrow}s linear alternate-reverse infinite,
         color ${timeColor}s ${delay * timeColor}s linear infinite`;
})