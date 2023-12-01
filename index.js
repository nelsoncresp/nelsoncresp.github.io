function cambiarPagina(ruta) {
    // Utilizar fetch para cargar el contenido de la página de forma asíncrona
    fetch(ruta)
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        // Limpiar el contenido actual del contenedor
        document.getElementById("contenido").innerHTML = "";
  
        // Crear un elemento div temporal para cargar el contenido HTML
        var tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
  
        // Agregar el contenido del div temporal al contenedor principal
        document.getElementById("contenido").appendChild(tempDiv);
      })
      .catch(function (error) {
        console.warn("Error al cargar la página:", error);
      });
  }
  
  