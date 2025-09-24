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
            
        })

        

        

    })
}

add_items();