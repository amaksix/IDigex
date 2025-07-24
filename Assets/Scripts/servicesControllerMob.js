const tabs = document.querySelectorAll('.tab-mob');
const tabsWrapper = document.querySelector('.tabs-scroll-wrapper-mob');
const sliderContainer = document.getElementById('slider-container-mob');
const sliderTrack = document.getElementById('slider-track-mob');
const slides = document.querySelectorAll('.slide-mob');

let isDragging = false;
let startX = 0;
let currentTranslate = 0;
let previousTranslate = 0;
let animationID;
let currentIndex = 0;

function setActiveTab(index) {
  tabs.forEach(tab => tab.classList.remove('tab-mob-active'));
  tabs[index].classList.add('tab-mob-active');

  // Scroll tab into view if it's out of the visible scroll area
  const tab = tabs[index];
  const wrapperRect = tabsWrapper.getBoundingClientRect();
  const tabRect = tab.getBoundingClientRect();

  if (tabRect.left < wrapperRect.left || tabRect.right > wrapperRect.right) {
    tab.scrollIntoView({ behavior: 'smooth', inline: 'center' });
  }
}

function setSliderPosition(index) {
  const width = sliderContainer.offsetWidth;
  currentTranslate = -index * width;
  previousTranslate = currentTranslate;
  sliderTrack.style.transition = 'transform 0.3s ease';
  sliderTrack.style.transform = `translateX(${currentTranslate}px)`;
  setActiveTab(index);
}

// Tab click
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const index = parseInt(tab.dataset.index);
    currentIndex = index;
    setSliderPosition(currentIndex);
  });
});

// Drag/swipe
sliderTrack.addEventListener('mousedown', startDrag);
sliderTrack.addEventListener('touchstart', startDrag, { passive: true });

sliderTrack.addEventListener('mousemove', drag);
sliderTrack.addEventListener('touchmove', drag, { passive: false });

sliderTrack.addEventListener('mouseup', endDrag);
sliderTrack.addEventListener('mouseleave', () => isDragging && endDrag());
sliderTrack.addEventListener('touchend', endDrag);

function getPositionX(e) {
  return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}

function startDrag(e) {
  isDragging = true;
  startX = getPositionX(e);
  animationID = requestAnimationFrame(animation);
  sliderTrack.style.transition = 'none';
}

function drag(e) {
  if (!isDragging) return;
  const currentX = getPositionX(e);
  const dx = currentX - startX;
  currentTranslate = previousTranslate + dx;
}

function endDrag() {
  cancelAnimationFrame(animationID);
  isDragging = false;

  const movedBy = currentTranslate - previousTranslate;
  const threshold = sliderContainer.offsetWidth / 4;

  if (movedBy < -threshold && currentIndex < slides.length - 1) currentIndex++;
  if (movedBy > threshold && currentIndex > 0) currentIndex--;

  setSliderPosition(currentIndex);
}

function animation() {
  sliderTrack.style.transform = `translateX(${currentTranslate}px)`;
  if (isDragging) requestAnimationFrame(animation);
}

window.addEventListener('resize', () => setSliderPosition(currentIndex));
