document.addEventListener("DOMContentLoaded", async () => {
    const productId = new URLSearchParams(window.location.search).get("id");
    const detailContainer = document.getElementById("productDetail");
  
    if (!productId) {
      detailContainer.innerHTML = "<p>Invalid Product ID.</p>";
      return;
    }
  
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const product = await res.json();
  
      detailContainer.innerHTML = `
        <div class="product-detail">
          <img src="${product.image}" alt="${product.title}" />
          <div class="info">
            <h2>${product.title}</h2>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Description:</strong> ${product.description}</p>
            <p><strong>Price:</strong> $${product.price}</p>
          </div>
        </div>
      `;
 
  
  
    window.goBack = function () {
      window.location.href = "index.html";
    };
  
    window.logout = function () {
      localStorage.removeItem("loggedInUser");
      window.location.href = "login.html";
    };
  });
  