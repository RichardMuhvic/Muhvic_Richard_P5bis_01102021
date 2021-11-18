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

//Ajout au panier :
let addCard = document.querySelector('#addToCart')
addCard.addEventListener("click", function(event) {
    event.preventDefault();
})
console.log(addCard)
//Création des variables : 
let productTitle = document.getElementById("title").innerText;
let productImage = document.querySelector(".item__img").src;
let productPrice = document.getElementById("price").innerText;
let productQuantity = document.getElementById("quantity").value;
let productColors = document.getElementById("colors").value; 

//Création de l'objet à rajouter au panier :
let objectBasket = {
    product,
    productImage,
    productTitle,
    productQuantity,
    productColors,
};

let basket = [];
//envoyer le produit dans le localstorage :
let productLocalStorage = JSON.parse(localStorage.getItem("objectBasket"))

function productChecked(productLocalstorage, basket) {
    const object = productLocalstorage.find(e => e.id === basket.rpoduct && e.productColors === basket.productColors);
    if (object) {
        const n = parseInt(object.productQuantity);
        const m = parseInt(basket.productQuantity);
        object.productQuantity = (n + m).toString();
    }
    else {
        productLocalstorage.push(basket)
    }

    return productLocalstorage;
};


