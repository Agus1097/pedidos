import { handleGetProductOfLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../view/store";

export const handleSearchProductByName = () => {

    const inputHeader = document.getElementById("inputHeader");
    const products = handleGetProductOfLocalStorage();

    const result = products.filter((el) =>
        el.nombre.toLowerCase().includes(inputHeader.value.toLowerCase()));

    handleRenderList(result);
}