function agregarContacto() {
    const tabla = document.getElementById("tablaContactos").getElementsByTagName('tbody')[0];
    const fila = tabla.insertRow(0);

    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const numero = document.getElementById("numero").value;
    const email = document.getElementById("email").value;

    fila.insertCell(0).innerText = nombre;
    fila.insertCell(1).innerText = apellidos;
    fila.insertCell(2).innerText = numero;
    fila.insertCell(3).innerText = email;

    // Limpiar campos
    document.getElementById("nombre").value = '';
    document.getElementById("apellidos").value = '';
    document.getElementById("numero").value = '';
    document.getElementById("email").value = '';
}

function filtrarContactos() {
    const textoBusqueda = document.getElementById("busqueda").value.toLowerCase();
    const filas = document.getElementById("tablaContactos").getElementsByTagName("tbody")[0].rows;

    for (let i = 0; i < filas.length; i++) {
        let nombre = filas[i].cells[0].textContent.toLowerCase();
        let numero = filas[i].cells[2].textContent.toLowerCase();
        if (nombre.indexOf(textoBusqueda) > -1 || numero.indexOf(textoBusqueda) > -1) {
            filas[i].style.display = "";
        } else {
            filas[i].style.display = "none";
        }
    }
}

