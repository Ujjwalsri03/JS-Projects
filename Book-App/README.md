# 📚 Book App

## 📖 Project Description
The **Book App** is a web application that allows users to browse books, view details, and switch between dark and light modes. Users can also sign up or log in to access more features. This project was built using HTML, CSS, and JavaScript. It consumes a book API to fetch book details and category lists.

## ✨ Features
- 🌗 **Dark Mode Toggle**: Switch between light and dark themes.
- 🔐 **User Authentication**: Sign Up and Log In functionality to personalize user experience.
- 📘 **Book Details**: Click on a book to view detailed information.
- 📚 **Dynamic Categories**: Clicking on categories updates the displayed books.
- 📱 **Responsive Design**: Ensures usability on various devices.

## 🚀 Getting Started
Follow these instructions to set up the project locally on your machine.

### 📋 Prerequisites
- Web browser (Google Chrome, Mozilla Firefox, etc.)
- Internet connection
- Git

### 📥 Installation
1. **Clone the repository:**
   ```bash
   git clone https://ujjwalsri03.github.io/JS-Projects/Book-App/

2. **Navigate to the project directory:**
bash
Copy code
cd book-app
Open index.html in your preferred web browser.

## 🎮 Usage

Sign Up/Login: Click on the "Sign Up" or "Log In" buttons to access or create your account.
Toggle Dark Mode: Use the toggle switch in the top right corner to switch between light and dark themes.

Browse Books: Click on a book to view more details about it.
Change Categories: Select different categories to see books under that specific genre.

## 📊 API Reference
The project uses the following APIs:

Top Books API: Fetches the list of top books.

Endpoint: https://books-backend.p.goit.global/books/top-books
Method: GET
Response: JSON array of top books.
Category List API: Fetches a list of book categories.

Endpoint: https://books-backend.p.goit.global/books/category-list
Method: GET
Response: JSON array of book categories.

## 📁 File Structure
graphl
Copy code
book-app/
│
├── index.html                # Main HTML file
├── styles/                   # Folder containing CSS files
│   ├── style.css              # Main stylesheet
│            
│
├── scripts/                  # Folder containing JavaScript files 
│   ├── script.js             # Main JavaScript file Handles category selection and filtering
│   ├── form.js               # Handles sign-up and login functionality
│   ├── books.js              # Handles fetching and displaying book details
│   
│
├── assets/                   # Folder containing image and icon assets
│   ├── images/               # Subfolder for images
│                 
│
└── README.md                 # README file

## 🛠️ JavaScript Functionalities Used

Fetching Data from APIs: Used fetch() to make API requests to get the list of top books and book categories.
Dynamic Content Rendering: JavaScript DOM manipulation is used to dynamically update the book list and categories based on user interaction.
Event Handling: Added event listeners for user interactions like clicking on books, toggling dark mode, and category selection.
Theme Switching (Dark Mode): Implemented a function to toggle between light and dark modes using a switch button.
User Authentication: Basic Sign Up and Log In functionality using form handling in JavaScript.
🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## 📜 License
This project is licensed under the MIT License.

## 🙏 Acknowledgements
API Providers
Geekster for guidance and support.
All contributors and testers who helped with the project.

