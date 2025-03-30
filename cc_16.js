//task 2: implementing fetch products 
function fetchProductsThen() 
{
    fetch("https://www.course-api.com/javascript-store-products") //using fetch() to pull product data from the link
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
    .catch((error) => //using catch() to log errors
    {
        console.error("Error fetching products:", error);  
    });
}

//task 3: fetching products with async/await 
async function fetchProductsAsync() 
{ 
    try //fetching products data from the link 
    { 
        const response = await fetch('https://www.course-api.com/javascript-store-products'); 
        if(!response.ok)
        {
            throw new Error("HTTP error: ${response.status}"); 
        }
        const products = await response.json();
        displayProducts(products); //calling a helper function to render the products onto the page
    }
    catch(error) //if error is found it will be passed onto handleError()
    {
        console.error("Error fetching products:", error.message);
        handleError(error);
    }
}

//task 4: displaying products 
function displayProducts(products)
{
    const container = document.getElementById("product-container"); //selecting product container from style.css
    container.innerHTML = "";
    products.slice(0,5).forEach((product) => 
    {
        const productElement = document.createElement("div"); //creating html elemenmts of each product 
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h3>${product.fields.name}</h3>
            <p>Price: $${product.fields.price}</p>
            <img src="${product.fields.image.url}" alt="${product.fields.name}">`;
        container.appendChild(productElement); //appending to the container 
    });
}

//task 5: reusable error handler
function handleError(error)
{
    const container = document.getElementById("product-container");
    container.innerHTML = `<p class="error">Error: ${error.message}</p>`;
}

//task 6: calling all fetch functions 
fetchProductsThen();
fetchProductsAsync();