document.getElementById('botonReversar').addEventListener('click', function() {
    // Obtener el texto ingresado por el usuario
    var texto = document.getElementById('textoInput').value;
    // Reversar el texto
    var textoReversado = reverseString(texto);
    // Mostrar el texto reversado en pantalla
    document.getElementById('resultado').innerText = textoReversado;
});

// Función para revertir una cadena de texto
function reverseString(str) {
    return str.split('').reverse().join('');
}
