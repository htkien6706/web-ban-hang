const viewButtons = document.querySelectorAll(".watch-div");

for(let i = 0; i < viewButtons.length; i++) {
    const viewButton = viewButtons[i];

    viewButton.addEventListener('click', function(event) {
        event.stopPropagation();

        window.open("product-" + i + ".html", '_blank');
    })
}