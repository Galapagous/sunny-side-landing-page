// declearing my variables.
const hamburger = document.querySelector(".hamburger")
const navToggler = document.querySelector(".nav-menu")
//some logics
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navToggler.classList.toggle("active")
  if ("active") {
    navToggler.style.display = "flex"
  }
})

document.querySelectorAll("nav-menu").forEach((n) =>
  n.addEventListener("click", () => {
    navToggler.classList.remove("active")
  })
)
