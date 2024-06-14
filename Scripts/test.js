window.addEventListener('scroll', () => {
    // Get the current vertical scroll position
    const sideMoving = document.getElementsByClassName("side-moving");
    const scrollPosition = window.scrollY;
  
    sideMoving[0].style.left = `${-scrollPosition}px`;
  });