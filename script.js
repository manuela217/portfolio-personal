// Esperar a que cargue el DOM antes de buscar el botón
document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("BotonCopiar");
    const correo = document.getElementById("correo");
  
    boton.addEventListener("click", () => {
      navigator.clipboard.writeText(correo.innerText)
        .then(() => {
          const elementoMensaje = document.getElementById("msgCopy");
          elementoMensaje.innerHTML = `Correo copiado <span class="tick">✔</span>`;
          
        })
        .catch(err => {
          console.error("Error al copiar: ", err);
        });
    });
  });