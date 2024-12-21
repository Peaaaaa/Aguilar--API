document.getElementById('getFactButton').addEventListener('click', function () {
   
    const barcode = document.getElementById('barcode').value.trim();


    const productCode = barcode || "737628064502";


    const url = `https://world.openfoodfacts.org/api/v0/product/${productCode}.json`;


    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.status === 1) {
                const product = data.product;
                const fact = `
                    <strong>Product Name:</strong> ${product.product_name || "Unknown"}<br>
                    <strong>Brand:</strong> ${product.brands || "Unknown"}<br>
                    <strong>Categories:</strong> ${product.categories || "Unknown"}<br>
                    <strong>Ingredients:</strong> ${product.ingredients_text || "Unknown"}<br>
                    <strong>Nutri-Score:</strong> ${product.nutrition_grades || "Unknown"}
                `;
                document.getElementById('fact').innerHTML = fact;
            } else {
                document.getElementById('fact').innerText = "No product found for this barcode.";
            }
        })
        .catch(error => {
            console.error('Error fetching the food fact:', error);
            document.getElementById('fact').innerText = "Sorry, there was an error fetching the food fact.";
        });
});
