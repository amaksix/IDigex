window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
    console.log(loader);
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });