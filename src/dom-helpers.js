export const renderProducts = (products) => {
    const productsList = document.querySelector('#products-list');
    const productCount = document.querySelector('#product-count');

    productCount.textContent = products.length;

    productsList.replaceChildren();

    products.forEach((product) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const productTitleH3 = document.createElement('h3');
        const priceP = document.createElement('p');

        li.dataset.id = product.id;

        img.src = product.thumbnail;
        img.alt = product.title;

        productTitleH3.textContent = product.title;
        priceP.textContent = product.price;

        li.append(img, productTitleH3, priceP);
        productsList.append(li);
    })
};


export const renderProductDetails = (product) => {
    const productsDetails = document.querySelector('#product-details');
    const img = document.querySelector('#product-thumbnail');
    const productTitleH2 = document.querySelector('#product-title');
    const productPriceP = document.querySelector('#product-price');
    const productDescriptionP = document.querySelector('#product-description');
    const productRatingP = document.querySelector('#product-rating');

    productsDetails.classList.remove('hidden');

    productTitleH2.textContent = product.title;
    img.src = product.thumbnail;
    img.alt = product.title;
    productPriceP.textContent = product.price;
    productDescriptionP.textContent = product.description;
    productRatingP.textContent = product.rating;
};
