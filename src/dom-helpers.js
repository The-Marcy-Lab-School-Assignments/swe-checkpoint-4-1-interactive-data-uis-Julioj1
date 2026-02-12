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

};
