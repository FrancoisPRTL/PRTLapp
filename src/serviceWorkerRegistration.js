// serviceWorkerRegistration.js

// Enregistre le service worker et force la mise à jour dès qu'une nouvelle version est dispo
export function register() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("Service Worker enregistré :", registration);

          // Écoute les mises à jour du SW
          registration.onupdatefound = () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.onstatechange = () => {
                if (newWorker.state === "installed") {
                  if (navigator.serviceWorker.controller) {
                    // Une nouvelle version est dispo → on force le refresh
                    console.log("Nouvelle version dispo, rafraîchissement forcé…");
                    window.location.reload();
                  }
                }
              };
            }
          };
        })
        .catch((error) => {
          console.error("Erreur lors de l'enregistrement du Service Worker :", error);
        });
    });
  }
}

// Désenregistrement si besoin (optionnel)
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
