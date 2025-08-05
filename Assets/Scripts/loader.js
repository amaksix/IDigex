const preloader = document.getElementById("preloader");
const preloaderCounter = document.getElementById("preloader-counter");
const mainContent = document.querySelector(".page-wrapper");

function runPreloader() {
  if (!mainContent || !preloader || !preloaderCounter) {
    console.error("Missing required DOM elements.");
    return;
  }

  let counter = 0;
  const duration = 2000;
  const interval = 20;
  const increment = 100 / (duration / interval);

  // Immediately show "0"
  preloaderCounter.textContent = "0%";

  // Start counter interval
  const counterInterval = setInterval(() => {
    counter += increment;
    const rounded = Math.floor(counter);

    preloaderCounter.textContent = rounded+'%';

    if (counter >= 100) {
      clearInterval(counterInterval);

      preloader.style.transition = "opacity 0.5s ease";
      preloader.style.opacity = 0;

      setTimeout(() => {
        preloader.style.display = "none";

        mainContent.style.visibility = "visible";
        mainContent.style.opacity = 1;
      }, 500);
    }
  }, interval);
}

window.addEventListener("load", runPreloader);
