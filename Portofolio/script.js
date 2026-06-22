// DARK MODE

const darkBtn = document.getElementById("darkMode");

darkBtn.onclick = () => {
    document.body.classList.toggle("dark");
};

// ANIMASI SCROLL

const fadeElements = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {

    fadeElements.forEach((el) => {

        const position = el.getBoundingClientRect().top;

        const screen = window.innerHeight;

        if(position < screen - 100){
            el.classList.add("show");
        }

    });

});