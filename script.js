// Obtener el formulario y escuchar el evento submit
const formulario = document.getElementById('registroForm');
formulario.addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar que el formulario se envíe de forma tradicional

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;

    // Crear un objeto con los datos del formulario
    const data = {
        nombre,
        apellido,
        fechaNacimiento
    };

    // Realizar la solicitud POST utilizando fetch
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // Mostrar una alerta cuando los datos se envíen correctamente
        alert('Tus datos fueron enviados correctamente!');
        console.log('Respuesta del servidor:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
