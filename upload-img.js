function uploadImage() {
    const fileInput = document.getElementById("add-image");
    const fileName = document.getElementById("file-name");

    //học lỏm trên youtube
    fileInput.addEventListener('change', function() {
        if(fileInput.files.length == 0) fileName.textContent = "No file uploaded";
        else fileName.textContent = fileInput.files[0].name;
    })
}

uploadImage();