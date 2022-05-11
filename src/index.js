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
    // headerTitle.style.color = "red";
    // headerTitle.style.fontSize = "10rem";
})

