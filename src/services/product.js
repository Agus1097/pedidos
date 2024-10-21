import Swal from "sweetalert2";
import { productoActivo } from "../../main";
import { handleGetProductOfLocalStorage, setInLocalStorage } from "../persistence/localStorage";
import { closeModal } from "../view/modal";
import { handleGetProductsToStore, handleRenderList } from "../view/store";

/* ==== PRODUCTS ===*/

/* ==== SAVE OR MODIFY FUNCTION ===*/

export const handleSaveOrModifyElements = () => {
    const nombre = document.getElementById('nombre').value,
        imagen = document.getElementById('img').value,
        precio = document.getElementById('precio').value,
        categoria = document.getElementById('categoria').value;

    let object = null;
    if (productoActivo) {
        object = {
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categoria
        }
    } else {
        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categoria
        }
    }

    Swal.fire({
        title: "!Correcto!",
        text: "!Producto guardado correctamente!",
        icon: "success"
      });

    setInLocalStorage(object);
    handleGetProductsToStore();
    closeModal();
}

/* ==== DELETE FUNCTION ===*/

export const handleDeleteProduct = () => {

    Swal.fire({
        title: "¿Desea eliminar elemento?",
        text: "Si lo eliminas sera permanente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar"
    }).then((result) => {
        if (result.isConfirmed) {

            const products = handleGetProductOfLocalStorage();
            const result = products.filter((el) => el.id !== productoActivo.id);
            localStorage.setItem("products", JSON.stringify(result));
            const newProducts = handleGetProductOfLocalStorage();
            handleRenderList(newProducts);
            closeModal();

            Swal.fire({
                title: "!Eliminado!",
                text: "El elemento ha sido eliminado",
                icon: "success"
            });
        }
    });
}