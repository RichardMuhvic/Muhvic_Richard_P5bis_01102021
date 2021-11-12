
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

