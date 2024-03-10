function openDialog(imagePath) {
    var dialogBox = document.getElementById("dialog-box");
    var placeInput = document.getElementById("placeInput");
    var resultText = document.getElementById("result-text");

    placeInput.value = "";
    resultText.innerHTML = "";

    document.getElementById("dialog-image").src = imagePath;
    dialogBox.style.display = "block";
}

function submitPlace() {
    var placeInput = document.getElementById("placeInput");
    var resultText = document.getElementById("result-text");

    var userInput = placeInput.value.toLowerCase().trim();

    if (userInput === "pl. du chateau, jumilhac-le-grand") {
        resultText.innerHTML = "Félicitations, vous avez trouvé ! Voici le flag : {RoBineStenFerMED@nsLePéRig0rD}";
    } else {
        resultText.innerHTML = "Ce n'est pas la bonne adresse ou vous l'avez mal écrit (vérifiez bien le format)";
    }
}
