let keyy = document.getElementById("key");
let code = document.getElementById("code");

let c = document.getElementsByClassName("c");


document.addEventListener("keydown",function(e){
    let key = e.key;
    let keyCode = e.keyCode;
    console.log(key);
    console.log(keyCode);

    keyy.innerHTML = `You  Clicked : ${key}`;
    keyy.style.fontSize = "22px" ;
    code.innerHTML = `keyCode of ${key} is : ${keyCode} `;
    code.style.fontSize = "26px"
})