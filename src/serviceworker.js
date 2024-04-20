// !serviceWorker have three lifecycle

// ! step-1 Registration

// ? check serviceworker support or no your browser

const serviceworker = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", (e) => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log(
            "ServiceWorker register successfully:",
            registration.scope
          );
        })
        .catch((err) => {
          console.log("Service worker failed :" + err.message);
        });
    });
  } else {
    console.log("Service worker is not support your browser.");
  }
};
export default serviceworker;
