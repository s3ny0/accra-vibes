window.addEventListener("DOMContentLoaded", function () {
    function updateFontSize() {
        let element = document.getElementById("page-title");
        if (!element) return;

        let baseFontSize = 1.7; // base font size - 2rem
        let baseWidth = 200; // starting viewport width - 200px
        let increment;
        
        if (window.innerWidth >= 1200) {
            increment = 0.5;
        } else if (window.innerWidth >= 700) {
            increment = 0.3;
        } else {
            increment = 1.4;
        }

        let newFontSize = baseFontSize + Math.floor((window.innerWidth - baseWidth) / 100) * increment;
        newFontSize = Math.max(baseFontSize, newFontSize); // Prevent shrinking

        element.style.fontSize = newFontSize + "rem";
    }

    window.addEventListener("resize", updateFontSize);
    updateFontSize(); // Run once on page load
    
});
let scrollContainer = document.getElementById("wrapper");

function loopScroll() {
    if (scrollContainer.scrollLeft + window.innerWidth >= scrollContainer.scrollWidth) {
        scrollContainer.scrollTo({
            left: 0,
            behavior: "smooth"
        });
    }
}

scrollContainer.addEventListener("scroll", loopScroll);
