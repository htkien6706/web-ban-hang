function add_items() {
    const addButton = document.getElementById("add-button");
    const addItemsOverlay = document.getElementById("addItemsOverlay");

    addButton.addEventListener('click', function(event) {
        event.stopPropagation();
        addItemsOverlay.classList.add("active");

        const cancelButton = addItemsOverlay.querySelector('.cancel-button');
        const saveButton = addItemsOverlay.querySelector('.save-button');

        cancelButton.addEventListener('click', function(event) {
            event.stopPropagation();
            addItemsOverlay.classList.remove("active");
        });

        saveButton.addEventListener('click', function(event) {
            event.stopPropagation();

            //name- price- discount, description
            const addedName = document.getElementById("add-name").value;
            const addedPrice = document.getElementById("add-price").value;
            const addedDiscount = document.getElementById("add-discount").value;
            
        })

        

        

    })
}

add_items();