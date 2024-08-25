let bookContainer = document.getElementById("book-list");
let categoryContainer = document.getElementById("category-list");
let heading = document.querySelector(".main-content h1"); // Reference to the <h1> element

// Modal elements
let modal = document.getElementById("bookModal");
let modalTitle = document.getElementById("bookTitle");
let modalAuthor = document.getElementById("bookAuthor");
let modalDescription = document.getElementById("bookDescription");
let modalImage = document.getElementById("bookImage");
let closeModalButton = document.querySelector(".close-button");
let addToShoppingListButton = document.getElementById("addToShoppingList");

// Fetch and display all books initially
async function Books() {
    let response = await fetch('https://books-backend.p.goit.global/books/top-books');
    let result = await response.json();
    console.log(result);
    displayBooks(result);
}

// Fetch category list and display in sidebar
async function listFetch() {
    let fetched = await fetch("https://books-backend.p.goit.global/books/category-list");
    let data = await fetched.json();
    console.log(data);
    displayCategories(data);
}

// Function to display books
function displayBooks(data) {
    bookContainer.innerHTML = ""; // Clear previous books

    data.forEach(listObject => {
        let div = document.createElement("div");
        div.classList.add("Books-display-container");

        let h3 = document.createElement("h3");
        h3.innerHTML = `${listObject.list_name}`;
        div.appendChild(h3);

        let div2 = document.createElement("div");
        div2.classList.add("bookAuthorImages");

        // Display the first 5 book images
        let booksDisplayed = 0;
        listObject.books.forEach((book) => {
            if (book.book_image && booksDisplayed < 5) {

                let div3 = document.createElement("div");
                div3.classList.add("bookAuthor");
                
                let img = document.createElement("img");
                img.src = book.book_image;
                img.alt = `${book.author} - Book Image`;

                let p1 = document.createElement("p");
                p1.classList.add("title");
                p1.innerHTML = `${book.title}`;


                let p2 = document.createElement("p");
                p2.classList.add("author");
                p2.innerHTML = `${book.author}`;

                // Add click event to show book details in modal
                img.addEventListener("click", () => showBookDetails(book));

                div3.appendChild(img);
                div3.appendChild(p1);
                div3.appendChild(p2);
                div2.appendChild(div3)
                div.appendChild(div2);
                booksDisplayed++;
            }
        });

        let showMoreButton = document.createElement("button");
        showMoreButton.innerText = "Show More";
        showMoreButton.classList.add("show-more-button");

        showMoreButton.addEventListener("click", () => {
            let booksDisplayed = div.querySelectorAll("img").length;

            listObject.books.slice(booksDisplayed, booksDisplayed + 10).forEach(book => {
                if (book.book_image) {
                    let img = document.createElement("img");
                    img.src = book.book_image;
                    img.alt = `${book.author} - Book Image`;

                    // Add click event to show book details in modal
                    img.addEventListener("click", () => showBookDetails(book));

                    div.appendChild(img);
                }
            });

            // Hide button if all images are shown
            if (booksDisplayed + 10 >= listObject.books.length) {
                showMoreButton.style.display = "none";
            }
        });

        div.appendChild(showMoreButton);
        bookContainer.appendChild(div);
    });
}

// Function to display categories in sidebar
function displayCategories(categories) {
    categoryContainer.innerHTML = ""; // Clear previous categories

    categories.forEach(category => {
        let categoryItem = document.createElement("li");
        let categoryLink = document.createElement("a");
        categoryLink.href = "#";
        categoryLink.innerText = category.list_name;
        categoryLink.classList.add("category-item");

        // Add click event to each category
        categoryLink.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent the default link click behavior
            filterBooksByCategory(category.list_name);
            updateHeading(category.list_name); // Update the <h1> when a category is clicked
        });

        categoryItem.appendChild(categoryLink);
        categoryContainer.appendChild(categoryItem);
    });
}

// Function to filter and display books by category
async function filterBooksByCategory(categoryName) {
    let response = await fetch('https://books-backend.p.goit.global/books/top-books');
    let result = await response.json();
    
    // Filter books by selected category
    let filteredBooks = result.filter(listObject => listObject.list_name === categoryName);
    displayBooks(filteredBooks);
}

// Function to update the <h1> heading based on the selected category
function updateHeading(categoryName) {
    heading.innerHTML = `Best Sellers: ${categoryName}`; 
}

// Function to show book details in the modal
function showBookDetails(book) {
    modalTitle.innerText = book.title;
    modalAuthor.innerText = book.author;
    modalDescription.innerText = book.description || "There is no description of this book.";
    modalImage.src = book.book_image;
    modal.style.display = "block";
}

closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal when clicking outside of the modal content
window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Theme toggle functionality
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

// Initial fetches
Books(); // Display all books by default
listFetch(); // Display category list in sidebar
