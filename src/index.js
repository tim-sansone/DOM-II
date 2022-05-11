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
    alert("Are you having fun yet?!?!?! You'd better be....or ELSE");
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

const subTitles = document.querySelectorAll("h2");
subTitles.forEach(each => {
    each.addEventListener("dblclick", () => {
        each.textContent = "You're a fast clicker!";
    })
})

/* -------------------- #6 & 7 -------------------------*/
function toText(event){
    const newText = document.createElement("textarea");
    newText.textContent = event.target.textContent;
    newText.style.width = "300px";
    newText.style.height = "200px";
    newText.addEventListener("dblclick", toParagraph);
    newText.addEventListener("select", selector);
    event.target.replaceWith(newText);
}

function toParagraph (event){
    const newP = document.createElement('p');
    newP.textContent = event.target.value;
    newP.addEventListener("dblclick", toText);
    newP.addEventListener("wheel", () => {
        newP.style.color = random();
        })
    event.target.replaceWith(newP);
}

allParagraphs.forEach(each => {
    each.addEventListener("dblclick", toText);
})

/* -------------------- #8 -------------------------*/

function selector(e) {
    const selection = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd);
    alert(`You seem to be really interested in:

    ${selection}

    ....why is that?
    `);
}
