document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const userCard = document.getElementById('userCard');
    const themeToggle = document.getElementById('themeToggle');

    // Load user data from local storage
    const loadUserData = () => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData) {
            userCard.innerHTML = `
                <h2>${userData.name}</h2>
                <p>Phone: ${userData.phone}</p>
                <p>Village: ${userData.village}</p>
                <p>City: ${userData.city}</p>
            `;
        }
    };

    // Save user data to local storage
    const saveUserData = (data) => {
        localStorage.setItem('userData', JSON.stringify(data));
    };

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const village = document.getElementById('village').value;
        const city = document.getElementById('city').value;

        const userData = { name, phone, village, city };
        saveUserData(userData);
        loadUserData();
    });

    // Theme toggle
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
        }
    });

    // Initial load
    loadUserData();
});
