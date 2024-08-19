document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("realTimeTextarea");
    const savingIndicator = document.getElementById("savingIndicator");

    // Load saved text from localStorage
    const savedText = localStorage.getItem("realTimeText");
    if (savedText) {
        textarea.value = savedText;
    }

    let saveTimeout;

    // Save text to localStorage in real-time
    textarea.addEventListener("input", () => {
        // Show the "Saving..." text
        savingIndicator.style.display = "block";

        // Clear the previous timeout if it exists
        clearTimeout(saveTimeout);

        // Set a timeout to simulate saving delay
        saveTimeout = setTimeout(() => {
            localStorage.setItem("realTimeText", textarea.value);
            // Hide the "Saving..." text after saving
            savingIndicator.style.display = "none";
        }, 500); // Adjust delay as needed
    });
});
