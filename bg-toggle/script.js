let body = document.querySelector(".container");
let message = document.querySelector("#dark");
let circle = document.querySelector("#circle");
let btn = document.getElementById("btn")

btn.addEventListener("click", function() {
    lightAndDarkMode();
});

function lightAndDarkMode() {
    if (body.classList.contains('light-mode')) {
        circle.classList.remove("moveLeft");
        circle.classList.add("moveRight");
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        message.textContent = 'Light Mode';
        btn.style.backgroundColor = "#000"
        circle.style.backgroundColor = '#84cf2f';
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        message.textContent = 'Dark Mode';
        circle.classList.remove("moveRight");
        circle.classList.add("moveLeft");
        btn.style.backgroundColor = "#fff"
        circle.style.backgroundColor = '#e0dede';
    }
}

lightAndDarkMode();
