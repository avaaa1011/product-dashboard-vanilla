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