let key = "VbhcC0108-aJwBrtc6QTw58QWCSXvzBu04h6Jh4TqPM"
let box = document.getElementById('box');

let count = 10;
let ready = true;

async function searchImage(){
    let response = await fetch(`https://api.unsplash.com/photos/random/?client_id=${key}&count=${count}`);
    let data = await response.json();

    console.log(data);

    displayphotos(data)

    }    
    
searchImage();

// function displayphotos(data){
    
//     data.forEach(image => {
//         let imgElement = document.createElement('img');
//         imgElement.src = image.urls.small; 
//         imgElement.alt = image.alt_description ;
//         imgElement.loading = "lazy";
//         imgElement.classList.add('image'); 
            
//         box.appendChild(imgElement);
//     });

//     ready = true;
// }

function displayphotos(data) {
    data.forEach(image => {
        let imgWrapper = document.createElement('div');
        imgWrapper.classList.add('img-wrapper');
        
        let imgElement = document.createElement('img');
        imgElement.src = image.urls.small;
        imgElement.alt = image.alt_description;
        imgElement.loading = "lazy";
        imgElement.classList.add('image');
        
        let overlay = document.createElement('div');
        overlay.classList.add('overlay');
        
        let likeButton = document.createElement('button');
        likeButton.classList.add('like-button');
        likeButton.innerHTML = '❤';  

        let saveButton = document.createElement('button');
        saveButton.classList.add('save-button');
        saveButton.innerHTML = '🔖'; 
        overlay.appendChild(likeButton);
        overlay.appendChild(saveButton);
        imgWrapper.appendChild(imgElement);
        imgWrapper.appendChild(overlay);
        
        box.appendChild(imgWrapper);
    });

    ready = true;
}


window.addEventListener("scroll", () => {
    
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 100 && ready) {
        ready = false;
        searchImage();
    }
    
});
