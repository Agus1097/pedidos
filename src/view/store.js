/* === STORE === */

import { setProductoActivo } from "../../main";
import { handleGetProductOfLocalStorage } from "../persistence/localStorage";
import { openModal } from "./modal";

export const handleGetProductsToStore = () => {
    const products = handleGetProductOfLocalStorage();

    handleRenderList(products);
}

export const handleRenderList = (productsIn) => {
    const burguers = productsIn.filter((el) => el.categoria === "Hamburguesas");
    const papas = productsIn.filter((el) => el.categoria === "Papas");
    const gaseosas = productsIn.filter((el) => el.categoria === "Gaseosas");

    const renderProductGroup = (products, title) => {
        if (products.length > 0) {
            const productsHTML = products.map((products, index) => {
                return `<div class='containerTargetItem' id='product-${products.categoria}-${index}'>
                <div>
                <img src='${products.imagen}' />
                </div>
                <div>
                <h2>${products.nombre}</h2>
                </div>
                <div class='targetProps'>
                <p><b>Precio:</b> $ ${products.precio}</p>
                </div>
                </div>`
            });

            return `
            <section class='sectionStore'>
            <div class='containerTitleSection'>
            <h3>${title}</h3>
            </div>
            <div class='containerProductStore'>${productsHTML.join("")}</div>
            </section>
            `
        } else {
            return "";
        }
    };

    /* === RENDER PRODUCT FOR CATEGORY === */
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
    ${renderProductGroup(burguers, "Hamburguesas")}
    ${renderProductGroup(papas, "Papas")}
    ${renderProductGroup(gaseosas, "Gaseosas")}
    `;

    const addEvents = (productsIn) => {
        productsIn.forEach((element, index) => {
            const productCointainer = document.getElementById(
                `product-${element.categoria}-${index}`)
            productCointainer.addEventListener('click', () => {
                setProductoActivo(element);
                openModal();
            })
        });
    }

    addEvents(burguers);
    addEvents(papas);
    addEvents(gaseosas);
}