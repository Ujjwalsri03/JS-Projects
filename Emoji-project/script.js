let inputTxt = document.getElementById("search");
let category = document.getElementById("category");
let emojiUI = document.getElementById("display");

category.addEventListener("click", (e) => {
    let categoryBtn = e.target.closest(".category-btn");

    if (categoryBtn) {
        e.preventDefault();
        let filteredData = categoryBtn.getAttribute("data-category");
        filterFunction(filteredData);
    }
});

function filterFunction(value) {
    let filteredData;
    if (value.toLowerCase() === "all") {
        filteredData = emojiData;
    } else {
        filteredData = emojiData.filter(e => {
            if (e.description.toLowerCase().includes(value.toLowerCase())) {
                return true;
            }
            if (e.aliases.some(alias => alias.toLowerCase().startsWith(value.toLowerCase()))) {
                return true;
            }
            if (e.tags.some(tag => tag.toLowerCase().startsWith(value.toLowerCase()))) {
                return true;
            }
            return false;
        });
    }

    displayEmojiOnUI(filteredData);
}

function displayEmojiOnUI(value = emojiData) {
    emojiUI.innerHTML = "";  // Clear the existing emojis

    value.forEach(e => {
        let newEmojiContainer = document.createElement("div");
        let emoji_box = document.createElement("span");

        emoji_box.style.width = "50px";
        emoji_box.style.fontSize = "50px";
        emoji_box.innerText = e.emoji;
        emoji_box.classList.add('animate__animated', 'animate__backInDown');
        emoji_box.style.cursor = "pointer";

        emojiUI.append(emoji_box);
    });
}

window.addEventListener("load", () => {
    displayEmojiOnUI(emojiData);
});

inputTxt.addEventListener('keyup', (event) => {
    filterFunction(event.target.value);
});

emojiUI.addEventListener("click", (e) => {
    navigator.clipboard.writeText(e.target.innerText);
    alert("Copied to clipboard");
});
