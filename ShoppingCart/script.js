let container2 = document.querySelector(".container-2").children;
let cart1 = document.getElementById("cart1");
let cart2 = document.getElementById("cart2");
let check = true;

const products = [
    { id: 1, name: "Product-1", price: 100 },
    { id: 2, name: "Product-2", price: 200 },
    { id: 3, name: "Product-3", price: 300 },
];
const total = [0, 0, 0];

document.querySelectorAll(".products").forEach(function (ele, index) {
    ele.innerHTML = `<span>${products[index].name}</span> <span>${products[index].price}</span> <div> <button class="button-">-</button> <span id="${products[index].id}">0</span> <button class="button+">+</button> </div>`;
});

function displayCart() {
    document.querySelectorAll(".products").forEach(function (ele, index) {
        ele.addEventListener("click", function (e) {
            let value = `${products[index].id}`;
            let quantity = parseInt(document.getElementById(value).innerText);

            if (e.target.classList.contains("button-")) {
                if (quantity > 0) {
                    quantity -= 1;
                    document.getElementById(value).innerText = `${quantity}`;
                    total[index] -= products[index].price;
                    check = false;
                } else {
                    quantity = 0;
                    document.getElementById(value).innerText = `${quantity}`;
                }
                buttonClick(quantity, index);
            } else if (e.target.classList.contains("button+")) {
                quantity += 1;
                document.getElementById(value).innerText = `${quantity}`;
                total[index] += products[index].price;
                check = true;
                buttonClick(quantity, index);
            }

            console.log(total);

            let sum = total.reduce((acc, val) => acc + val, 0);
            if (sum === 0) {
                cart1.style.display = "none";
                cart2.style.display = "none";
                container2[1].style.display = "block";
            } else {
                container2[1].style.display = "none";
                cart1.style.display = "flex";
                cart2.style.display = "flex";
                document.getElementById("total").innerText = `${sum}`;
            }
        });
    });
}

function buttonClick(quantity, index) {
    let t = `class${products[index].id}`;
    let element = document.getElementById(t);

    if (quantity === 0) {
        if (element) {
            element.parentElement.remove();
        }
    } else if (quantity === 1 && check) {
        if (!element) {
            cart1.innerHTML += `<div class="cartarea1"><span>${products[index].name}</span> <span id="${t}">${quantity} * ${products[index].price}</span></div>`;
        }
    } else if (quantity > 1 || !check) {
        if (element) {
            element.innerText = `${quantity} * ${products[index].price}`;
        }
    }
}

displayCart();
