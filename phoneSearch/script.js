let searchText = '13';

function searchHandler(isShowAll = false) {
    loading(true);
    const searchField = document.getElementById("searchField");
    searchText = searchField.value;
    loadPhone(searchText, isShowAll);
}

const loading = (isLoading) => {
    const loadingElement = document.getElementById("loading");
    if (isLoading) {
        loadingElement.classList.remove('hidden');
    } else {
        loadingElement.classList.add('hidden');
    }
}


const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones, isShowAll);
}

// Function to display the phone cards
const displayPhones = (phones, isShowAll) => {
    const phoneContainer = document.getElementById("phone-container");
    phoneContainer.textContent = '';

    const showAll = document.getElementById("showALLBtn");
    if (phones.length > 12 && !isShowAll) {
        showAll.classList.add('hidden');
    } else {
        showAll.classList.add('show');
    }

    if (!isShowAll) {
        phones = phones.slice(0, 12);
    }

    phones.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.classList.add('card');
        phoneCard.innerHTML = `
            <figure class="phone-card-image">
            <img src="${phone.image}" alt="${phone.phone_name}" class="phone-image" />
            </figure>
            <div class="phone-card-body">
                <h2 class="phone-card-title">${phone.phone_name}</h2>
                <p class="phone-card-description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                <div class="phone-card-actions">
                    <button onclick="showDetailsHandler('${phone.slug}')" class="show-details-btn">Show Details</button>
                </div>
            </div>`
        ;
        phoneContainer.appendChild(phoneCard);
    });

    loading(false);
}

// Function to handle the "Show All" button click
function showBtn() {
    searchHandler(true);
}

// Function to show phone details in a modal
const showDetailsHandler = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone = data.data;
    showPhoneDetails(phone);
}

// Function to display phone details in a modal
const showPhoneDetails = (details) => {
    const modal = document.getElementById('my_modal');
    const modalOverlay = document.getElementById('modalOverlay');

    const modelName = document.getElementById('detailsPhoneName');
    const brandName = document.getElementById('detailsBrand');
    const detailsSpec = document.getElementById('detailsSpec');
    const releaseDate = document.getElementById('releaseDate');
    const imageDiv = document.getElementById('imgContainer');

    imageDiv.innerHTML = `<img src="${details.image}" alt="${details.name}">`;
    modelName.innerText = details.name;
    brandName.innerText = `Brand: ${details.brand}`;

    const features = details.mainFeatures;
    let featureDetails = "";
    for (const key in features) {
        featureDetails += `${key}: ${features[key]}\n`;
    }
    detailsSpec.innerText = featureDetails;

    releaseDate.innerText = details.releaseDate ? details.releaseDate : 'Release Date Not Available';

    modal.classList.add('show');
    modalOverlay.classList.add('show');

    const closeModal = () => {
        modal.classList.remove('show');
        modalOverlay.classList.remove('show');
    }

    document.querySelector('.modal-close').onclick = closeModal;
    modalOverlay.onclick = closeModal;
}

// Load phones on page load with a default search text
loadPhone(searchText);
