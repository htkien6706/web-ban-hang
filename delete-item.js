// mé tìm mãi mới ra bug, tức là mình bị trùng tên biến giữa options butTons ở setting-button.js và delete-items.js
// -> viết lại từ đầu
// để tránh trùng tên-> nhét vào một hàm rồi tí nữa retunr hàm đó
// mé nó, sau cùng bug nó là override các giá trị của những hàm từ những file js khác nhau
// và bug nữa đó chính là trùng tên biến const ở trong một scope haizz khổ vcll ra huhu
function removeItems() {
  const optionDeleteButtons = document.querySelectorAll('.option[data-action ="delete"]');
  const overlay = document.getElementById("overlay");

  for (let i = 0; i < optionDeleteButtons.length; i++) {
    const optionDeleteButton = optionDeleteButtons[i];
    const action = optionDeleteButton.dataset.action;
    const settingOption = optionDeleteButton.parentElement;
    const currentCardItem = settingOption.parentElement;

    optionDeleteButton.addEventListener("click", function (event) {
      event.stopPropagation();

        overlay.classList.add("active");
        const cancelButton = overlay.querySelector('.cancel-button');
        const confirmedlyDeleteButton = overlay.querySelector('.delete-button');

        // NẾU LẠI BẤM CANCEL -> LẠI TIẾP TỤC ẨN CÁI POP-UP NÀY ĐI THÔI
        cancelButton.addEventListener('click', function(event) {
            event.stopPropagation();
            overlay.classList.remove("active");
        })

        confirmedlyDeleteButton.addEventListener('click', function(event) {
            event.stopPropagation();
            currentCardItem.remove();
            overlay.classList.remove("active");
        })
    });
  }
}

removeItems(); // đầu tiên dùng return hàm này, sau thì thấy sai ở tab console f12
// nên là cứ vào đấy thấy lỗi nào không biết thì search google + chatgpt

// SAU KHI HIỆN ĐƯỢC POP UP XONG, THÌ CẦN SỬ LÍ
// + KHI BẤM CANCEL -> THÌ LẠI ẨN POP-UP ĐI
// + kHI BẤM DELETE -> THÌ REMOVE CÁI POP-UP + REMOVE CÁI CARD-ITEM ĐÓ KHỎI DOM
// + CẦN DESIGN NÓ DƯỚI DẠNG FLEX ĐỂ KHI XÓA SẢN PHẨM CÁC SẢN PHẨM SAU NÓ TỰ
// NGẢY LÊN TRÊN ĐỂ FILL VÀO CHỖ TRỐNG
// + PHẢI XÁC ĐỊNH ĐƯỢC CHÍNH XÁC CÁI CARD-ITEM CẦN XÓA, ĐÓ MỚI LÀ CÁI KHÓ NAHAST
