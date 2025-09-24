function updateItems() {
    const updateButtons = document.querySelectorAll('.option[data-action="update"]');
    const updateOverlay = document.getElementById("updateOverlay");

    for(let i = 0; i < updateButtons.length; i++) {
        const currentUpdateButton = updateButtons[i];
        const currentSettingOption = currentUpdateButton.parentElement;
        const currentCardItem = currentSettingOption.parentElement;

        currentUpdateButton.addEventListener('click', function(event) {
            event.stopPropagation();
            updateOverlay.classList.add("active");

            const cancelButton = updateOverlay.querySelector('.cancel-button');
            const saveButton = updateOverlay.querySelector('.save-button');

            cancelButton.addEventListener('click', function(event) {
                event.stopPropagation();
                updateOverlay.classList.remove("active");
            })

            // get the old name from main-screen.html
            const currentName = currentCardItem.querySelector('.product-name');
            document.getElementById("update-name").value = currentName.textContent;

            //get the old price also from main-screenhhtml
            const currentPrice = currentCardItem.querySelector('.price-new');
            document.getElementById("update-price").value = currentPrice.textContent;

            const currentDiscount = currentCardItem.querySelector('.discount');
            document.getElementById("update-discount").value = currentDiscount.textContent.trim();

            // nếu mà như này thì sẽ bị sai này:
            // const html1 = get...(ofhtml1);
            //const html2 = html.value .... thì chắc chắn sẽ bị sai bởi vì là js nó chỉ liên két với 2 file
            // và nó tạo ra mỗi html khi load trang một cái DOM độc lập riêng-> không thể gán của thằng này cho thằng khác được
            // html1 giông nhà A, html2 giống nhà B, js giống nhưu người vận chuyển-> ở nhà này không thể lấy đồ nhà kia -> không thể lấy object này gán trực tiếp cho object html khác
            // do đó, để mang được đồ từ html1-> html2-> phải dùng localStorage 
            // chuyển hết đồ ở html1 cần -> vào localStorage rồi magn qua nhà 2(HTML2);

            saveButton.addEventListener('click', function(event) {
                event.stopPropagation();
                const newPrice = document.getElementById("update-price").value;
                const newDiscount = document.getElementById("update-discount").value;
                const newName = document.getElementById("update-name").value;

                currentCardItem.querySelector('.product-name').textContent = newName;
                currentCardItem.querySelector('.price-new').textContent = newPrice;
                currentCardItem.querySelector('.discount').textContent = newDiscount;

                const productId = i;

                //sử dụng object để lưu lại -> rồi stringify nó thành string để localStorage
                
                const product = {
                    name: newName,
                    price: newPrice,
                    discount: newDiscount,
                    id: i
                };

                //localStorage chỉ lưu được string-> chuyển object kia thành string thì mới lưu và sử dụng lại ở html khác được
                localStorage.setItem(`product-${productId}`, JSON.stringify(product));
                updateOverlay.classList.remove("active");
            });

            

        })

    }
    
}

updateItems();