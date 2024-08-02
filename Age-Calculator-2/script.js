let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

let years = document.getElementById("years");
let months = document.getElementById("months");
let days = document.getElementById("days");

let ageCalculate = document.getElementById("calculate");

ageCalculate.addEventListener("click", () => {
    let birthdate = new Date(userInput.value);
    if (!isNaN(birthdate)) {
        let today = new Date();

        let currAge = today.getFullYear() - birthdate.getFullYear();
        let currMonth = today.getMonth() - birthdate.getMonth();
        let currDay = today.getDate() - birthdate.getDate();

        
        if (currMonth < 0 || (currMonth === 0 && currDay < 0)) {
            currAge--;
        }

        if (currMonth < 0) {
            currMonth += 12;
        }

        const daysInMonth = (year, month) => {
            return new Date(year, month, 0).getDate();
        };

        if (currDay < 0) {
            currMonth--;
            if (currMonth < 0) {
                currMonth += 12;
            }
            currDay += daysInMonth(today.getFullYear(), today.getMonth());
        }

        years.innerHTML = currAge;
        months.innerHTML = currMonth;
        days.innerHTML = currDay;
    }
});
