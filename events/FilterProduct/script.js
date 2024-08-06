let categoryFilter = document.getElementById("category-filter");
let productList = document.getElementById("product-list");

console.log(categoryFilter, productList);

categoryFilter.addEventListener('change', function(){
    let selectCategory = categoryFilter.value;
    console.log(selectCategory);

    let products = productList.querySelectorAll(".product");
    console.log(products);

    products.forEach(function(product){
        let productAttribute = product.getAttribute('data-category');
        console.log(productAttribute);

        if(selectCategory === productAttribute || selectCategory == 'all'){
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    })
})

