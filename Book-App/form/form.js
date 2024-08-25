// Toggle between Sign Up and Sign In forms
function toggleForms() {
    document.getElementById('sign-up-form').classList.toggle('hidden');
    document.getElementById('sign-in-form').classList.toggle('hidden');
}

// Sign Up function
function signUp() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (name && email && password) {
        // Store user data in localStorage
        const user = { name, email, password };
        localStorage.setItem('user', JSON.stringify(user));
        alert('Sign Up Successful! Please Sign In.');
        toggleForms();
    } else {
        alert('Please fill in all fields.');
    }
}

// Sign In function
function signIn() {
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    // Retrieve user data from localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
        alert(`Welcome back, ${user.name}!`);
        document.getElementById('redirect-link').classList.remove('hidden'); // Show the "Go to Book App" button
    } else {
        alert('Incorrect email or password. Please try again.');
    }
}

let themeToggle = document.getElementById("switch");
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    }
});