//your code here
let selectedImages = [];

function selectImage(image) {
    if (selectedImages.length < 2) {
        image.style.border = "5px solid blue";
        selectedImages.push(image);
    }
    if (selectedImages.length === 1) {
        document.getElementById("reset").style.display = "block";
    }
    if (selectedImages.length === 2) {
        document.getElementById("verify").style.display = "block";
    }
}

function reset() {
    selectedImages.forEach(image => {
        image.style.border = "none";
    });
    selectedImages = [];
    document.getElementById("reset").style.display = "none";
    document.getElementById("verify").style.display = "none";
    document.getElementById("para").style.display = "none";
}

function verify() {
    if (selectedImages[0].className === selectedImages[1].className) {
        document.getElementById("para").innerHTML = "You are a human. Congratulations!";
    } else {
        document.getElementById("para").innerHTML = "We can't verify you as a human. You selected the non-identical tiles.";
    }
    document.getElementById("para").style.display = "block";
    document.getElementById("reset").style.display = "none";
    document.getElementById("verify").style.display = "none";
}
