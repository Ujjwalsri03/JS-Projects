let key = "VbhcC0108-aJwBrtc6QTw58QWCSXvzBu04h6Jh4TqPM"

let form = document.querySelector("form")
let searchInput = document.getElementById("search-input")
let searchBtn = document.getElementById("search")
let searchResults = document.getElementById("results")
let showMoreBtn = document.getElementById("showMore")

let inputData = "";
let page = 1;

async function searchImage(){
    inputData = searchInput.value;
    let response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${key}`);
    let data = await response.json();
    if (page === 1) {
        searchResults.innerHTML = "";
      }
    
    let results = data.results;
    
    results.map((result) => {
    // let imageWrapper = document.createElement("div");
    // imageWrapper.classList.add("search-result");
    let image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    let imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;
    
    searchResults.appendChild(image);
    searchResults.appendChild(imageLink);
    // searchResults.appendChild(imageWrapper);
});
    
    page++;
    
    if (page > 1) {
     showMoreBtn.style.display = "block";
    }
}
    
form.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImage();
});
    
showMoreBtn.addEventListener("click", () => {
    searchImage();
});