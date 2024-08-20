// let key = "NE1j5HCLpYTq2LGq3KnQq1DdRpP9S7LkltAHLsHD8co"
let box = document.getElementById('box');

let count = 10;

async function searchImage(){
    let response = await fetch(`https://api.unsplash.com/photos/random/?client_id=${key}&count=${count}`);
    let data = await response.json();

    console.log(data);

    displayphotos(data)

    }    
    
searchImage();

function displayphotos(data){
    
    data.forEach(image => {
        let imgElement = document.createElement('img');
        imgElement.src = image.urls.regular; 
        imgElement.alt = image.alt_description ;
        imgElement.classList.add('image'); 
            
        box.appendChild(imgElement);
    });
}