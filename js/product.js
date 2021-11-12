
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
    });


function name(params) {
    //<div class="item__img">
    //<img src="../images/logo.png" alt="Photographie d'un canapé"> -->
    //</div>
    let blockImage = document.getElementsByClassName('item_img');
    blockImage.innerHTML = `<img src="${}" alt="${}">`

    //<h1 id="title"><!-- Nom du produit --></h1>


    //<span id="price"><!-- 42 --></span>


    //<p id="description"><!-- Dis enim malesuada risus sapien gravida nulla nisl arcu. --></p>


    //<select name="color-select" id="colors">
        //<option value="">--SVP, choisissez une couleur --</option>
            //<option value="vert">vert</option>
        //<option value="blanc">blanc</option> -->
    //</select>
};


