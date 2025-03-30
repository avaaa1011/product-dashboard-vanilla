//task 2: implementing fetch products 
function fetchProductsThen() 
{
    fetch("https://www.course-api.com/javascript-store-products")
    .then(async (response) => 
    {
        if (!response.ok)
        {throw new Error(`HTTP error: ${response.status}`); }
        return await response.json();
    })
    .then((products) => 
    {
            console.log("Products fetched with .then():");
            products.forEach((product) => {
            console.log(product.fields.name); });
     })
    .catch((error) => 
    {
        console.error("Error fetching products:", error);  
    });
}
fetchProductsThen();

//task 3: fetching products with async/await 
async function fetchProductsAsync() 
{ 
    try 
    { 
        const response = await fetch('https://www.course-api.com/javascript-store-products'); 
        if(!response.ok)
        {
            throw new Error("HTTP error: ${response.status}"); 
        }
        const products = await response.json();
        displayProducts(products);
    }
    catch(error)     
    {
        console.error("Error fetching products:", error.message);
        handleError(error);
    }
}
fetchProductsAsync();

//task 4: displaying products 
function displayProducts(products)
{
    const container = document.getElementById("product-container");
    container.innerHTML = "";
    products.slice(0,5).forEach((product) => 
    {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h3>${product.fields.name}</h3>
            <p>Price: $${product.fields.price}</p>
            <img src="${product.fields.image.url}" alt="${product.fields.name}">`;
        container.appendChild(productElement);
    });
}

//task 5: reusable error handler
function handleError(error)
{
    const container = document.getElementById("product-container");
    container.innerHTML = `<p class="error">Error: ${error.message}</p>`;
}
