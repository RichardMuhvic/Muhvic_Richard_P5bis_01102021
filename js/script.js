fetch("http://localhost:3000/api/products")
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);
        product(data);
    });


function product(item) {
    for(let i=0; i<item.length; i++) {
        console.log(item[i]);

        document.querySelector("#items").innerHTML += 
        `<a href="./product.html?id=${item[i]._id}">
            <article>
                <img src=${item[i].imageUrl} alt=${item[i].altTxt}>
                <h3 class="productName">${item[i].name}</h3>
                <p class="productDescription">${item[i].description}</p>
            </article>
        </a>`;  
    };
};