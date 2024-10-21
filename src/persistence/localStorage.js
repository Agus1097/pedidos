/*==== LOCAL STORAGE ===*/

/*==== GET PRODUCT LOCAL STORAGE ===*/
export const handleGetProductOfLocalStorage = () => {

    const products = JSON.parse(localStorage.getItem("products"));

    return products ? products : [];
}

/*==== SAVE PRODUCT LOCAL STORAGE ===*/
export const setInLocalStorage = (productIn) => {
    let productsInLocal = handleGetProductOfLocalStorage();
    const existingIndex = productsInLocal.findIndex((productsLocal) =>
        productsLocal.id === productIn.id
    )

    if (existingIndex !== -1) {
        productsInLocal[existingIndex] = productIn;
    } else {
        productsInLocal.push(productIn);
    }

    localStorage.setItem("products", JSON.stringify(productsInLocal));
}
