let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let country = document.getElementById("country");
let score = document.getElementById("score");
let addBtn = document.querySelector("button");
let section2 = document.getElementById("section2");

let data = [];

function activeButtons() {
    document.querySelectorAll(".displayData").forEach((ele, index) => {
        ele.addEventListener("click", (e) => {
            if (e.target.classList.contains("delete")) {
                data.splice(index, 1);
                updateData();
            } else if (e.target.classList.contains("plus")) {
                data[index].score = parseInt(data[index].score) + 5;
                updateData(false);
            } else if (e.target.classList.contains("minus")) {
                data[index].score = parseInt(data[index].score) - 5;
                updateData(false);
            }
        });
    });
}

function updateData(isNewPlayer = true) {
    data.sort((p1, p2) => {
        return p2.score - p1.score;
    });

    let showData = "";
    data.forEach((item, index) => {
        showData += `
            <div class="displayData ${isNewPlayer ? 'new' : ''}">
                <span>${item.fname}</span>
                <span>${item.lname}</span>
                <span>${item.country}</span>
                <span>${item.score}</span>
                <button class="delete">X</button>
                <button class="plus">+5</button>
                <button class="minus">-5</button>
            </div>
        `;
    });
    section2.innerHTML = showData;
    activeButtons();

    if (isNewPlayer) {
        document.querySelectorAll('.displayData.new').forEach(element => {
            element.addEventListener('animationend', () => {
                element.classList.remove('new');
            });
        });
    }
}

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (fname.value === "" || lname.value === "" || country.value === "" || score.value === "") {
        alert("Please fill all the fields in the form");
    } else {
        data.push({
            fname: fname.value,
            lname: lname.value,
            country: country.value,
            score: parseInt(score.value)
        });

        updateData();

        fname.value = "";
        lname.value = "";
        country.value = "";
        score.value = "";
    }
});
