
function calcularPrecio() {
    var codigoRemitente = document.getElementById("postalCodeSender").value;
    var codigoDestinatario = document.getElementById("postalCodeRecipient").value;
    var precioAleatorio = Math.floor(Math.random() *900 + 100); 
  
    var resultadoTexto = document.getElementById("resultadoTexto");
    resultadoTexto.innerHTML = "El precio total del envío es de $" + precioAleatorio;

  }

// Obtener referencias a los elementos de entrada y al botón
var inputRemitente = document.getElementById("postalCodeSender");
var inputDestinatario = document.getElementById("postalCodeRecipient");
var botonCalcular = document.getElementById("botonCalcular");

// Agregar eventos de escucha a los campos de entrada para validar cuando cambien
inputRemitente.addEventListener("input", validarCampos);
inputDestinatario.addEventListener("input", validarCampos);

// Función para validar los campos de entrada
function validarCampos() {
  // Obtener el valor de los campos de entrada
  var valorRemitente = inputRemitente.value;
  var valorDestinatario = inputDestinatario.value;

// Verificar si ambos campos contienen solo números y no son negativos
var esNumeroValidoRemitente = /^\d+$/.test(valorRemitente) && valorRemitente >= 0;
var esNumeroValidoDestinatario = /^\d+$/.test(valorDestinatario) && valorDestinatario >= 0;

// Habilitar o deshabilitar el botón según si ambos campos contienen números válidos
if (esNumeroValidoRemitente && esNumeroValidoDestinatario) {
  botonCalcular.disabled = false;
} else {
  botonCalcular.disabled = true;
}
}

