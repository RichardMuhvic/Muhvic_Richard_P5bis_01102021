let str = window.location.href;
let url = new URL(str);
let product = url.searchParams.get("id");
console.log(product);

fetch("http://localhost:3000/api/products/" + product)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
        productSelected(data)
    });


function productSelected(items) {

    //récupération de l'image :
    let blockImage = document.querySelector('.item__img');
    blockImage.innerHTML = `<img src=${items.imageUrl} alt=${items.altTxt}>`;

    //récupération du titre :
    let blockTitle = document.getElementById('title');
    blockTitle.innerHTML = `<h1 id="title">${items.name}</h1>`;

    //récupération du prix :
    let blockPrice = document.getElementById('price');
    blockPrice.innerHTML = `<span id="price">${items.price}</span>€</p>`;

    //récupération de la description :
    //<p id="description"><!-- Dis enim malesuada risus sapien gravida nulla nisl arcu. --></p>
    let blockDescription = document.getElementById('description');
    blockDescription.innerHTML = `<p id="description">${items.description}</p>`;

    //récupération des couleurs :
    let blockColors = items.colors
    for(let color of blockColors ) {
        let optionColor = document.createElement("option");
        optionColor.value = color;
        optionColor.innerText = color;
        document.getElementById("colors").appendChild(optionColor);
    };
    console.log(blockColors)
    
};


