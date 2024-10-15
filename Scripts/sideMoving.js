window.addEventListener('scroll', () => {
    // Get the current vertical scroll position
    const sideMoving = document.getElementsByClassName("side-moving");
    const scrollPosition = window.scrollY;
  
    sideMoving[0].style.left = `${-scrollPosition}px`;
  });
var minScroll = 225;
  window.addEventListener('scroll', () => {
    // Get the current vertical scroll position
    const sideMoving = document.getElementsByClassName("first-shot-header");
    if(window.scrollY > minScroll){

      const scrollPosition = (window.scrollY - minScroll)/8;
    
      sideMoving[0].style.left = `${-scrollPosition}px`;
    }
  });
  window.addEventListener('scroll', function () {
    if(window.scrollY > minScroll){

      const videoContainer = document.getElementById('first-shot-video-container');
    
      // Get the scroll position (y-axis)
      let scrollY = window.scrollY- minScroll;
    
      // Move to the right as you scroll down (increase 'left' with scroll)
      let moveRight = scrollY * 0.10; // Adjust the multiplier to control speed
    
      // Scale down the video as you scroll down (reduce size)
      let scaleFactor = Math.max(1 - scrollY / 4000, 0.5); // Prevent too much shrinking
    
      // Apply the new position and scale
      videoContainer.style.transform = `translateX(${moveRight}px) scale(${scaleFactor})`;
    }
  });