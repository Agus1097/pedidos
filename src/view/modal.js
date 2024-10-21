import { productoActivo, setProductoActivo } from "../../main";
import { handleDeleteProduct, handleSaveOrModifyElements } from "../services/product";

/* ==== POPUP ===*/

/* ==== ACCEPT FUNCTION ===*/

const acceptButton = document.getElementById('acceptButton');
acceptButton.addEventListener('click', () => {
    handleSaveOrModifyElements();
})

/* ==== CANCEL FUNCTION ===*/

const buttonCancel = document.getElementById('cancelButton');
buttonCancel.addEventListener('click', () => {
    handleCancelButton();
})

const handleCancelButton = () => {
    closeModal();
}

/* ==== OPEN FUNCTION ===*/

export const openModal = () => {
    const modal = document.getElementById('modalPopUp');
    modal.style.display = "flex";

    const buttonDelete = document.getElementById("deleteButton");

    if (productoActivo) {
        buttonDelete.style.display = "block";
    } else {
        buttonDelete.style.display = "none";
    }

    if (productoActivo) {
        const nombre = document.getElementById('nombre'),
            imagen = document.getElementById('img'),
            precio = document.getElementById('precio'),
            categoria = document.getElementById('categoria');

        nombre.value = productoActivo.nombre;
        imagen.value = productoActivo.imagen;
        precio.value = productoActivo.precio;
        categoria.value = productoActivo.categoria;
    }
}

/* ==== CLOSE FUNCTION ===*/

export const closeModal = () => {
    const modal = document.getElementById('modalPopUp');
    modal.style.display = "none";
    setProductoActivo(null);
    resetModal();
}

/* ==== RESET FUNCTION ===*/

const resetModal = () => {
    const nombre = document.getElementById('nombre'),
        imagen = document.getElementById('img'),
        precio = document.getElementById('precio'),
        categoria = document.getElementById('categoria');

    nombre.value = "";
    imagen.value = "";
    precio.value = 0;
    categoria.value = "Seleccione una categoría";
}

/* ==== DELETE FUNCTION ===*/

const deleteButton = document.getElementById('deleteButton');
deleteButton.addEventListener('click', () => {
    handleDeleteButton();
})

const handleDeleteButton = () => {
    handleDeleteProduct();
} 