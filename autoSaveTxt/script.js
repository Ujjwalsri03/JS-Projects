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
                <p>State: ${userData.state}</p>
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

        let name = document.getElementById('name').value;
        let state = document.getElementById('state').value;
        let phone = document.getElementById('phone').value;
        let village = document.getElementById('village').value;
        let city = document.getElementById('city').value;

        let userData = { name,state, phone, village, city };
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
