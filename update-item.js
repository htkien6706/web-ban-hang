function updateItems() {
    const updateButtons = document.querySelectorAll('.option[data-action="update"]');
    const updateOverlay = document.getElementById("updateOverlay");
    const product_i_descriptions = document.querySelectorAll('.pd-acc-body');

    for(let i = 0; i < updateButtons.length; i++) {
        const updateButton = updateButtons[i];
        const product_i_description = product_i_descriptions[i];

        updateButton.addEventListener('click', function(event) {
            event.stopPropagation();
            updateOverlay.classList.add("active");

            const settingOption = updateButton.parentElement;
            const settingButton = settingOption.parentElement;
            const currentCardItem = settingButton.parentElement;

            const cancelButton = updateOverlay.querySelector('.cancel-button');
            const saveButton = updateOverlay.querySelector('.save-button');

            cancelButton.addEventListener('click', function(event) {
                event.stopPropagation();
                updateOverlay.classList.remove("active");
            });


            // now, I need to prefill the value of name, price, discount and description
              const oldName = currentCardItem.querySelector('.product-name').textContent.trim();
            document.getElementById("update-name").value = oldName;

            const newPrice = currentCardItem.querySelector('.price-new').textContent.trim();
            document.getElementById('update-price').value = newPrice;

            const oldPrice = currentCardItem.querySelector('.price-old').textContent.trim();
            const discount = currentCardItem.querySelector('.discount').textContent.trim();
            document.getElementById("update-discount").value = discount;

            let description = document.getElementById("update-desc");
            description.textContent = product_i_description.innerHTML;
            


            
            
            



        })
    }
}

updateItems();