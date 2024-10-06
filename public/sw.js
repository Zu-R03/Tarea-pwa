self.addEventListener("install", (event) => {
  //console.log(event)

  caches.open("appShell1").then((cache) => {
    cache.addAll([
      "/index.html",
      "/src/components/Login.js",
      "/src/components/Login.css",
      "/src/components/Register.js",
      "/src/components/Register.css",
      "/src/assets/error.jpg",
      "/src/assets/register-image.jpg",
      "/src/app.js",
      "/src/app.css",
      "./public/sw.js",
    ]);
  });
  self.skipWaiting(); //activar el SW
});

self.addEventListener("activate", (event) => {
  caches.delete("appShell6");
  //eliminar cache viejita
});

self.addEventListener("fetch", (event) => {
  //console.log(event.request.url);

  // Filtrar solicitudes que provienen de extensiones o esquemas no soportados
  const url = new URL(event.request.url);
  if (
    url.protocol === "chrome-extension:" ||
    (url.protocol !== "http:" && url.protocol !== "https:")
  ) {
    return; // Ignorar solicitudes de esquemas no soportados
  }

  const resp = fetch(event.request)
    .then((respuesta) => {
      if (!respuesta) {
        // Si la respuesta no existe, buscamos en el cache
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          } else {
            // Si no está en el cache, retornamos una imagen de error desde el cache
            return caches.match("/src/assets/error.jpg"); // Ruta de la imagen de error en cache
          }
        });
      } else {
        // Si la respuesta existe, la almacenamos en el cache dinámico
        return caches.open("dinamico").then((cache) => {
          cache.put(event.request, respuesta.clone());
          return respuesta;
        });
      }
    })
    .catch((err) => {
      // Si ocurre un error (por ejemplo, si no hay conexión), buscamos en el cache
      return caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        } else {
          // Si no está en el cache, retornamos la imagen de error
          return caches.match("/public/img/error.jpg");
        }
      });
    });

  event.respondWith(resp);
});
