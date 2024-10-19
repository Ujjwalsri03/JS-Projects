const API_KEY = 'QOOBTTY0T6MY1ZF21';
const stockSelect = document.getElementById('stocks');
const searchInput = document.getElementById('stock-search');
const searchButton = document.getElementById('search-stock');
const loadButton = document.getElementById('load-stock');
const compareTable = document.getElementById('compare-stocks').getElementsByTagName('tbody')[0];
let chart; 


async function fetchStockData(stockSymbol) {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&apikey=${API_KEY}`);
    const data = await response.json();
    
    if (data['Error Message']) {
        alert('Invalid stock symbol or no data available.');
        return null;
    }
    
    return data['Time Series (Daily)'] || null; 
}


function updateStockChart(stockSymbol, stockData) {
    const labels = Object.keys(stockData).reverse();
    const prices = labels.map(date => parseFloat(stockData[date]['4. close']));

    if (chart) chart.destroy(); 

    const ctx = document.getElementById('stock-chart').getContext('2d');
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: `${stockSymbol} Price`,
                data: prices,
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false,
                tension: 0.1
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day',
                        tooltipFormat: 'MMM dd, yyyy',
                    },
                    title: {
                        display: true,
                        text: 'Date'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Price'
                    }
                }
            }
        }
    });
}


function updateStockInfo(stockSymbol, stockData) {
    const latestDate = Object.keys(stockData)[0];
    const latestData = stockData[latestDate];

    if (latestData) {
        document.getElementById('stock').innerText = stockSymbol;
        document.getElementById('price').innerText = latestData['4. close'];
        document.getElementById('change').innerText = (parseFloat(latestData['4. close']) - parseFloat(latestData['1. open'])).toFixed(2);
        document.getElementById('volume').innerText = latestData['5. volume'];
        document.getElementById('open').innerText = latestData['1. open'];
        document.getElementById('high').innerText = latestData['2. high'];
        document.getElementById('low').innerText = latestData['3. low'];
        document.getElementById('prev-close').innerText = latestData['4. close'];
    } else {
        alert('No data available for this stock.');
    }
}


function addToComparisonTable(stockSymbol, stockData) {
    const latestDate = Object.keys(stockData)[0];
    const latestData = stockData[latestDate];

    if (latestData) {
        const newRow = compareTable.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);

        cell1.innerText = stockSymbol;
        cell2.innerText = latestData['4. close'];
        cell3.innerText = (parseFloat(latestData['4. close']) - parseFloat(latestData['1. open'])).toFixed(2);
        cell4.innerText = latestData['5. volume'];
    } else {
        alert('No data available for this stock.');
    }
}

// Search button functionality
searchButton.addEventListener('click', async () => {
    const stockSymbol = searchInput.value.toUpperCase();
    if (stockSymbol) {
        const stockData = await fetchStockData(stockSymbol);
        if (stockData) {
            updateStockChart(stockSymbol, stockData);
            updateStockInfo(stockSymbol, stockData);
        }
    } else {
        alert('Please enter a stock symbol.');
    }
});

// Load button functionality for the dropdown menu
loadButton.addEventListener('click', async () => {
    const stockSymbol = stockSelect.value;
    if (stockSymbol) {
        const stockData = await fetchStockData(stockSymbol);
        if (stockData) {
            updateStockChart(stockSymbol, stockData);
            updateStockInfo(stockSymbol, stockData);
            addToComparisonTable(stockSymbol, stockData);
        }
    } else {
        alert('Please select a stock.');
    }
});

// Static list of trending stocks
const trendingStocks = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA', 'FB', 'NFLX', 'NVDA', 'BABA', 'INTC', 'CSCO'];

// Function to populate dropdown with trending stocks
function fetchStockOptions() {
    trendingStocks.forEach(stock => {
        const option = document.createElement('option');
        option.value = stock;
        option.innerText = stock;
        stockSelect.appendChild(option);
    });
}

// Call the function to populate dropdown on page load
fetchStockOptions();

