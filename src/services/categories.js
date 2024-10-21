import { categoriaActiva } from "../../main";
import { handleGetProductOfLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../view/store";

const handleFilterProductsByCategory = (categoryIn) => {
    const products = handleGetProductOfLocalStorage();

    switch (categoryIn) {
        case categoriaActiva:
            handleRenderList(products);
            break;
        case "Todo":
            handleRenderList(products);
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result = products.filter((el) => el.categoria === categoryIn);
            handleRenderList(result);
            break;
        default:
            break;
        case "mayorPrecio":
            const resultMayorPrecio = products.sort((a, b) => b.precio - a.precio);
            handleRenderList(resultMayorPrecio);
            break;
        case "menorPrecio":
            const resultMenorPrecio = products.sort((a, b) => a.precio - b.precio);
            handleRenderList(resultMenorPrecio);
            break;
    }
}

export const renderCategories = () => {

    const ulList = document.getElementById("listFilter");
    ulList.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="mayorPrecio">Mayor Precio</li>
    <li id="menorPrecio">Menor Precio</li>
    `;

    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((liElement) => {
        liElement.addEventListener('click', () => {
            handleClick(liElement);
        })
    })

    const handleClick = (element) => {
        handleFilterProductsByCategory(element.id);
        liElements.forEach((el) => {
            if (el.classList.contains('liActive')) {
                el.classList.remove('liActive');
            } else {
                if (element === el) {
                    el.classList.add('liActive');
                }
            }
        })
    }
}