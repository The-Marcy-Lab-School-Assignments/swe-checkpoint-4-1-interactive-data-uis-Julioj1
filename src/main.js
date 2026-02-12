import { getProducts } from "./fetch-helpers";
import { renderProducts } from "./dom-helpers";

getProducts()
    .then(result => {
        if(result.error){
            console.error(result.error.message);
            return;
        }
        renderProducts(result.data);
    })