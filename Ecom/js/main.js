document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("productContainer");
    const searchInput = document.getElementById("searchInput");
    const minPrice = document.getElementById("minPrice");
    const maxPrice = document.getElementById("maxPrice");
    let allProducts = [];
  
    
    const res = await fetch("https://fakestoreapi.com/products");
    allProducts = await res.json();
    displayProducts(allProducts);
    
  
    searchInput.addEventListener("input", applyFilters);
    minPrice.addEventListener("input", applyFilters);
    maxPrice.addEventListener("input", applyFilters);
  
    function applyFilters() {
      const query = searchInput.value.toLowerCase();
      const min = parseFloat(minPrice.value) || 0;
      const max = parseFloat(maxPrice.value) || Infinity;
      const filtered = allProducts.filter(product =>
        (product.title.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)) &&
        product.price >= min &&
        product.price <= max
      );
      displayProducts(filtered);
    }
  
    function displayProducts(products) {
      container.innerHTML = "";
      products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
          <img src="${product.image}" alt="${product.title}" />
          <h4>${product.title}</h4>
          <p>$${product.price}</p>
          <button onclick='likeProduct(${JSON.stringify(product)})'> Like❤️</button>
          <button onclick='viewProduct(${product.id})'>View Details</button>
        `;
        container.appendChild(card);
      });
    }
  
    window.likeProduct = (product) => {
      let liked = JSON.parse(localStorage.getItem("likedProducts")) || [];
      if (!liked.some(p => p.id === product.id)) {
        liked.push(product);
        localStorage.setItem("likedProducts", JSON.stringify(liked));
      }
    };
  
    window.viewProduct = (id) => {
      window.location.href = `product.html?id=${id}`;
    };
  
    window.goToLiked = () => {
      window.location.href = "liked.html";
    };
  
    window.logout = () => {
      localStorage.removeItem("loggedInUser");
      window.location.href = "login.html";
    };
  });
  