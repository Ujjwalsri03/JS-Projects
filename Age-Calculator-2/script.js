let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

let years = document.getElementById("years")
let months = document.getElementById("months")
let days = document.getElementById("days")

let ageCalculate = document.getElementById("calculate");

ageCalculate.addEventListener("click", () => {
    let birthdate = new Date(userInput.value);
    if(!isNaN(birthdate)){
        let today = new Date();

        let currAge = today.getFullYear() - birthdate.getFullYear();

        let Currmonth = today.getMonth() - birthdate.getMonth() + 1;

        if (Currmonth < 0 || ( Currmonth === 0 && today.getDate() < birthdate.getDate())) {
            currAge--;
        }

        if(Currmonth < 0){
            Currmonth += 12;
        }

        let currDay = today.getDate() - birthdate.getDate();


        // console.log(`currAge ${currAge},Currmonth ${Currmonth},currDay${currDay}`);

        years.innerHTML = currAge;
        months.innerHTML = Currmonth;
        days.innerHTML = currDay;
    }
})

