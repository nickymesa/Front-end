document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-validation');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const codigoProducto = document.querySelector('input[placeholder="codigo producto"]').value;
        const nombreProducto = document.querySelector('input[placeholder="ingrese nombre producto"]').value;
        const cantidad = document.querySelector('input[placeholder="ingrese descripcion producto"]').value;

        await saveProduct(codigoProducto, nombreProducto, cantidad);
    });

    const saveProduct = async (codigoProducto, nombreProducto, cantidad) => {
        const url = "http://localhost:9998/api/saveProduct";
        const data = {
            codigo: codigoProducto,
            nombre: nombreProducto,
            cantidad: cantidad
        };

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            console.log("Success:", result);
            alert("Producto guardado exitosamente");
        } catch (error) {
            console.error("Error:", error);
            alert("Hubo un error al guardar el producto");
        }
    };
});
