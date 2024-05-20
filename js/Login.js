const listUsers = async () => {
    const response = await fetch("http://localhost:9998/api/save");
    const users = await response.json();

    let tableBody = ``;
    users.forEach((user, index) => {
        tableBody += `<tr>
        <td class='centered'>${user.username}</td>
        <td class='centered'>${user.password}</td>
        </tr>`;
    });
    // document.getElementById("tableBody_Users").innerHTML = tableBody;
    tableBody_Users.innerHTML = tableBody;
};

window.addEventListener("load", function () {
    listUsers();
});

function savePerson() {
    
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;

   savePersonPost(username, password);
}

const savePersonPost = async (usernameReq, passwordReq) => {

    var url = "http://localhost:9998/api/save";
    var data = { username: usernameReq, password: passwordReq };
    
    fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
};
function registrar() {
    var name = document.getElementById("username").value;
    var password = document.getElementById("password". value);

    $.ajax({
        type: "POST",
        url: "",
        data: {
            method: 'crear',
            usernanme: name,
            password: password,
            
        },
        success: function(res) {
            // Cambia el contenido y estilo del elemento de registro exitoso
            document.getElementById('registroExitoso').style.display = 'block';
            setTimeout(function() {
                document.getElementById('registroExitoso').style.display = 'none';
            }, 3000); // Después de 3 segundos, oculta el mensaje de registro exitoso
        }
    });
}


roleSelect.addEventListener('change', function() {
    // Limpiar todas las alertas al cambiar de rol
    document.getElementById('nombreAlert').textContent = '';
    document.getElementById('passwordAlert').textContent = '';
    document.getElementById('apellidoAlert').textContent = '';
    document.getElementById('edadAlert').textContent = '';
    document.getElementById('ccAlert').textContent = '';

    var selectedOption = roleSelect.options[roleSelect.selectedIndex];
    if (selectedOption.value === 'cliente') {
        additionalFields.classList.remove('hidden');
        passwordFields.classList.add('hidden');

        // Limpiar el mensaje de error al cambiar a rol cliente
        document.getElementById('mensajeError').textContent = '';
    } else {
        additionalFields.classList.add('hidden');
        passwordFields.classList.remove('hidden');
    }
});

// Maneja el evento de envío del formulario
var loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var rol = roleSelect.value;

    // Limpiar el mensaje de error al intentar enviar el formulario nuevamente
    document.getElementById('mensajeError').textContent = '';

 if (rol === 'administrador') {
        if (username.trim() === '' && password.trim() === '') {
            // Mostrar el mensaje de error si ambos campos están vacíos
            document.getElementById('mensajeError').textContent = 'Todos los campos son obligatorios.';
        } else {
            validateSession(username, password);
        }
    } 
});
