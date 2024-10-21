import { renderCategories } from "./src/services/categories";
import { handleSearchProductByName } from "./src/services/searchBart";
import { openModal } from "./src/view/modal";
import { handleGetProductsToStore } from "./src/view/store";
import "./style.css";

/* ==== APPLICATION ===*/
export let categoriaActiva = null;

export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn;
}

export let productoActivo = null;

export const setProductoActivo = (productoIn) => {
    productoActivo = productoIn;
}

handleGetProductsToStore();
renderCategories();

/* ==== HEADER ===*/

const buttonAdd = document.getElementById('buttonAddElement');
buttonAdd.addEventListener('click', () => {
    openModal();
})

/* ==== BUTTON SEARCH ===*/
const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener("click", () => {
    handleSearchProductByName();
})
