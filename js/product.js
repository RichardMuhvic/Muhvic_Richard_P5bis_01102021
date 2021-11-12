
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
    console.log(blockImage);

    //récupération du titre :
    let blockTitle = document.getElementById('title');
    blockTitle.innerHTML = `<h1 id="title">${items.name}</h1>`;
    console.log(blockTitle)

    //récupération du prix :
    let blockPrice = document.getElementById('price');
    blockPrice.innerHTML = `<span id="price">${items.price}</span>€</p>`;
    console.log(blockPrice)

    //récupération de la description :
    //<p id="description"><!-- Dis enim malesuada risus sapien gravida nulla nisl arcu. --></p>
    let blockDescription = document.getElementById('description');
    blockDescription.innerHTML = `<p id="description">${items.description}</p>`;
    console.log(blockDescription)

    //récupération des couleurs :
    //<select name="color-select" id="colors">
        //<option value="">--SVP, choisissez une couleur --</option>
            //<option value="vert">vert</option>
        //<option value="blanc">blanc</option> -->
    //</select>
};


