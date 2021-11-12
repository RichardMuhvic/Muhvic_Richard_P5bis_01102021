
let str = window.location.href;
let url = new URL(str);
let product = url.searchParams.get("id");
console.log(product);