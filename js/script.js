// 1-Récupérer les donnes de l'API avec fetch :
fetch("http://localhost:3000/api/products")
    .then( function(res) {
        return res.json();
    })
    .then(function(value) {
        console.log(value);
        product[i];
    });

// 2-Faire une boucle "for" :
for(let i=0; i<product.length; i++) {
    console.log(product[i]);

    //Intégrer un nouvel élément au DOM :
    let element = document.querySelector("#items")
    element.innerHTML = 
    `<a href="./product.html?id=42">
        <article>
            <img src="${product[i].imageUrl}" alt="${product[i].altTxt}">
            <h3 class="productName">${product[i].name}</h3>
            <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
        </article>
    </a>`;

};
