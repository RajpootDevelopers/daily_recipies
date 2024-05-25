const navigationBar = document.querySelector(".navigationBar")
let clicked = false;
navigationBar.children[0].children[3].addEventListener("click", () => {
    if (clicked === false) {
        clicked = true;
        navigationBar.children[1].classList.add("navigationBarMobileView")
    } else if (clicked === true) {
        clicked = false;
        navigationBar.children[1].classList.remove("navigationBarMobileView")
    }
})
const video = document.querySelector(".video")

const videoSection = document.querySelector(".videoSection")

let videoOpen = false;

video.children[0].children[1].addEventListener("click", () => {
    video.style.display = "flex"
}, true)
video.addEventListener("click", () => [
    video.style.display = "none",
    video.children[0].children[1].pause()
], true)

videoSection.children[0].children[0].addEventListener("click", () => {
    video.style.display = "flex"
})

video.children[0].children[0].addEventListener("click", () => {
    video.style.display = "none",
        video.children[0].children[1].pause();
})