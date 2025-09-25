function add_items() {
    const addButton = document.getElementById("add-button");
    const addItemsOverlay = document.getElementById("addItemsOverlay");
    const productLists = document.querySelector(".product-lists");

    addButton.addEventListener("click", function (event) {
        event.stopPropagation();
        addItemsOverlay.classList.add("active");

        const cancelButton = addItemsOverlay.querySelector(".cancel-button");
        const saveButton = addItemsOverlay.querySelector(".save-button");

        cancelButton.addEventListener("click", function (event) {
            event.stopPropagation();
            addItemsOverlay.classList.remove("active");
        });

        saveButton.addEventListener("click", function (event) {
            event.stopPropagation();

            //name- price- discount, description
            const addedName = document.getElementById("add-name").value;
            const addedPrice = document.getElementById("add-price").value;
            const addedDiscount = document.getElementById("add-discount").value;

            const fileInput = document.getElementById("add-image");

            // bây giờ phải tạo một card items mới nhé
            const newCard = document.createElement("div");
            newCard.classList.add("card-item");

            // giờ chỉ việc nhìn vào cái fomr của card item rồi điền vào thôi
            newCard.innerHTML = `
                 <div class="watch-div">
          <img class="watch-icon" src="logo/7-watch.webp" />
        </div>
        <div class="product-info">
          <p>
            <span class="product-name"> Watch Active 6</span><br />
            <span class="price-old">4.900.000đ</span><br />
            <span class="price-new">3.610.000</span><br />
            <span class="discount">Discount for member of 8XBet Edu</span>
          </p>
        </div>

        <button class="setting-button">⋮</button>

        <!-- cần thêm một div ẩn gồm 3 phần, xem sản phẩm, thêm sản phẩm, xóa sản phẩm-->
        <div class="setting-option">
          <div class="option" data-action="delete">Delete item</div>
          <!-- cái data này đã học rồi-->
          <div class="option" data-action="update">Update item</div>
        </div>
            `;

            newCard.querySelector('.product-name').textContent = addedName;
            newCard.querySelector('.price-old').textContent = `${parseInt(addedPrice) * 1.5}`;
            newCard.querySelector('.price-new').textContent = addedPrice;
            newCard.querySelector('.discount').textContent = addedDiscount;

            if (fileInput.files.length > 0) {
                const file = fileInput.files[0];
                const newURL = URL.createObjectURL(file);
                newCard.querySelector(".watch-icon").src = newURL;
            }

            else {
                newCard.querySelector('.watch-icon').src = "logo/7-watch.webp";
            }


            //them cai div newCard với classlist card-item này vào trong JS DOM mới của mainscreen
            productLists.appendChild(newCard);

            //sau khi xong thì mình cần phải reset cái form nhập sản phẩm đó về null hết
            document.getElementById("add-name").value = "";
            document.getElementById("file-name").textContent = "ccHUaw chọn ảnh";
            document.getElementById("add-price").value = "";
            document.getElementById("add-discount").value = "";
            document.getElementById("add-description").value = "";
            document.getElementById("add-image").value = "";

            addItemsOverlay.classList.remove("active");




        });




    });
}

add_items();
