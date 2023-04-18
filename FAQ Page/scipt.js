var accordions = document.querySelectorAll('.accordion');

accordions.forEach(function(accordion) {
    var accordionHeader = accordion.querySelector('.accordionHeader');
    var accordionContent = accordion.querySelector('.accordionContent');

    accordionHeader.addEventListener('click', function() {
        accordion.classList.toggle('active');

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});