// Función para encriptar el texto
function encriptar() {
  // Obtiene el valor del área de texto con id "text"
  let texto = document.getElementById("text").value;
  // Obtiene el elemento con id "muneco" para ocultarlo o mostrarlo
  let muneco = document.getElementById("muneco");
  // Patrón para buscar letras mayúsculas (A-Z)
  let patron = /A-Z/g;

  // Reemplaza las vocales con sus equivalentes encriptados
  let encriptaTexto = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  // Verifica si el área de texto no está vacía
  if (document.getElementById("text").value != "") {
    // Oculta el "muneco" y actualiza el contenido de otros elementos
    muneco.style.display = "none";
    document.getElementById("mensajeTexto").textContent = "";
    document.getElementById("parrafo").textContent = "";
    document.getElementById("mensaje").value = encriptaTexto;
    mensaje.style.cssText = 'height 60%; display: block';
    btnCopiar.style.display = "block";
    document.getElementById("text").value = "";
  } else {
    // Muestra el "muneco" y muestra mensajes de advertencia
    muneco.style.display = "block";
    document.getElementById("mensajeTexto").textContent = "Ningún mensaje fue encontrado";
    document.getElementById("parrafo").textContent = "Ingresa el texto de deseas encriptar o desencriptar";
    mensaje.style.cssText = 'height 60%; display: none';
    btnCopiar.style.display = "none";

    alert("No has ingresado ningun texto");
  }
}

// Función para desencriptar el texto
function desencriptar() {
  // Obtiene el valor del área de texto con id "text"
  let texto = document.getElementById("text").value;

  // Reemplaza los equivalentes encriptados con sus vocales originales
  let encriptaTexto = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  // Verifica si el área de texto no está vacía
  if (document.getElementById("text").value.length != 0) {
    // Oculta el "muneco" y actualiza el contenido de otros elementos
    muneco.style.display = "none";
    document.getElementById("mensajeTexto").textContent = "";
    document.getElementById("parrafo").textContent = "";
    document.getElementById("mensaje").value = encriptaTexto;
    mensaje.style.cssText = 'height 60%; display: block';
    document.getElementById("text").value = "";
  }
}

// Función para copiar el texto encriptado al portapapeles
function copiar() {
  // Selecciona el contenido del elemento "mensaje"
  mensaje.select();
  // Copia el texto al portapapeles
  navigator.clipboard.writeText(mensaje.value).then(() => {
    alert("Copiado Exitosamente");
  }).catch(() => {
    alert("Error al copiar");
  });
  // Limpia el contenido del área de texto "mensaje"
  document.getElementById("mensaje").value = "";
}
