import { getProductById, getProducts, searchProducts } from "./fetch-helpers.js";
import { renderProductDetails, renderProducts } from "./dom-helpers.js";
const productsList = document.querySelector('#products-list');
const errorMessage = document.querySelector('#error-message');
const searchForm = document.querySelector('#search-form');


getProducts()
    .then(result => {
        if(result.error){
            errorMessage.textContent = result.error.message;
            return;
        }
        errorMessage.textContent = '';
        renderProducts(result.data);
    })


productsList.addEventListener('click', (event) => {
    const clickedProduct = event.target.closest('li');
    if (!clickedProduct) return;

    const productId = clickedProduct.dataset.id;

    getProductById(productId).then(result => {

        if (result.error) {
            document.querySelector('#error-message').textContent = result.error.message;
            return;
        }

        document.querySelector('#error-message').textContent = '';

        renderProductDetails(result.data);

    });
});

searchForm.addEventListener('submit', async (event) => {

    event.preventDefault();

    const formData = new FormData(searchForm);
    const query = formData.get('query');

    const result = await searchProducts(query);

    if (result.error) {
        errorMessage.textContent = result.error.message;
        return;
    }

    errorMessage.textContent = '';

    renderProducts(result.data);

    searchForm.reset();
});