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

      const scrollPosition = window.scrollY/8;
    
      sideMoving[0].style.left = `${-scrollPosition}px`;
  });
  
  window.addEventListener('scroll', function () {
    const videoContainer = document.getElementById('first-shot-video-container');
  
    // Get the scroll position (y-axis)
    let scrollY = window.scrollY;
  
    // Calculate the rotation angle based on scroll position
    let rotationAngle = scrollY * 0.01; // Adjust the multiplier to control the rotation speed
  
    // Apply the rotation transformation
    videoContainer.style.transform = `rotate(${rotationAngle}deg)`;
  });