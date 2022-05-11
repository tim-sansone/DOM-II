import './less/index.less'


/* -------------------- #1 -------------------------*/

const navLinks = document.querySelectorAll(".nav-link");
// console.log(nav);

navLinks.forEach(each => {
    each.addEventListener("mouseover", () => {
        each.style.color = "white"
    })
    each.addEventListener("mouseout", () => {
        each.style.color = "#212529";
    })
})

/* -------------------- #2 -------------------------*/

const headerTitle = document.querySelector("header h1");

headerTitle.addEventListener("click", () => {
   headerTitle.classList.toggle("big-red");
})

/* -------------------- #3 -------------------------*/

document.addEventListener("keydown", () => {
    alert("Are you having fun yet?!");
})

/* -------------------- #4 -------------------------*/

function random() {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const color = `rgb(${red}, ${green}, ${blue})`
    return color;
}

const allParagraphs = document.querySelectorAll("p");

document.addEventListener("wheel", () => {
    allParagraphs.forEach(each => {each.style.color = random()})
})

/* -------------------- #5 -------------------------*/
