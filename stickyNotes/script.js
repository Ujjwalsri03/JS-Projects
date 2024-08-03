let btn = document.getElementById("button")
let text = document.getElementById("text_area")
let notes_container = document.getElementById("notes_container")
let color = document.getElementById("color")
let Message =document.getElementById("message")

function addNotes(){
    if(text.value == ""){
        alert("Please Enter Some Text");
        return;
    }

    Message.innerText= "";
    let div = document.createElement("div")
    let p = document.createElement("p")
    let delete_btn = document.createElement("button")

    // console.log(div,p,button)

    div.appendChild(p);
    div.appendChild(delete_btn)

    delete_btn.innerText = "x";
    p.innerText = text.value;

    div.style.backgroundColor = color.value;
    notes_container.appendChild(div)

    console.log(div)

    text.value = "";
    color.value = "black"
    delete_btn.addEventListener("click", function(){
        div.style.display = "none";
    })
}

btn.addEventListener("click",addNotes)