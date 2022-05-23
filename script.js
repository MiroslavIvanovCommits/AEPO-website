// Hover effects of carousel arrows
let previousArrow = document.querySelector(".carousel-previous-arrow");
let nextArrow = document.querySelector(".carousel-next-arrow");

previousArrow.addEventListener("mouseover", changeHoverPreviousImg);
nextArrow.addEventListener("mouseover", changeHoverNextImg);
previousArrow.addEventListener("mouseout", changeNormalPreviousImg);
nextArrow.addEventListener("mouseout", changeNormalNextImg);

function changeHoverPreviousImg(event) {
    event.target.src = "./Resources/nav_btn_hover.svg"
    event.target.style = "transform: scale(-1,1)"
}

function changeHoverNextImg(event) {
    event.target.src = "./Resources/nav_btn_hover.svg"
    event.target.style = "transform: scale(1,1)"
}

function changeNormalPreviousImg(event) {
    event.target.src = "./Resources/nav_btn.svg"
    event.target.style = "transform: scale(1,1)"
}

function changeNormalNextImg(event) {
    event.target.src = "./Resources/nav_btn.svg"
    event.target.style = "transform: scale(-1,1)"
}

// Hover effects of article images
let articleImages = document.querySelectorAll(".latest-article");
articleImages.forEach(image => image.addEventListener("mouseover", showTextBlock));
articleImages.forEach(image => image.addEventListener("mouseout", hideTextBlock));

function showTextBlock(event) {
    let hiddenElement = event.target.parentElement.querySelector("div > div");
    hiddenElement.classList.remove("hidden");
    let textBlock = event.target.parentElement.querySelector(".article-text-block");
    textBlock.style.bottom = "20%";
}

function hideTextBlock(event) {
    let hiddenElement = event.target.parentElement.querySelector("div > div");
    hiddenElement.classList.add("hidden");
    let textBlock = event.target.parentElement.querySelector(".article-text-block");
    textBlock.style.bottom = "46%";
}

// Responsive Navbar
function sandwichMenu() {
    let x = document.getElementById("header-nav-list");
    let menuButton = document.getElementById("menuButton");
    if (x.className === "header-nav-list") {
      x.className += " responsive";
      menuButton.style.position = "relative";
      menuButton.style.top= "-190px";
    } else {
      x.className = "header-nav-list";
      menuButton.style.position = "static";
    }
}