// phần này sẽ customize tất cả các thứ ở ô kebab menu, tức là phần setting button thôi, khi bấm vào nó
// thì nó sẽ một là ẩn đi tất cả những setting options khác và 2 là hiện setting option ở chính cái chỗ đó
// tiếp nữa là khi bấm ra ngoài thì nó sẽ ẩn đi tất cả những cái setting options của all products

const settingButtons = document.querySelectorAll(".setting-button");

for(let i = 0; i < settingButtons.length; i++) {
    const settingButton = settingButtons[i];

    settingButton.addEventListener('click', function(event) {
        event.stopPropagation();
        const card = settingButton.parentElement;
        const settingOption = card.querySelector(".setting-option"); // inside queryselector must be css string selector

        
    if(getComputedStyle(settingOption).display === "flex") {
        settingOption.style.display = "none";
    }

    else settingOption.style.display = "flex";

    // khi click vào nút setting button này, thì tất cả những nút setting options sẽ đều bị hủy đi ngay lập tức
    
    for(let j = 0; j < settingButtons.length; j++) {
        if(j != i) {
            const otherSettingButton = settingButtons[j];
            const otherCard = otherSettingButton.parentElement;
            const otherSettingOption = otherCard.querySelector(".setting-option");

            otherSettingOption.style.display = "none";
        }
    }
    });
}

const optionButtons = document.querySelectorAll(".option");
    for(let i = 0; i < optionButtons.length; i++) {
        const optionButton = optionButtons[i];

        optionButton.addEventListener('click', function(event) {
            event.stopPropagation();
        })
    }

    // khi click ra ngoài thì tất cả tắt hết
    document.addEventListener("click", function () {
    for (let i = 0; i < settingButtons.length; i++) {
        const button = settingButtons[i];
        const card = button.parentElement;
        const optionDiv = card.querySelector(".setting-option");
        optionDiv.style.display = "none";
    }
    });

    