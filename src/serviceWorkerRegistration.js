// src/serviceWorkerRegistration.js

// Ce fichier enregistre un service worker pour activer le mode hors-ligne et l'installation en PWA

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    window.location.hostname === "[::1]" ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register(config) {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
          // Vérifie si un nouveau SW est dispo
          registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            if (installingWorker) {
              installingWorker.onstatechange = () => {
                if (installingWorker.state === 'installed') {
                  if (navigator.serviceWorker.controller) {
                    // Nouvelle version trouvée → rechargement auto
                    console.log("Nouvelle version dispo, rechargement…");
                    window.location.reload();
                  }
                }
              };
            }
          };
        })
        .catch((error) => {
          console.error('Erreur lors de l’enregistrement du SW :', error);
        });
    });
  }
}

function registerValidSW(swUrl) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      console.log("Service Worker enregistré :", registration);
    })
    .catch((error) => {
      console.error("Erreur Service Worker :", error);
    });
}

function checkValidServiceWorker(swUrl) {
  fetch(swUrl, { headers: { "Service-Worker": "script" } })
    .then((response) => {
      if (
        response.status === 404 ||
        response.headers.get("content-type").indexOf("javascript") === -1
      ) {
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister();
          window.location.reload();
        });
      } else {
        registerValidSW(swUrl);
      }
    })
    .catch(() => {
      console.log("Pas de connexion Internet. Mode hors-ligne.");
    });
}

export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
