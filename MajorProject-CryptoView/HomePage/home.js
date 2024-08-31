async function getTrendingCoins() {
    let response = await fetch('https://api.coingecko.com/api/v3/search/trending');
    let data = await response.json();
    console.log(data);
    addData(data);
}

let coinsContainer = document.getElementById("coins");

function addData(coinData) {
    coinsContainer.innerHTML = "";
    coinData.coins.forEach(coinDta => {
        let coinLogo = coinDta.item.small;
        let coinName = coinDta.item.name;
        let coinSymbol = coinDta.item.symbol;
        let priceINR = coinDta.item.price_btc * 100; // Simulated value for price in INR

        // Formatting price to 4 decimal places and adding INR symbol
        priceINR = `₹ ${priceINR.toFixed(4)}`;

        let coinsDiv = document.createElement("div");
        coinsDiv.classList.add("coin-card");

        const coinItem = `
            <img src="${coinLogo}" alt="coin-logo">
            <div class="infoDiv">
                <h3>${coinName} <span>(${coinSymbol})</span></h3>
                <p>${priceINR}</p>
            </div>
        `;
        coinsDiv.innerHTML = coinItem;
        coinsContainer.appendChild(coinsDiv);
    });
}

getTrendingCoins();
