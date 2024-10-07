function convertToBinary() {
    // Récupérer la valeur entrée par l'utilisateur
    let decimalInput = document.getElementById("decimalInput").value;
    
    // Vérifier si la valeur entrée est un nombre valide (nombre entier uniquement)
    if (isNaN(decimalInput) || decimalInput.trim() === "" || /\D/.test(decimalInput)) {
        // Si la valeur est invalide, effacer le contenu de #binaryResult
        document.getElementById("binaryResult").innerText = "";
        return;
    }

    // Convertir la valeur en entier
    let decimalNumber = parseInt(decimalInput, 10);

    // Effectuer la conversion en binaire
    let binaryResult = decimalNumber.toString(2);

    // Afficher le résultat binaire
    document.getElementById("binaryResult").innerText = "Représentation binaire : " + binaryResult;
}
