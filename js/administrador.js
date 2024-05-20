document.addEventListener('DOMContentLoaded', function() {
    // Agrega event listeners a los enlaces de la página de administrador
    document.querySelector('a[href="ingresar_productos.html"]').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'ingresar_productos.html';
    });

    document.querySelector('a[href="bajar_producto.html"]').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'bajar_producto.html';
    });
});

// Función para alternar la visibilidad de las opciones
function toggleOptions() {
    var options = document.getElementById('options');
    if (options.style.display === 'block') {
        options.style.display = 'none';
    } else {
        options.style.display = 'block';
    }
}

// Función para enviar datos al backend al agregar un producto
async function saveProduct(codigoProducto, nombreProducto, descripcion, categoria, ubicacion, proveedor) {
    const url = "http://localhost:9998/api/admin";
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
}

// Función para enviar datos al backend al bajar un producto
async function deleteProduct(codigoProducto, nombreProducto, cantidad) {
    const url = "http://localhost:9998/api/admin";
    const data = {
        codigo: codigoProducto,
        nombre: nombreProducto,
        cantidad: cantidad
    };

    try {
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log("Success:", result);
        alert("Producto bajado exitosamente");
    } catch (error) {
        console.error("Error:", error);
        alert("Hubo un error al bajar el producto");
    }
}
