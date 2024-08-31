const form = document.getElementById("searchForm");

form.addEventListener("submit", async (e) =>{
    // console.log(e);
    e.preventDefault();

    let inputValue = document.getElementById("inputValue");
    let searchBtn = document.getElementById("searchCoin");
    let coinContainer = document.getElementById("coin-container");

    let res = await fetch(`https://api.coingecko.com/api/v3/search?query=${inputValue.value}`);

    let data = await res.json();
    console.log(data);

    coinContainer.innerHTML = " ";

    data.coins.forEach((coin, index) => {
        

        let div = document.createElement("div");
        div.classList.add("coins");

        div.innerHTML = `
        <div class= "coinCard"
        <span>${index + 1}</span>
        <img src="${coin.thumb}" alt="Crypto Thumbnail">
        <h3>${coin.name}</h3>
        <h3>${coin.symbol}</h3>
        </div>
        <button onclick="onMoreInfoClick('${coin.id}')">More Info</button>
        `;
        coinContainer.appendChild(div);
    });

})


