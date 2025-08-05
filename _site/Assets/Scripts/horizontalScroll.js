document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".scroll-container");
    const scrollTrack = document.querySelector(".custom-scroll-track");
    const scrollThumb = document.querySelector(".custom-scroll-thumb");
    const body = document.body; 

    function updateThumbPosition() {
        let scrollPercent = scrollContainer.scrollLeft / (scrollContainer.scrollWidth - scrollContainer.clientWidth);
        let maxThumbPosition = scrollTrack.clientWidth - scrollThumb.clientWidth;
        scrollThumb.style.left = `${scrollPercent * maxThumbPosition}px`;
    }

    scrollContainer.addEventListener("scroll", updateThumbPosition);

    let isDragging = false;
    let startX, thumbStartLeft;

    scrollThumb.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX;
        thumbStartLeft = parseFloat(scrollThumb.style.left) || 0;
        scrollThumb.style.cursor = "grabbing";
        body.classList.add("no-select");
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;

        let deltaX = e.clientX - startX;
        let maxThumbPosition = scrollTrack.clientWidth - scrollThumb.clientWidth;
        let newLeft = Math.max(0, Math.min(thumbStartLeft + deltaX, maxThumbPosition));

        scrollThumb.style.left = `${newLeft}px`;

        let scrollPercent = newLeft / maxThumbPosition;
        scrollContainer.scrollLeft = scrollPercent * (scrollContainer.scrollWidth - scrollContainer.clientWidth);

    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        scrollThumb.style.cursor = "grab";
        body.classList.remove("no-select");
    });

    updateThumbPosition();
});
