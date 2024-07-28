let userInput = document.getElementById("date");
    userInput.max = new Date().toISOString().split("T")[0];

    let ageCalculate = document.getElementById("calculate");
    ageCalculate.addEventListener("click", () => {
        let birthdate = new Date(userInput.value);
        if (!isNaN(birthdate)) {
            let today = new Date();
            let age = today.getFullYear() - birthdate.getFullYear();
            let m = today.getMonth() - birthdate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
                age--;
            }

           let resultTxt =  document.getElementById("result")
           resultTxt.innerHTML = `You are ${age} years old.`;
        } else {
            document.getElementById("result").innerHTML = "Please select a valid date.";
        }
    });

