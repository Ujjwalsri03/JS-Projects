let plusBtn = document.getElementById("increment");
let minusBtn = document.getElementById("decrement");

let result = document.getElementById("result")

console.log(plusBtn, minusBtn);

let counter = 0;
plusBtn.addEventListener("click", function(){
    counter++;
    result.innerText = counter
});

minusBtn.addEventListener("click", function(){
    if(counter > 0){ 
    counter--;
    result.innerText = counter
    }
});