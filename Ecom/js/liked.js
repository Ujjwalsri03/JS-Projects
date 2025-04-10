document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("likedContainer");
  const liked = JSON.parse(localStorage.getItem("likedProducts")) || [];

  if (liked.length === 0) {
    container.innerHTML = '<p style="padding: 1rem;">No liked products yet.</p>';
    return;
  }

  liked.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <h4>${product.title}</h4>
      <p>$${product.price}</p>
      <button onclick='viewProduct(${product.id})'>View Details</button>
    `;
    container.appendChild(card);
  });
});

// ✅ Move these functions outside the DOMContentLoaded callback
function viewProduct(id) {
  window.location.href = `product.html?id=${id}`;
}

function goBack() {
  window.location.href = "index.html";
}

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}

// Optional: define toggleTheme if it’s used
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}
