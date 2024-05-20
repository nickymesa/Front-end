document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-validation');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const codigoProducto = document.querySelector('input[placeholder="Código Producto"]').value;
        const nombreProducto = document.querySelector('input[placeholder="Ingrese Nombre Producto"]').value;
        const descripcion = document.querySelector('input[placeholder="Ingrese Descripción Producto"]').value;
        const categoria = document.querySelector('input[placeholder="Ingrese Categoría Producto"]').value;
        const ubicacion = document.querySelector('input[placeholder="Ingrese Ubicación Producto"]').value;
        const proveedor = document.querySelector('input[placeholder="Ingrese Proveedor Producto"]').value;

        await saveProduct(codigoProducto, nombreProducto, descripcion, categoria, ubicacion, proveedor);
    });

    const saveProduct = async (codigoProducto, nombreProducto, descripcion, categoria, ubicacion, proveedor) => {
        const url = "http://localhost:9998/api/saveProduct";
        const data = {
            codigo: codigoProducto,
            nombre: nombreProducto,
            descripcion: descripcion,
            categoria: categoria,
            ubicacion: ubicacion,
            proveedor: proveedor
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
