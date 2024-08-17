let jokeButton = document.getElementById("btn");
let dad_jokes = document.getElementById("joke");

async function fetchJoke() {

    dad_jokes.textContent = "Loading...";
    dad_jokes.classList.add("show");

    let response = await fetch("https://icanhazdadjoke.com", {
        headers: {
            Accept: "application/json",
        },
    });

    let joke = await response.json();
    setTimeout(() => {
        updateUI(joke);
    }, 1000); 
}

function updateUI(data) {
    dad_jokes.textContent = data.joke;
    
}

jokeButton.addEventListener("click", fetchJoke);
